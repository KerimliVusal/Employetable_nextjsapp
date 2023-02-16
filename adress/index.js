const BASE_URL="http://localhost:3000"
export const getUsers=async()=>{
    try{
    const fetchdata1= await fetch(`${BASE_URL}/api/users/user`)
    const jsondata=await fetchdata1.json()
    return jsondata
    }
    catch(err){
        return console.log(err)
    }
}

export const addUser=async(formdata)=>{
    try{ 
        const Options={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }
    const fetchdata= await fetch(`${BASE_URL}/api/users/user`,Options)
    const jsondata=await fetchdata.json()
    return jsondata
    }
    catch(err){
        return console.log(err)
    }
}

export const updateUser=async(userId,formdata)=>{
    try{ 
        const Options={
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }
    const fetchdata= await fetch(`${BASE_URL}/api/users/user`,Options)
    const jsondata=await fetchdata.json()
    return jsondata
    }
    catch(err){
        return console.log(err)
    }
}
export const deleteUser=async(userId)=>{
    try{ 
        const Options={
            method:"DELETE",
          
            
        }
    const fetchdata= await fetch(`${BASE_URL}/api/users/user`,Options)
    const jsondata=await fetchdata.json()
    return jsondata
    }
    catch(err){
        return console.log("what the hell")
    }
}