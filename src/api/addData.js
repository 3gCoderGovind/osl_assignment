import axios from 'axios';

const addData=async (body)=>
    {   console.log(body) 
         const abc=await axios.post('http://localhost:3001/user/add',body);
          return abc;
    }   

  export {addData};  