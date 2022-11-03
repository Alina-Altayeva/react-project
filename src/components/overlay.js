import React from "react";
import { FaChevronDown } from 'react-icons/fa';

class Overlay extends React.Component {
    scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    render(){
        return (
            <div className="wrapper overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="round-dot bounce js-btn" onClick={this.scrollToBottom}>
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