import axios from 'axios';

const getData=async (body)=>
    {     const abc=await axios.get('http://localhost:3001/user/view');
          return abc;
    }   

  export {getData};  