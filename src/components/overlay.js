import React from "react";
import { FaChevronDown } from 'react-icons/fa';

class Overlay extends React.Component {
    render(){
        return (
            <div className="wrapper overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="round-dot bounce">
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Overlay;