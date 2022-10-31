import React from "react";

class MainForm extends React.Component {
    render(){
        return(
            <div className="Form">
                <div className="wrapper white second">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3 col-md-8 col-sm-10 offset-3 col-xs-12">
                                <h2>Por favor, registre <span>SU COPIA "GEMINI 2"</span></h2>
                                <form className="req-form">
                                    <div className="col-sm-6 col-xs-12 form-group wrap_name">
                                        <input placeholder="Su nombre" type="text" id="first-name" className="filed first-name form-control gtd-filed-fname req w-input" />
                                    </div>
                                    <div className="col-sm-6 col-xs-12 form-group wrap_surname">
                                        <input placeholder="Su apellido" type="text" id="last-name" className="filed last-name form-control gtd-filed-fname req w-input" />
                                    </div>
                                    <div className="col-sm-12 col-xs-12 form-group wrap_email">
                                        <input placeholder="Su dirección de correo electrónico" type="email" id="email" className="filed email form-control gtd-filed-fname req w-input" />
                                    </div>
                                    <div className="col-sm-12 col-xs-12 form-group wrap_phone_number">
                                        <input type="tel" id="input-tel" className="filed tel form-control gtd-filed-fname req w-input" />
                                    </div>
                                    <div className="col-xs-12 form-group wrap_submit_btn">
                                        <button id="register-button" className="button gradient gtd-form-submit signup w-submit">CREAR UNA CUENTA GRATUITA</button>
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