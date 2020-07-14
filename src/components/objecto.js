import React, { Component } from 'react'




const Objecto = (props) => {
    
  

     return (
    
        <div className="container">
            <img src={props.image}/> 
            <p className="flow-text"> ID: {props.id}  </p>
            <p className="flow-text"> Name: {props.name}  </p>
            <p className="flow-text"> Description: {props.description}  </p>
            
        </div>
     )
 

}



export default Objecto;
