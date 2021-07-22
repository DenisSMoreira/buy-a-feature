/* eslint-disable prettier/prettier */
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/schedulePage.js";

const useStyles = makeStyles(styles);

import CalendarToday from "@material-ui/icons/CalendarToday";

export default function SchedulePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand="hackathon do bem_"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/bd-dark-hckbem.png").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <div className={classes.description}>
             <h2 className={classes.title}>Programação </h2>
              <p><h4>
               Quando iremos <b>iniciar</b> essa transformação? Segue a <b>programação</b> desse evento super especial:{" "}
              </h4></p>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="info"
                    tabs={[
                      {
                        tabButton: "1º Dia - 24 de Julho",
                        tabIcon: CalendarToday,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                              <p className={classes.textLeft}><h3><b>09:00 - 09:30</b> Briefing</h3></p>
                              <p className={classes.textLeft}><h3><b>09:30 - 10:30</b> Fase de ideação</h3></p>
                              <p className={classes.textLeft}><h3><b>10:30 - 11:00</b> Mentorias</h3></p>
                              <p className={classes.textLeft}><h3><b>11:00 - 11:30</b> Trabalho/Intervalo</h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> Mentorias</h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> Trabalho</h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> Entrega</h3></p>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "2º Dia - 31 de Julho",
                        tabIcon: CalendarToday,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                              <p className={classes.textLeft}><h3><b>09:00 - 09:30</b> Briefing</h3></p>
                              <p className={classes.textLeft}><h3><b>09:30 - 10:30</b> Trabalho</h3></p>
                              <p className={classes.textLeft}><h3><b>10:30 - 11:00</b> Mentorias</h3></p>
                              <p className={classes.textLeft}><h3><b>11:00 - 11:30</b> Intervalo</h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> Mentorias</h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> </h3></p>
                              <p className={classes.textLeft}><h3><b>12:00 - 13:00</b> Entrega</h3></p>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
