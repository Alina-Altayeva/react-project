import React from "react";
// import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useForm } from "react-hook-form";
import Telephone from "./telephone";

function MainForm() {
    
    const { register, handleSubmit, formState: { errors}, reset } = useForm({mode: "onblur"})

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }
       
        return(
            <div className="Form js-section">
                <div className="wrapper white second">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-8">
                                <h2 className="form2">Por favor, registre <span>SU COPIA "GEMINI 2"</span></h2>
                                <form className="req-form" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12 form-group wrap_name">
                                            <input {...register('firstName', { required: true })} placeholder="Su nombre" type="text" id="first-name" className="filed first-name form-control-b gtd-filed-fname req w-input" />
                                            {errors?.firstName && errors.firstName.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </div>

                                        <div className="col-sm-6 col-xs-12 form-group wrap_surname">
                                            <input {...register('lastName', { required: true })} placeholder="Su apellido" type="text" id="last-name" className="filed last-name form-control-b gtd-filed-fname req w-input" />
                                            {errors?.lastName && errors.lastName.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </div>

                                        <div className="col-sm-12 col-xs-12 form-group wrap_email">
                                            <input {...register('email', { 
                                                required: 'Email required field', 
                                                pattern: {value:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
                                                message: 'Please enter valid email!'
                                                } })} placeholder="Su dirección de correo electrónico" type="email" id="email" className="filed email form-control-b gtd-filed-fname req w-input" />
                                            {errors?.email && errors.email.type === "required" && <p style={{color: 'red'}}>This field is required.</p>}
                                        </div>
                                        
                                        {/* <div className="col-sm-12 col-xs-12 form-group wrap_phone_number">
                                            <IntlTelInput
                                            containerClassName="intl-tel-input form-control"
                                            inputClassName="form-control"
                                            onPhoneNumberChange={()=> handlePhoneNumberChange(conf)}
                                            onPhoneNumberBlur={()=> handlePhoneNumberChange(conf)}
                                            format
                                            /> 
                                        </div>
                                         */}
                                        <Telephone></Telephone>
                                        <div className="col-xs-12 form-group wrap_submit_btn">
                                            <button type="submit" 
                                            id="register-button" 
                                            // onClick={clearInput}
                                            className="button gradient gtd-form-submit signup w-submit" >CREAR UNA CUENTA GRATUITA</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default MainForm;