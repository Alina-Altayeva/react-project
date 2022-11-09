import React from "react";
import IntlTelInput from "react-intl-tel-input";
import 'react-intl-tel-input/dist/main.css';

class Telephone extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isValid: false,
          rawValue: null,
          countryData: null,
          formattedValue: '',
          extension: null
        };
      }
    
      handlePhoneNumberChange = (
        isValid,
        rawValue,
        countryData,
        formattedValue,
        extension
      ) => {
        this.setState({
          isValid,
          rawValue,
          countryData,
          formattedValue,
          extension
        });
        console.log(this.state.rawValue);
      };
    
    render(){
        return (
            <div className="col-sm-12 col-xs-12 form-group wrap_phone_number">                                           
                <IntlTelInput
                    containerClassName="intl-tel-input form-control"
                    inputClassName="form-control"
                    onPhoneNumberChange={this.handlePhoneNumberChange}
                    onPhoneNumberBlur={this.handlePhoneNumberChange}
                    format
                /> 
            </div>
        )
    }
}
    
export default Telephone;