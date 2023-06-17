import axios from 'axios';

const editData=async (body)=>
      {     
         const data=await axios.patch('http://localhost:3001/user/edit',body);
          return data;
}
  export {editData}; 