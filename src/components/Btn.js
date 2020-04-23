import React, { Component } from 'react';

import './Btn.css';

class Btn extends Component {
   isOperator = val => {
      return !isNaN(val) || val === '.' || val === '=';
   };

   render() {
      return (
         <div className={`btnStyle ${this.isOperator(this.props.children) ? null : 'operator'}`}>
            {this.props.children}
         </div>
      );
   }
}

export default Btn;