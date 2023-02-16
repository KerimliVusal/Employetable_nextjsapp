import Link from "next/link"

const Blog=()=>{
    console.log('blog')
return(<h1>
    Blog
<button><Link href='/'>Home</Link></button>
<button><Link href='/blog3'>Blog3</Link></button>

</h1>)
}
export default Blog