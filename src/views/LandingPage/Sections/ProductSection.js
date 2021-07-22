/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>O que é Hackathon?</h2>
          
          <h5 className={classes.description}>Originalmente, Hackathon é uma competição entre programadores cuja finalidade é esboçar a ideia de algum software que vise a resolução de determinado problema. Essas competições ainda acontecem – seja de forma online ou presencial – mas o conceito acabou se expandindo. </h5>
          <h5 className={classes.description}>Hoje, os hackathons estão cada vez mais presente nas empresas. No meio corporativo o Hackathon não acontece necessariamente visando a construção de um software, mas, sim, em soluções de modo geral. Os participantes se juntam e tentam resolver determinado problema ou até mesmo começar a propor projetos a melhoria  de algum processo. Um Hackathon dentro de uma corporação nada mais é do que um evento que busca a troca de ideias para desenvolver novas tecnologias e inovações.</h5>
          <h5 className={classes.description}>Não é apenas para as organizações que os hackthons são benéficos, já que permitem que seus participantes possam se conhecer e fazer networking. Eles também podem desenvolver novas habilidades e técnicas, tais como: capacidade analítica, proatividade e agilidade, capacidade de comunicação e relacionamento.</h5>

        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>Qual será nosso objetivo?</h2>
        <h4 className={classes.description}>
          Transformar a Care Store em uma loja sem fronteiras e  atender todas regiões do Brasil.
        </h4>
        </GridItem>
      <br/>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Não manja de projetos sociais?"
              description="Sem problemas! Durante o Hackathon da Invillia, você terá apoio de mentores experts no assunto para tirar dúvidas, ter orientações e receber feedbacks."
              icon={Fingerprint}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="O que posso esperar do evento?"
              description="16h de desafios, colaboração, aprendizados e muita inovação. Esse é o Hackathon do bem da Invillia!"
              icon={Fingerprint}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Haverá mentoria?"
              description="Sim, haverá 06 mentores para direcionar seu time para os melhores caminhos"
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
