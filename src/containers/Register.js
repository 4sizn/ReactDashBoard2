import React, { Component } from 'react';
import {Authentication} from '../components';

class Register extends Component {
    render() {
        return (
            <div>
              Register 
              <Authentication mode = {false}></Authentication> 
            </div>
        );
    }
}

export default Register;