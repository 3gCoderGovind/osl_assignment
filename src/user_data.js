import './Comp1.css'
import './Comp.css'
import './buttons.css'
import { useState } from 'react'
import { db_delete_data,db_reload_data } from './App'
import { view_data } from './view_data_form'
const TempElement=function ()
{   const [user_data,set_user_data]=useState([]);
    return (
        <div>
         <div id='main_body'className='heading1'>
            <div>
                <button onClick={()=>{
                    db_reload_data().then((res)=>{
                       set_user_data([...res.data.data])
                    });
                document.getElementById("kpc").style.display='block'; 
                }} className="add_new_employee">
                    Add New Employee
                </button>
                <button onClick={()=>{ db_reload_data()
                .then((res)=>{
                   set_user_data([...res.data.data])
               })}} className="view_all_employee">View All Employee</button>
               <button onClick={()=>{
                   set_user_data([])
               }} className="hide_all_employee">Hide All Employee </button>
            </div>
            <div>
                <table className='header'>
                    <td>name</td>
                    <td>email</td>
                    <td>Number</td>
                    <td>nic</td>
                    <td>address</td>
                    <td>Action</td>
                </table>
            </div> 
         </div>
     
          
        { user_data.map((element)=>{
            return(
                <div>
                 <table className='newComp'>
                    <td className='newComp1'id='name'>{element.name}</td>
                    <td className='newComp1'id="email">{element.email}</td>
                    <td className='newComp1'id="number">{element.number}</td>
                    <td className='newComp1'id='nic'>{element.nic}</td>
                    <td className='newComp1'id='address'>{element.address}</td>
                    <td className='newComp1'>
                        <button onClick={()=>{
                            view_data(element.name,element.email,element.number,element.nic,element.address)
                            document.getElementById("view_data_form").style.display="block";  
                        }} className="view_btn">View</button>
                        <button onClick={()=>{
                            document.getElementById("edit_data_form").style.display="block";
                        }} className="edit_btn">Edit</button>
                        <button onClick={()=>{
                              db_delete_data(element.email);
                              db_reload_data().then((res)=>{
                                              set_user_data([...res.data.data])
                                                          })         
                            }} className="delete_btn">Delete</button>
                    </td>
                 </table>
                </div>
                )
         })   
     
        }
        </div>
    )
}

export default TempElement

