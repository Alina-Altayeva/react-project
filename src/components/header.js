/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import logo from "../assets/logo.png"
import video from "./../assets/538.mp4"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Header () {
    const { register, handleSubmit, control, formState: { errors}, reset } = useForm({mode: "onblur"})

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
    return (
        <div className="Head">
            <Container>
                <div className="row">
                    <Col sm={2} xs={12}>
                        <img src={logo} className="logo" alt="logo"/>
                    </Col>
                </div>
                <div className="row larger">
                    <div className="col-xs-12">
                        <div className="larger subheader">BIENVENIDO A LA ZONA DE USUARIOS "GEMINI 2"</div>
                        <div className="header larger">¡MIRA ESTE IMPORTANTE VIDEO Y APRENDE A GANAR MÁS DE $1,892,460 CADA MES!</div>
                    </div>  
                </div>
            </Container>
            <div className="container responsive">
                <Card>
                    <Row>
                        <Col lg={8} md={12} xs={12} sm={12}>
                            <div className="embed-responsive embed-responsive-16by9">
                                <video controls loop autoPlay muted src={video}></video>
                            </div>       
                        </Col>
                        <Col lg={4} md={12} xs={12} sm={12}>
                            <h2 className="toCenter firstH2">Por favor, registre<span>su copia de "GEMINI 2"</span></h2>
                            <div className="location toCenter">QUEDAN <span id="req-slots">2</span><span className="slots">PLAZAS</span></div>
                            <form onSubmit={handleSubmit(onSubmit)} className="req-form" id="reqForm" data-fr-reg noValidate="novalidate" >
                                <div className="gtd-form-wrapper">
                                    <div className="row">
                                        <Col sm={6} xs={12} className="form-group wrap_name">
                                            <input {...register('firstName', { required: true })} type="text" placeholder="Su nombre" id="first-name" className="filed first-name form-control-b gtd-filed-fname req w-input" />
                                            {errors?.firstName && errors.firstName.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </Col>
                                        <Col sm={6} xs={12} className="form-group wrap_surname">
                                            <input {...register('lastName', { required: true })} type="text" placeholder="Su apellido" id="last-name" className="filed last-name form-control-b gtd-filed-fname req w-input" />
                                            {errors?.lastName && errors.lastName.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </Col>
                                        <Col sm={12} xs={12} className="form-group wrap_email">
                                            <input 
                                            {...register('email', { 
                                                required: 'Email required field', 
                                                pattern: {value:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                                                message: 'Please enter valid email!'
                                                } })}
                                            placeholder="Su dirección de correo electrónico" type="email" id="email" className="filed email form-control-b gtd-filed-fname req w-input" />
                                        </Col>
                                        <Col sm={12} xs={12} className="form-group wrap_phone_number">
                                            {/* <IntlTelInput {...register("SomeText", { required: true })} 
                                            containerClassName="intl-tel-input col-sm-12 form-control-b inputTel" 
                                            inputClassName="form-control" /> */}
                                            <Controller
                                                className="form-control-b"
                                                control={control}
                                                name="phone"
                                                render={({ field: { ref, ...field } }) => (
                                                    <ReactPhoneInput
                                                        {...field}
                                                        className="form-control-b"
                                                        inputClass="form-control-b-tel"
                                                        inputStyle={{width: '100%', border: 'none'}}
                                                        inputExtraProps={{
                                                            ref,
                                                            required: true,
                                                            autoFocus: true
                                                        }}
                                                        country={"us"}
                                                        // onlyCountries={["us"]}
                                                    />
                                                )}
                                            />
                                            {errors?.email && errors.email.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </Col>
                                        <Col xs={12} className="form-group wrap_submit_btn">
                                            <Button type="submit" id="register-button" className="button gradient gtd-form-submit signup w-submit">CREAR UNA CUENTA GRATUITA</Button>
                                        </Col>
                                    </div> 
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    )
  
}

export default Header;