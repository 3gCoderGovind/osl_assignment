import axios from 'axios';

const deleteData=async (email)=>
      {    
         const data=await axios.delete(`http://localhost:3001/user/${email.email}/delete`);
          return data;
}
  export {deleteData}; 