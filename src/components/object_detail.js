import React, { Component } from 'react'
import  {ObjectosList}  from './data/objectos_lista';
import { Route } from 'react-router-dom';
import Objecto from './objecto';
import Objectos from './objectos';


const Object_detail = (props) => {
    
  
        let objectURL=ObjectosList.map((item) => {
        return (
          <Route path={`/objectos/${item.id}`} render={()=> <Objecto image={item.img_src} id={item.id} name={item.name} description={item.description}/>}/>
         
        )
 })
  
 return (

    <React.Fragment>

 <Route exact path="/objectos" render={()=> <Objectos   />}/>

{objectURL}
    </React.Fragment>
  )
   
};



export default Object_detail;

