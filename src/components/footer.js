import React from "react";
import logo from "./../assets/logo.png"

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <img src={logo} alt="Logo" className="mt-5 center-block img-responsive"/>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 borderTop">
                                <div className="menu">
                                    <a href="./politica.js" target="_blank">POLÍTICA DE PRIVACIDAD</a>
                                </div>
                                <div className="copyright">Copyright © 2021 GEMINI 2 Todos los derechos reservados</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;