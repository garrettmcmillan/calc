import React, { Component } from 'react';

/* export default class Btn extends Component {
   render() {
      return (
         <div
            className={`button-wrapper ${
            isOperator(props.children) ? null : 'operator'}`} 
            style={btnStyle}
         >
         {props.children}
         </div>
      )
   }
}
 */

export default function Btn(props) { 
   return (
      <div 
         className={`button-wrapper ${
            isOperator(props.children) ? null : 'operator'}`} 
         style={btnStyle}
      >
         {props.children}
      </div> 
   )
}

const isOperator = val => {
   if (!isNaN(val)) { 
      className='operator'
   } else if (val === '.') {
      null
   } else if (val === '=') {
      null
   }
   return
}

const btnStyle = {
   height: '4em',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontWeight: 'lighter',
   fontSize: '1.4em',
   backgroundColor: '#e0e1e6',
   color: '#888',
   flex: '1',
   outline: '1px solid #888',
}

const operatorStyle = {
   backgroundColor: '#fe9241',
   color: 'white',
}

