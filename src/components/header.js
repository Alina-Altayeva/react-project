/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { useForm } from "react-hook-form";
import logo from "../assets/logo.png"
import video from "./../assets/538.mp4"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
  render(){
    
    return (
        <div className="Head">
            <Container>
                <div className="row">
                    <Col sm={2} xs={12}>
                        <img src={logo} className="logo" alt="logo"/>
                    </Col>
                </div>
                <div>

                </div>
                <h1 className="larger subheader">BIENVENIDO A LA ZONA DE USUARIOS "GEMINI 2"</h1>
                <h1 className="header larger">¡MIRA ESTE IMPORTANTE VIDEO Y APRENDE A GANAR MÁS DE $1,892,460 CADA MES!</h1>
            </Container>
            <Container fluid >
                <Card>
                    <Row>
                        <Col md={8} xs={12}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video controls loop autoPlay muted src={video}></video>
                            </div>       
                        </Col>
                        <Col md={4} xs={12}>
                            <h2 className="toCenter">Por favor, registre<span>su copia de "GEMINI 2"</span></h2>
                            <div className="location toCenter">QUEDAN <span id="req-slots">2</span><span className="slots">PLAZAS</span></div>
                            <form className="req-form" id="reqForm" data-fr-reg noValidate="novalidate">
                                <div className="gtd-form-wrapper">
                                    <div className="row">
                                        <Col sm={6} xs={12} className="form-group wrap_name">
                                            <input type="text" placeholder="Su nombre" id="first-name" className="filed first-name form-control-b gtd-filed-fname req w-input" />
                                        </Col>
                                        <Col sm={6} xs={12} className="form-group wrap_surname">
                                            <input type="text" placeholder="Su apellido" id="last-name" className="filed last-name form-control-b gtd-filed-fname req w-input" />
                                        </Col>
                                    </div>
                                    <Col sm={12} xs={12} className="form-group wrap_email">
                                        <input placeholder="Su dirección de correo electrónico" type="email" id="email" className="filed email form-control-b gtd-filed-fname req w-input" />
                                    </Col>
                                    <Col sm={12} xs={12} className="form-group wrap_phone_number">
                                        <input type="tel" id="input-tel" className="filed tel form-control-b gtd-filed-fname req w-input" />
                                    </Col>
                                    <Col xs={12} className="form-group wrap_submit_btn">
                                        <Button type="submit" id="register-button" className="button gradient gtd-form-submit signup w-submit">CREAR UNA CUENTA GRATUITA</Button>
                                    </Col>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
  }
}

export default Header;