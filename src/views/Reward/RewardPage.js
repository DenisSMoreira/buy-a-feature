/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/rewardPage.js";

const useStyles = makeStyles(styles);

import studio1 from "assets/img/premios/camiseta.png";
import studio2 from "assets/img/premios/caneca.png";
import studio4 from "assets/img/premios/kitstaff.png";

import work1 from "assets/img/premios/kitvencedor.png";


import Code from "@material-ui/icons/Code";
import EmojiEvents from "@material-ui/icons/EmojiEvents";



const dashboardRoutes = [];

export default function PremiationPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
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
             <h2 className={classes.title}> Um desafio bom é um desafio com recompensa, certo? </h2>
              <p>
                <h4>
                  Todos que participarem irão receber o kit participação e teremos uma equipe vencedora onde cada 
                  membro receberá um <b>Headset Hyperx Cloud Stinger Core 7.1- Wireless</b> e um <b>Mouse Sem Fio Gamer Razer Atheris</b>.
                </h4>
              </p>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="info"
                    tabs={[
                      {
                        tabButton: "Kit Participação",
                        tabIcon: Code,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Equipe Vencedora",
                        tabIcon: EmojiEvents,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
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
