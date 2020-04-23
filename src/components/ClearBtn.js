import React, { Component } from 'react';

import './ClearBtn.css';

class ClearBtn extends Component {
   isOperator = val => {
      return !isNaN(val) || val === '.' || val === '=';
   };

   render() {
      return (
         <div className='clear-btn'>
            {this.props.children}
         </div>
         
      );
   }
}

export default ClearBtn;