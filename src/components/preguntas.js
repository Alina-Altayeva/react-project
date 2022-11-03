/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import $ from "jquery";

class Preguntas extends React.Component {
    render() { 
        $(document).ready(function(){
            $('.question').click(function() {
                if($(this).attr('id')=='question1'){
                    $('#collapse1').toggleClass('showP')
                }
                if($(this).attr('id')=='question2'){
                    $('#collapse2').toggleClass('showP')
                }
                if($(this).attr('id')=='question3'){
                    $('#collapse3').toggleClass('showP')
                }
                if($(this).attr('id')=='question4'){
                    $('#collapse4').toggleClass('showP')
                }
                if($(this).attr('id')=='question5'){
                    $('#collapse5').toggleClass('showP')
                }
                if($(this).attr('id')=='question6'){
                    $('#collapse6').toggleClass('showP')
                }
                if($(this).attr('id')=='question7'){
                    $('#collapse7').toggleClass('showP')
                }
                if($(this).attr('id')=='question8'){
                    $('#collapse8').toggleClass('showP')
                }      
            });
        })    
        let list = [
            {
                question: "¿QUÉ ES 'GEMINI 2'?",
                collapse: "'GEMINI 2' es un programa de comercio, impulsado por un algoritmo de agrupación de metales y creado por los principales analistas y programadores, incluyendo Viktor Lavrenko. ¡Creado durante la crisis de divisas del año 2015, este programa no solo demostró su capacidad de obtener beneficios en cualquier ventana de salto de divisas, sino que también se convirtió en el primer sistema que abre solo operaciones rentables!",
                idDiv: "collapse1",
                idQues: "question1"
            },
            {
                question: "¿Cuánto puedo ganar al día?",
                collapse: "En este momento los usuarios del programa 'GEMINI 2' ganan desde $5000 hasta $25000 a la semana, es decir desde $1000 hasta $5000 al día.",
                idDiv: "collapse2",
                idQues: "question2"
            },
            {
                question: "¿Cuánto ganaron los anteriores beta-testers?",
                collapse: "Cuando lanzamos nuestra primera prueba beta en 2015, nuestros probadores beta ganaban de 500 a 2000 dólares al día. Pero era la primera versión de 'Nigma'. Durante este tiempo, hemos mejorado el sistema. Todos los beta-testers del grupo uno son millonarios hoy en día y ganan de $50.000 a $200.000 a la semana usando el sistema 'GEMINI 2'.",
                idDiv: "collapse3",
                idQues: "question3"
            },
            {
                question: "¿Qué experiencia y formación se necesita para trabajar con 'GEMINI 2'?",
                collapse: "Usted no necesita una experiencia, la educación especial. Trabajar con el programa no es más difícil que registrar un correo electrónico o iniciar sesión en la cuenta Vkontakte o Odnoklassniki.",
                idDiv: "collapse4",
                idQues: "question4"
            },
            {
                question: "¿Qué porcentaje de transacciones exitosas abre el programa 'GEMINI 2'?",
                collapse: "Desde 2015, desde su lanzamiento, el programa no ha abierto ninguna operación no rentable.",
                idDiv: "collapse5",
                idQues: "question5"
            },
            {
                question: "¿Desde qué país puedo trabajar con este programa?",
                collapse: "¡Absolutamente desde cualquier país! Eso es lo bueno: puedes utilizar el sistema 'GEMINI 2' desde cualquier rincón del mundo. Lo principal, es que necesitas tener Internet. Así, incluso cuando usted está viajando, el programa sigue ganando dinero.",
                idDiv: "collapse6",
                idQues: "question6"
            },
            {
                question: "¿Cuánto tiempo se tarda en transferir el beneficio a mi cuenta?",
                collapse: "Como GEMINI 2 Ltd. opera con grandes cantidades de transferencias, tenemos un nivel corporativo de cooperación con la mayoría de los bancos. Esto significa que, en la mayoría de los casos, su dinero se recibirá en su cuenta en 10-15 minutos. En raros casos (incluyendo, si usted se encuentra en el extranjero), la transferencia puede ser recibida al día siguiente.",
                idDiv: "collapse7",
                idQues: "question7"
            },
            {
                question: "¿Cómo empiezo a trabajar con el programa 'GEMINI 2'?",
                collapse: "Para ello, debe registrarse y activar una copia gratuita del programa mediante el formulario que aparece en la parte superior de la página. A continuación, para iniciar el programa, sólo tendrá que hacer clic en el botón 'Iniciar el comercio automático'. Sin embargo, inmediatamente después del registro, recibirá instrucciones detalladas para que no tenga ningún problema o pregunta.",
                idDiv: "collapse8",
                idQues: "question8"
            }
        ]
        
        return (
            <div className="Preguntas container mb-5">
                <div className="row justify-content-around">
                    <div className="col-xs-12">
                        <h1 className="stoke secondStoke">PREGUNTAS FRECUENTES</h1>
                    </div>
                    <ul className="col-lg-10">
                        {list.map((v, i) => {
                            return(
                                <li className="Faq" id="accordion" key={i}>
                                    <div id={v.idQues} className="question collapsed">
                                        <div className="arrow"></div>
                                        <span>{v.question}</span>
                                    </div>
                                    <div id={v.idDiv} className="collapse answer panel-collapse">
                                        <p>{v.collapse}</p>
                                    </div>
                                </li>
                            )
                        })}                     
                    </ul>
                </div>
            </div>
        )
    }
}

export default Preguntas;