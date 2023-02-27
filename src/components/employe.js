"use client"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import {BsBrush, BsTrash} from 'react-icons/bs'
import { useEffect ,useState} from 'react';
import { deleteUser, getUsers, updateUser } from 'adress';
import Swal from 'sweetalert2'


function BasicExample({updt,setUpdt,visible,setVisible,Inputs,setInputs}) {
    // const[Input,setInput]=useState([])
    
    const data=async()=>{
       const dat=await getUsers()
      return setInputs(dat)
      
    }
   
    useEffect(()=>{
    data()
      
    },[])
    const remove=(employ)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setInputs(()=>Inputs.filter((ipt,id)=>ipt._id!==employ._id))
                deleteUser(employ.name)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    
    }
   
   
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>FullName</th>
          <th>Email</th>
          <th>Salary</th>
          <th>BirthDate</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Inputs?.map((employ,index)=>(
        <tr key={index}>
          <td><span className='imagespan'><Image src={`/images/image${index}.jpg`}  width="30" height='30'  alt="logo" className='img'/></span>{employ.name} {employ.lastname}</td>
          <td>{employ.email}</td>
          <td>{employ.salary}$</td>
          <td>{employ.date}</td>
          <td>{employ.status}</td>
          <td className='brush1'><span className='brush'><BsBrush size={25} onClick={()=>{setUpdt(()=>!updt);setVisible(()=>!visible)}} /></span> <span><BsTrash size={25} onClick={()=>remove(employ)}/></span></td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;