import React from "react";
import IntlTelInput from "react-intl-tel-input-18";
import 'react-intl-tel-input-18/dist/main.css'

class MainForm extends React.Component {
    render(){
        return(
            <div className="Form js-section">
                <div className="wrapper white second">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-8">
                                <h2 className="form2">Por favor, registre <span>SU COPIA "GEMINI 2"</span></h2>
                                <form className="req-form">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12 form-group wrap_name">
                                            <input placeholder="Su nombre" type="text" id="first-name" className="filed first-name form-control-b gtd-filed-fname req w-input" />
                                        </div>
                                        <div className="col-sm-6 col-xs-12 form-group wrap_surname">
                                            <input placeholder="Su apellido" type="text" id="last-name" className="filed last-name form-control-b gtd-filed-fname req w-input" />
                                        </div>
                                        <div className="col-sm-12 col-xs-12 form-group wrap_email">
                                            <input placeholder="Su dirección de correo electrónico" type="email" id="email" className="filed email form-control-b gtd-filed-fname req w-input" />
                                        </div>
                                        <div className="col-sm-12 col-xs-12 form-group wrap_phone_number">
                                            <IntlTelInput containerClassName="intl-tel-input col-sm-12 form-control-b inputTel" inputClassName="form-control" />
                                        </div>
                                        <div className="col-xs-12 form-group wrap_submit_btn">
                                            <button id="register-button" className="button gradient gtd-form-submit signup w-submit">CREAR UNA CUENTA GRATUITA</button>
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
}

export default MainForm;