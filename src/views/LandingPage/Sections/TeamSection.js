/* eslint-disable prettier/prettier */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import mateus from "assets/img/faces/mateus_gustavo_ignacio.jpg";
import denis_moreira from "assets/img/faces/denis_moreira.jpg";
import murilo from "assets/img/faces/murilo_serafim.jpg";
import oswaldo from "assets/img/faces/oswaldo_reis.jpg";
import paulo from "assets/img/faces/paulo_oliveira.jpg";
import roger from "assets/img/faces/roger_sborchia.jpg";
import andre from "assets/img/faces/andre_piva.jpg";
import daniane from "assets/img/faces/daniane.png";
import gisele from "assets/img/faces/gisele.png";
import saulo from "assets/img/faces/saulo.png";
import sergio from "assets/img/faces/sergio.png";
import bolzan from "assets/img/faces/bolzan.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>mentores_</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={mateus} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Matheus Ignácio
                <br />
                <small className={classes.smallTitle}>Product Owner</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={murilo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Murilo Serafim
                <br />
                <small className={classes.smallTitle}>Product Owner</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={oswaldo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Oswaldo Reis
                <br />
                <small className={classes.smallTitle}>Tech Lead</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={paulo} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Paulo Oliveira
                <br />
                <small className={classes.smallTitle}>Produc Owner</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={roger} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Roger Sborchia
                <br />
                <small className={classes.smallTitle}>UX Designer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                />
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={denis_moreira} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Denis Moreira
                <br />
                <small className={classes.smallTitle}>Tech Specialist</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                />
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <div className={classes.section}>
          <h2 className={classes.title}>banca avaliadora_</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={saulo} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Saulo Rodrigues
                    <br />
                    <small className={classes.smallTitle}>Digital Workplace Director</small>
                  </h4>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    />
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={andre} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    André Piva
                    <br />
                    <small className={classes.smallTitle}>Chief Strategy and Innovation Officer</small>
                  </h4>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    />
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={daniane} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Daniane Martins
                    <br />
                    <small className={classes.smallTitle}>Agile Delivery Leader</small>
                  </h4>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={sergio} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Sérgio Caliani
                    <br />
                    <small className={classes.smallTitle}>Cultura Digital e Talentos</small>
                  </h4>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={gisele} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Gisele Gibson Ribeiro
                    <br />
                    <small className={classes.smallTitle}>Talent Development Manager</small>
                  </h4>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={bolzan} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Renato Bolzan
                    <br />
                    <small className={classes.smallTitle}>Founder & CEO na Invillia</small>
                  </h4>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
