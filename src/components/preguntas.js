import React from "react";

class Preguntas extends React.Component {
    render() {
        return (
            <div className="Preguntas container mb-5">
                <div className="row justify-content-around">
                    <div className="col-xs-12">
                        <h1 className="stoke secondStoke">PREGUNTAS FRECUENTES</h1>
                    </div>
                    <div className="col-lg-10">
                        <div className="Faq" id="accordion">
                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿QUÉ ES "GEMINI 2"?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>"GEMINI 2" es un programa de comercio, impulsado por un algoritmo de agrupación de metales y creado por los principales analistas y programadores, incluyendo Viktor Lavrenko. ¡Creado durante la crisis de divisas del año 2015, este programa no solo demostró su capacidad de obtener beneficios en cualquier ventana de salto de divisas, sino que también se convirtió en el primer sistema que abre solo operaciones rentables!</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Cuánto puedo ganar al día?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>En este momento los usuarios del programa "GEMINI 2" ganan desde $5000 hasta $25000 a la semana, es decir desde $1000 hasta $5000 al día.</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Cuánto ganaron los anteriores beta-testers?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>Cuando lanzamos nuestra primera prueba beta en 2015, nuestros probadores beta ganaban de 500 a 2000 dólares al día. Pero era la primera versión de "Nigma". Durante este tiempo, hemos mejorado el sistema.

Todos los beta-testers del grupo uno son millonarios hoy en día y ganan de $50.000 a $200.000 a la semana usando el sistema "GEMINI 2".</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Qué experiencia y formación se necesita para trabajar con "GEMINI 2"?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>Usted no necesita una experiencia, la educación especial. Trabajar con el programa no es más difícil que registrar un correo electrónico o iniciar sesión en la cuenta Vkontakte o Odnoklassniki.</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Qué porcentaje de transacciones exitosas abre el programa "GEMINI 2"?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>Desde 2015, desde su lanzamiento, el programa no ha abierto ninguna operación no rentable.</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Desde qué país puedo trabajar con este programa?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>¡Absolutamente desde cualquier país! Eso es lo bueno: puedes utilizar el sistema "GEMINI 2" desde cualquier rincón del mundo. Lo principal, es que necesitas tener Internet. Así, incluso cuando usted está viajando, el programa sigue ganando dinero.</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Cuánto tiempo se tarda en transferir el beneficio a mi cuenta?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>Como GEMINI 2 Ltd. opera con grandes cantidades de transferencias, tenemos un nivel corporativo de cooperación con la mayoría de los bancos. Esto significa que, en la mayoría de los casos, su dinero se recibirá en su cuenta en 10-15 minutos. En raros casos (incluyendo, si usted se encuentra en el extranjero), la transferencia puede ser recibida al día siguiente.</p>
                            </div>

                            <div className="question collapsed" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" href="#collapse1">
                                <span>¿Cómo empiezo a trabajar con el programa "GEMINI 2"?</span>
                            </div>
                            <div id="collapse1" className="collapse answer panel-collapse" aria-expanded="false">
                                <p>Para ello, debe registrarse y activar una copia gratuita del programa mediante el formulario que aparece en la parte superior de la página. A continuación, para iniciar el programa, sólo tendrá que hacer clic en el botón "Iniciar el comercio automático". Sin embargo, inmediatamente después del registro, recibirá instrucciones detalladas para que no tenga ningún problema o pregunta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preguntas;