import './form.css'
import React from 'react';
import { editData } from './api/editData';

const Edit_form=function ()
{ 
   const saveData=()=>
   {
    var body={};
    body.name= document.getElementById('name2').value;
    body.email=document.getElementById('email2').value;
    body.number=document.getElementById('number2').value;
    body.nic= document.getElementById('nic2').value;
    body.address= document.getElementById('address2').value;
    if(!body.name||!body.email||!body.number||!body.nic||!body.address) 
     { alert("all input required")
      return 0;
     } 
     var data=editData(body).then((res)=>{
         alert(res.data.message);
     })
    }

    return (
        <div className="edit_data_form_class" id="edit_data_form">
            <h2>Edit Employee</h2>
            <h4 className='headline'>name</h4>
            <input type="text" placeholder="name"id="name2"></input>
            <h4 className='headline'>Email</h4>
            <input type="email" placeholder="email" id="email2"required></input>
            <h4 className='headline'>Number</h4>
            <input type="number" placeholder="number"id="number2" required></input>
            <h4 className='headline'>nic No.</h4>
            <input type="number" placeholder='nic'id="nic2" required></input>
            <h4 className='headline'>Address</h4>
            <input type="text" placeholder='address'id="address2" required></input>
            <br></br> <br></br>
            <button onClick={
            ()=>{ saveData(); 
                  document.getElementById("edit_data_form").style.display='none'; 
               }
            } className="submit_btn1">Edit Employee</button>
              <button onClick={()=>{  document.getElementById("edit_data_form").style.display='none';}} className="close_btn1">Cancel</button>
            <br></br><br></br>
        </div>
    )

}

export default Edit_form;