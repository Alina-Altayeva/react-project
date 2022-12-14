import React from "react";
import depo from "./../assets/depo.png"
import uptime from "./../assets/uptime.png"
import profit from "./../assets/profit.png"
import success from "./../assets/success.png"
// import {useState, useEffect, useRef} from "react"

class Center extends React.Component {
    render(){
        let cards = [
            {
                id: 0,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 1,
                player: "#3276",
                spanP:" $3782"
            },
            {
                id: 2,
                player: "#3290",
                spanP:" $3782"
            },
            {
                id: 3,
                player: "#3444",
                spanP:" $3782"
            },
            {
                id: 4,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 5,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 6,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 7,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 8,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 9,
                player: "#3590",
                spanP:" $3782"
            },
            {
                id: 10,
                player: "#3590",
                spanP:" $3782"
            },
        ]
        let GCards = [
            {
                id: 0,
                player: "#3213",
                spanS: "$18423"
            },
            {
                id: 1,
                player: "#3246",
                spanS: "$18358"
            },
            {
                id: 2,
                player: "#3828",
                spanS: "$21377"
            },
            {
                id: 3,
                player: "#4000",
                spanS: "$20530"
            },
            {
                id: 4,
                player: "#3877",
                spanS: "$18674"
            },
            {
                id: 5,
                player: "#3870",
                spanS: "$19674"
            },
            {
                id: 6,
                player: "#3590",
                spanS:" $3782"
            },
            {
                id: 7,
                player: "#3590",
                spanS:" $3782"
            },
            {
                id: 8,
                player: "#3590",
                spanS:" $3782"
            },
            {
                id: 9,
                player: "#3590",
                spanS:" $3782"
            },
            {
                id: 10,
                player: "#3590",
                spanS:" $3782"
            }
        ]
        return (
        <div className="Center wrapper white">
            <div className="container">
                <div className="row">
                    <h1 className="stoke">RESULTADOS EN DIRECTO</h1>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-12 col-sm-6">
                        <div className="result">
                            <img src={depo} alt=""/>
                            <span>250.00</span>
                            d??lares de dep??sito inicial
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6">
                        <div className="result">
                            <img src={profit} alt=""/>
                            <span>900425.20</span>
                            d??lares de beneficio
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6">
                        <div className="result">
                            <img src={uptime} alt=""/>
                            <span>228 horas</span>
                            Periodo de trabajo
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-6">
                        <div className="result">
                            <img src={success} alt=""/>
                            <span>100%</span>
                            Percent of profitable deals
                        </div>
                    </div>
                </div>
                <div className="stats-wrapper">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="title">SOLICITUDES DE RETIRADA DE FONDOS COMPLETADAS RECIENTEMENTE</h1>
                            <div className="scrollBar">
                                <div className="scrollable">
                                    {cards.map((v, i) => {
                                        return(
                                            <div className="item" key={i}>
                                                <div className="heading">
                                                    <div className="player">USUARIO {v.player}</div>
                                                </div>
                                                <div className="body">
                                                    <div className="profit">
                                                        RETIRAR
                                                        <span>{v.spanP}</span>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <div className="timer">Justo Ahora</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>EL MAYOR N??MERO DE SOLICITUDES DE RETIRADA COMPLETADAS EN <span>24 HORAS</span></h1>
                        <div className="scrollBar">
                            <div className="scrollable">
                                {GCards.map((v, i) => {
                                    return(
                                        <div className="item second-item" key={i}>
                                            <div className="heading">
                                                <div className="player">USUARIO {v.player}</div>
                                            </div>
                                            <div className="body">
                                                <div className="profit two">
                                                    RETIRAR
                                                    <span className="card-body">{v.spanS}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}   
                            </div>                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Center;