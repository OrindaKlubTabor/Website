import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"

import Cizek from "../images/students/michael-cizek.png"
import Kraus from "../images/students/adam-kraus.png"
import Stoklasa from "../images/students/erik-stoklasa.png"
import Barlogh from "../images/students/karel-barlogh.png"
import Matejcek from "../images/students/martin-matejcek.png"
import Kopecka from "../images/students/michaela-kopecka.png"
import Vasek from "../images/students/michal-vasek.png"
import Rayova from "../images/students/roxana-rayova.png"
import Stepkova from "../images/students/veronika-stepkova.png"
import Vybiral from "../images/students/marek-vybiral.png"
import Ruzickova from "../images/students/marie-ruzickova.png"
import Fencl from "../images/students/marek-fencl.png"
import { Link } from "gatsby"

function Student(props) {
  return (
    <Link to={"/our-students/" + props.page + "/"}>
      <div
        className="profile profile-blue"
        style={{ backgroundColor: "#002868", color: "white" }}
      >
        <img src={props.src} alt={props.name} style={{ maxWidth: 150 }}></img>
        <h2 style={{ margin: "1rem 0 0.5rem", textAlign: "center" }}>
          {props.name}
        </h2>
        <small>Medailonek {props.year}</small>
      </div>
    </Link>
  )
}

export default () => (
  <Layout>
    <Container>
      <Header headerText="Naši studenti"></Header>
      <p>
        Každý kdo vyhraje v naší soutěži se automaticky stává členem našeho
        klubu a pomáhá nám ho rozvíjet nadále. Za celou dobu máme už přes 15
        členů.
      </p>
    </Container>
    <div className="student-grid">
      <Student
        name="Erik Stoklasa"
        year="2019/2020"
        src={Stoklasa}
        page="michael-cizek"
      ></Student>
      <Student
        name="Marie Růžičková"
        year="2018/2019"
        src={Ruzickova}
        page="michael-cizek"
      ></Student>
      <Student
        name="Marek Vybíral"
        year="2017/2018"
        src={Vybiral}
        page="michael-cizek"
      ></Student>
      <Student
        name="Adam Kraus"
        year="2016/2017"
        src={Kraus}
        page="michael-cizek"
      ></Student>
      <Student
        name="Karel Balogh"
        year="2015/2016"
        src={Barlogh}
        page="michael-cizek"
      ></Student>

      <Student
        name="Marek Fencl"
        year="2014/2015"
        src={Fencl}
        page="michael-cizek"
      ></Student>
      <Student
        name="Roxana Rayová"
        year="2013/2014"
        src={Rayova}
        page="michael-cizek"
      ></Student>
      <Student
        name="Michael Čížek"
        year="2012/2013"
        src={Cizek}
        page="michael-cizek"
      ></Student>
      <Student
        name="Martin Matějček"
        year="2010/2011"
        src={Matejcek}
        page="michael-cizek"
      ></Student>
      <Student
        name="Michaela Kopecká"
        year="2009/2010"
        src={Kopecka}
        page="michael-cizek"
      ></Student>
      <Student
        name="Michal Vašek"
        year="2006/2007"
        src={Vasek}
        page="michael-cizek"
      ></Student>
      <Student
        name="Veronika Štěpková"
        year="2005/2006"
        src={Stepkova}
        page="michael-cizek"
      ></Student>
    </div>
  </Layout>
)
