import './form.css'
import React from 'react';
import axios from 'axios';
import { addData } from './api/addData';




const Add_form=function ()
{ // document.getElementsByClassName('Form').style.display='block';
   const saveData=()=>
   {
    var body={};
    body.name= document.getElementById('name1').value;
    body.email=document.getElementById('email1').value;
    body.number=document.getElementById('number1').value;
    body.nic= document.getElementById('nic1').value;
    body.address= document.getElementById('address1').value;
    if(!body.name||!body.email||!body.number||!body.nic||!body.address) 
     { alert("all input required")
      return 0;
     } 
     var data=addData(body).then((res)=>{
         alert(res.data.message);
     })
    }

    return (
        <div className="Form" id="kpc">
            <h2>Add Employee</h2>
            <h4 className='headline'>name</h4>
            <input type="text" placeholder="name"id="name1"></input>
            <h4 className='headline'>Email</h4>
            <input type="email" placeholder="email" id="email1"required></input>
            <h4 className='headline'>Number</h4>
            <input type="number" placeholder="number"id="number1" required></input>
            <h4 className='headline'>nic No.</h4>
            <input type="number" placeholder='nic'id="nic1" required></input>
            <h4 className='headline'>Address</h4>
            <input type="text" placeholder='address'id="address1" required></input>
            <br></br> <br></br>
            <button onClick={
            ()=>{ saveData(); 
                  document.getElementById("kpc").style.display='none'; 
               }
            } className="submit_btn">submit</button>
              <button onClick={()=>{  document.getElementById("kpc").style.display='none';}} className="close_btn">close</button>
            <br></br><br></br>
        </div>
    )

}

export default Add_form;