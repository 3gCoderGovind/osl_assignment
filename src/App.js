import { addData } from "./api/addData";
import { deleteData } from "./api/deleteData";
import { getData } from "./api/getData";
const db_reload_data=()=>{
 alert("loading...")
 return getData();
}

const db_delete_data=(email)=>{
  const data=deleteData({"email":email});
  data.then((res)=>{
    alert(res.data.message)
  })
}


export {db_reload_data,db_delete_data};