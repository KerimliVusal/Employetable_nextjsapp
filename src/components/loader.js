import Image from "next/image";

const Load=()=>{
    return(<div className='loa'>
            <h1 className="animate">
            <div><Image src={"/gif.gif"} width='600' height='300' alt="gif loadergi"/></div>
               <div>Employeers . . .</div></h1>
    </div>
    )
};export default Load