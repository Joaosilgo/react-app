import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});


const Objecto = (props) => {



    return (

        <div className="container ">



            <div className="section">
                <img className="responsive-img materialboxed " src={props.image} />
                <div className="divider "></div>
                <p className="flow-text">ID: {props.id}  </p>
                <p className="flow-text">Name: {props.name}  </p>
                <p className="flow-text">Description: {props.description}  </p>
                <div class="chip">{props.description}</div>
            </div>

            <div className="section">
                <Link to="/objectos" className="waves-effect waves-light btn-small"><i className="material-icons left">arrow_back</i>Back</Link>
            </div>
        </div>
    )


}



export default Objecto;
