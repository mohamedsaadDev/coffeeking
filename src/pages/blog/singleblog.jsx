import React from 'react'

const Singleblog = ({setopnesingleblog,singleblog}) => {
    return (
        <div onClick={()=>setopnesingleblog(false)} className='wrapper-singleblog'>
            <div onClick={(e)=>e.stopPropagation()} className='container-singleblog'>
                <img src={singleblog.img} alt="" />
                <h3>{singleblog.title}</h3>
                <p>{singleblog.article}</p>
                <i onClick={()=>setopnesingleblog(false)} className="fa-solid fa-x "></i>
            </div>
        </div>
    )
}
export default Singleblog