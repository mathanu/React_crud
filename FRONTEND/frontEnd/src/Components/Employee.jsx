
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


function Employee() {


  // step7
  const [data,setData]=useState([]);

  // step 6: Fetch data from and update state
  useEffect(()=>{
    axios.get('https://syswaycrudbackend.onrender.com/staf')
     .then(res =>setData(res.data))     
     .catch(err=>console.log(err))
  },[])

// // delete qry
  const handleDelete = async (id) => {
  
    try{
      await axios.delete('https://syswaycrudbackend.onrender.com/staf/'+id)
      alert("Are you sure you want to delete this?")
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }
 
console.log(data,"Rendering")

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">

   <div className='Employee'>
   
    <div className="container my-5 ">
   <Link to ="/create" className='btn btn-success'>ADD</Link>
    <table className='table table-striped table-hover my-4' >
      <thead className='table-dark'>
      <tr className=''>
    
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>ADDRESS</th>
        <th>SALARY</th>
        <th>ACTION</th>
      
      </tr>
      </thead>
      <tbody>
          
        {data.map((d,i)=>(
          <tr key={d.id}>
            {/* <td>{d.id}</td> */}
            <td>{i+1}</td>
            <td>{d.name}</td>
            <td>{d.age}</td>
            <td>{d.address}</td>
            <td>{d.salary}</td>
            <td>
            <Link to={`update/${d.id}`}  className='btn btn-primary '>Update</Link >
            <button className='btn btn-danger ms-2' onClick={e=>handleDelete(d.id)}>Delete</button>

            </td>

          </tr>
        ))}
      
      </tbody>
    </table>
    
</div>
   </div>
   </div>
   <div className="col-sm-1"></div>
   </div>
   </div>
  )
}

export default Employee;
