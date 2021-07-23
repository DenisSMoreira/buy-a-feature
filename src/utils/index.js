/* eslint-disable prettier/prettier */
import Cookie from 'js-cookie';

export const AUTHORIZATION_BEARER = 'c29tb3M6c29tb3Mtc2VjcmV0';
export const AUTH_BASE_URL = 'http://localhost:2612';
export const CLIENT_ID = 'somos';
export const CLIENT_SECRET = 'somos-secret';
export const GRANT_TYPE_LOGIN = 'password';
export const GRANT_TYPE_REFRESH = 'refresh_token';
export const SCOPE = 'read write';
export const AUTH_KEYS = {
  TOKEN: 'TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};

export function getTokenFromCookies(req) {
  let token = null;
  let refreshToken = null;

  if (req && req.headers && req.headers.cookie) {
    const decodedCookie = decodeURIComponent(req.headers.cookie);

    decodedCookie.split('; ').forEach((cookie) => {
      if (cookie.includes(AUTH_KEYS.TOKEN)) {
        [, token] = cookie.split('=');
      }
      if (cookie.includes(AUTH_KEYS.REFRESH_TOKEN)) {
        [, refreshToken] = cookie.split('=');
      }
    });
  } else {
    token = Cookie.getJSON(AUTH_KEYS.TOKEN);
    refreshToken = Cookie.getJSON(AUTH_KEYS.REFRESH_TOKEN);
  }

  return { token, refreshToken };
}

export function getDateFromString(date) {
  const dateExtracted = date.split(' ');
  return `${dateExtracted[0]}`;
}

export function capitalize(string) {
  if (!string) return '';

  if (string.length === 1) return string.toUpperCase();

  return `${string[0].toUpperCase()}${string.slice(1)}`;
}
