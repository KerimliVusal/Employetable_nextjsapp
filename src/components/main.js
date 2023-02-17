"use client"
import { useEffect, useState } from 'react'
import BasicExample from './employe'
import Createform from './form'
import Load from './loader'
// import Load from './loader'

 function Main() {
  const [visible,setVisible]=useState(false)
  const[updt,setUpdt]=useState(true)
  const[loa,setLoa]=useState(true)
  const[Inputs,setInputs]=useState([])
useEffect(()=>{
  setTimeout(()=>{
    setLoa(false)
  },5000)
},[])
  return (
    <main >
{loa?
<Load/>
:<div>
<Createform updt={updt} setUpdt={setUpdt} visible={visible} setVisible={setVisible} setInputs={setInputs} Inputs={Inputs}/>
<BasicExample updt={updt} setUpdt={setUpdt} visible={visible} setVisible={setVisible}  Inputs={Inputs} />    
</div> } </main>
  )
}
export default Main