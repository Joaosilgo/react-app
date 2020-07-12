import React, { Component } from 'react';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import  {ObjectosList}  from './data/objectos_lista';

const Objetos = (props) => {

    let objectos = ObjectosList.map((item) => {
        return (
           
           
      //  <h1>{item.img_src}</h1>
      
      <div className="col s12 m4">
      <div className="card Medium">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={item.img_src}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{item.name}<i className="material-icons right">more_vert</i></span>
      <p><a href={item.url}>Go to Object</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{item.name}<i className="material-icons right">close</i></span>
      <p>{item.description}</p>
    </div>
  </div>
  </div>
         
              
        );
    });

    return(
<div className="main-content">
    <div className="container center">
    <div className="row">
       {objectos}
       </div>
    </div>
</div>
);

};

export default Objetos;