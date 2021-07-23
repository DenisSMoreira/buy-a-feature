/* eslint-disable prettier/prettier */
import Cookie from 'js-cookie';
import axios from 'axios';
import qs from 'qs';

import { setCookie, destroyCookie } from 'nookies';

import authCreator from './auth';

import {
  API_BASE_URL,
  AUTHORIZATION_BEARER,
  AUTH_KEYS,
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE_REFRESH,
  SCOPE,
  getTokenFromCookies,
} from '.';

export default (ctx = {}) => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 7000,
  });

  api.interceptors.request.use((config) => {
    const { token } = getTokenFromCookies(ctx.req);

    if (!config.headers.Authorization && token != null) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }, (err) => Promise.reject(err));

  function refreshHydrate(token) {
    return ({
      scope: SCOPE,
      grant_type: GRANT_TYPE_REFRESH,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: token,
    });
  }

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error?.response?.status === 401) {
        const { refreshToken } = getTokenFromCookies(ctx.req);

        const originalRequest = error.config;

        if (!originalRequest.retry) {
          originalRequest.retry = true;

          if (refreshToken) {
            try {
              const authApi = authCreator(ctx);

              const { data } = await authApi.post('/oauth/token', qs.stringify(refreshHydrate(refreshToken)), {
                headers: {
                  Authorization: `Basic ${AUTHORIZATION_BEARER}`,
                },
              });

              Cookie.set(AUTH_KEYS.TOKEN, data.access_token);
              Cookie.set(AUTH_KEYS.REFRESH_TOKEN, data.refresh_token);

              if (ctx) {
                setCookie(ctx, AUTH_KEYS.TOKEN, data.access_token, {
                  maxAge: 30 * 24 * 60 * 60,
                  path: '/',
                });
                setCookie(ctx, AUTH_KEYS.REFRESH_TOKEN, data.refresh_token, {
                  maxAge: 30 * 24 * 60 * 60,
                  path: '/',
                });
              }

              api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
              originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

              return api(originalRequest);
            } catch (e) {
              Cookie.remove(AUTH_KEYS.TOKEN);
              Cookie.remove(AUTH_KEYS.REFRESH_TOKEN);

              if (ctx) {
                destroyCookie(ctx, AUTH_KEYS.TOKEN);
                destroyCookie(ctx, AUTH_KEYS.REFRESH_TOKEN);
              }
            }
          }
        } else {
          Cookie.remove(AUTH_KEYS.TOKEN);
          Cookie.remove(AUTH_KEYS.REFRESH_TOKEN);

          if (ctx) {
            destroyCookie(ctx, AUTH_KEYS.TOKEN);
            destroyCookie(ctx, AUTH_KEYS.REFRESH_TOKEN);
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return api;
};
