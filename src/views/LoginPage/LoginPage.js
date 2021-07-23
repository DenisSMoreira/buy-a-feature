/* eslint-disable prettier/prettier */
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import qs from 'qs';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Warning from "@material-ui/icons/Warning";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Cookie from 'js-cookie';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg-simple.png";

import Router from 'next/router';

import { login } from "services/login";
import { useMutation } from "react-query";


import {
  SCOPE,
  GRANT_TYPE_LOGIN,
  CLIENT_ID,
  CLIENT_SECRET,
  AUTH_KEYS,
} from 'utils';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    form: false,
    login: false,
    password: false,
  });

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  const { ...rest } = props;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      form: false,
      [e.target.name]: false,
    });
  }

  function validate() {
    const formErrors = {};

    if (!form.username) {
      formErrors.username = true;
    }

    if (!form.password) {
      formErrors.password = true;
    }
    return formErrors;
  }

  function hasErrors(formErros) {
    return Object.values(formErros).some((error) => !!error);
  }

  function onError() {
    console.log("onError", errors)
    setErrors({
      ...errors,
      form: true,
    });
  }

  function onSuccess(data) {
    console.log("onSuccess", data)
    const { query } = Router;
    if (data) {
      Cookie.set(AUTH_KEYS.TOKEN, data.access_token);
      Cookie.set(AUTH_KEYS.REFRESH_TOKEN, data.refresh_token);
    }
    if (query && query.redirect_to) {
      Router.push(query.redirect_to);
    } else {
      Router.push('/');
    }
  }
  const [loginRequest] = useMutation(login, {
    onSuccess,
    onError,
  });

  async function onSubmit(e) {
    e.preventDefault();

    const {
      username,
      password,
    } = form;

    const formErros = validate();

    if (!hasErrors(formErros)) {
      const requestData = qs.stringify({
        username,
        password,
        scope: SCOPE,
        grant_type: GRANT_TYPE_LOGIN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      });
      console.log("requestData", requestData)
      loginRequest(requestData);
    }
    console.log(formErros)
    setErrors(formErros);
  } 

  return (
    <div>
      <Header
        color="transparent"
        brand="hackathon do bem_"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={onSubmit}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Autenticação</h4>
                  </CardHeader>
                  <CardBody>
                  {errors.form && <SnackbarContent
                      message={
                        <span>
                          <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
                          looking at your phone and find them...
                        </span>
                      }
                      close
                      color="warning"
                      icon={Warning}
                    />}
                    <CustomInput
                      labelText="Usuário do AD"
                      error={errors.username}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name: "username",
                        onChange: (event) => handleChange(event),
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <CustomInput
                      labelText="Password"
                      error={errors.password}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        name: "password",
                        onChange: (event) => handleChange(event),
                        endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      type="submit"
                      color="info"
                      size="lg"
                    >
                    Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
