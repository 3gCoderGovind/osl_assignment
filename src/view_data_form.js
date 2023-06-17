import './form.css'
const view_data=(name,email,number,nic,address)=>
   {
     document.getElementById("view_name").innerHTML=name;
     document.getElementById("view_email").innerHTML=email;
     document.getElementById("view_number").innerHTML=number;
     document.getElementById("view_nic").innerHTML=nic;
     document.getElementById("view_address").innerHTML=address;
    }
const View_data_form=function ()
{  
    return (
        <div className="view_data_form_class" id="view_data_form">
           
           <h2>Employee Data</h2>  
          <div className='view_emp_data'> 
             <table>
                <td className='view_emp_data1'>  <h3>Name</h3>
                </td>
                <td className='view_emp_data2'>   <h4 id="view_name"></h4></td>
             </table>
          </div> 
          <div className='view_emp_data'> 
             <table>
                <td className='view_emp_data1'>  <h3>Email</h3>
                </td>
                <td className='view_emp_data2'>   <h4 id="view_email"></h4></td>
             </table>
          </div> 
          <div className='view_emp_data'> 
             <table>
                <td className='view_emp_data1'>  <h3>Number</h3>
                </td>
                <td className='view_emp_data2'>   <h4 id="view_number"></h4></td>
             </table>
          </div> 
       
          <div className='view_emp_data'> 
             <table>
                <td className='view_emp_data1'>  <h3>NIC No.</h3>
                </td>
                <td className='view_emp_data2'>   <h4 id="view_nic"></h4></td>
             </table>
          </div> 
         <div className='view_emp_data'> 
             <table>
                <td className='view_emp_data1'>  <h3>Address</h3>
                </td>
                <td className='view_emp_data2'>   <h4 id="view_address"></h4></td>
             </table>
          </div> 
              <button onClick={()=>{  document.getElementById("view_data_form").style.display='none';}} className="close_btn1">Close</button>
            <br></br><br></br>
        </div>
    )

}
export default View_data_form;
export {view_data};