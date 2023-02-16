"use client"
import BasicExample from '@/components/employe'
import Createform from '@/components/form'
import Load from '@/components/loader'
import Navbar from '@/components/navbar'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
  <Navbar loa={loa}/>
<Createform updt={updt} setUpdt={setUpdt} visible={visible} setVisible={setVisible} setInputs={setInputs} Inputs={Inputs}/>
<BasicExample updt={updt} setUpdt={setUpdt} visible={visible} setVisible={setVisible}  Inputs={Inputs} />    
</div> } </main>
  )
}
