"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {BsPersonPlus} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { addUser, updateUser } from "adress";
import Swal from 'sweetalert2'
function Createform({updt,setUpdt,visible,setVisible,setInputs,Inputs}){
    const[status,setStatus]=useState("active")
    

const { register,handleSubmit,reset} = useForm();
const onSubmit=(data)=>{
    setInputs([...Inputs,data]);
    if(updt){
      updateUser(data.name,data)
    }
   addUser(data)
    reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
}


return(
   <Container fluid className="form">
    <Row lg={1} className="form1 mb-3">
      
       {updt? <Col  className="addemployee mb-5"><button onClick={()=>setVisible(()=>!visible)}>Add Employee <BsPersonPlus size={20}/></button></Col>:""}
        {visible?
     <form   onSubmit={handleSubmit(onSubmit)} >
      
 <Col >
    <Row lg={1} >
        <Col className="input1">
      <input {...register("name",{required:true})} placeholder="name"/>
      <input {...register("lastname",{required:true})}  placeholder="lastname" />
      </Col>
      <Col className="input1">
      <input type="email" {...register("email",{required:true})}  placeholder="email"/>
      <input type="number" {...register("salary", {required:true})} min="0"  placeholder="salary"/>
      </Col>
      </Row>
      </Col>
      <Col className="input2 m-3">
        <label>Birthday
      <input type="date" {...register("date",{required:true})} />
      </label>
      <label>Active
      <input type="radio" value="active" {...register("status",{required:true})} />
      </label>  <label>Inactive
      <input type="radio" value="inactive" {...register("status",{required:true})} />
      </label>
      </Col>
     {updt? <Col><input className="sub" type="submit" value="Submit"  /> </Col>
      :<Col><input className="sub2" type="submit" value="Update"  /> </Col>}
    </form>
    :''}
    </Row>
    </Container>
)
}
export default Createform