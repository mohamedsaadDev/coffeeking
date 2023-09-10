import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./blog.css"
import Singleblog from './singleblog';
const Blog = () => {
    const [data,setdata] = useState([])
    const [opnesingleblog,setopnesingleblog]=useState(false)
    const [singleblog,setsingleblog]=useState(null)
    const [numberofitems,setnumberofitems]=useState(2)
    const selectError =useRef()
    const handle_btn_singleblog = (i)=>{
        setsingleblog(i)
        setopnesingleblog(true)
    }
    async function fetchblog (){
        try{
            const res = await fetch("http://localhost:5000/blog")
            const datas =await res.json()
            setdata(datas)
            selectError.current.style.display = "none"
        }catch{
                selectError.current.style.display = "block" 
        }
    }
    useEffect(()=>{
        fetchblog()
    },[])
    return (
        <>
        <div id='blog' className='wrraper-container-blog'>
            {data.slice(0,numberofitems).map((item)=>
                <div className='container-blog' key={item.id}>
                    <img className='img-blog' src={item.img} alt="" />
                    <div className='container-info'>
                        <h2>{item.title}</h2>
                        <p>{item.article.slice(0,100)}....</p>
                        <button onClick={()=>{handle_btn_singleblog(item)}}>READ MORE</button>
                    </div>
            </div>)}
            {data.length > 0 &&
                <div className='conainer-btn'>
                    {numberofitems > 2 ? <button onClick={()=>setnumberofitems(2)} className='btn-Show' >SEE LESS</button>:<button className='btn-Show'onClick={()=>(setnumberofitems(data.length))} >SEE MORE</button> }
                </div>}
            {opnesingleblog?<Singleblog singleblog={singleblog} setopnesingleblog={setopnesingleblog}/>:""}
            <div ref={selectError} className='container-Error-message'>
                <i className="fa-solid fa-triangle-exclamation"></i>
                <h3>Error</h3>
                <p>An error occurred while uploading articles</p>
            </div>
        </div>
        </>
    )
}
export default Blog