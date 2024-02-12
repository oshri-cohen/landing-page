// eslint-disable-next-line no-unused-vars
import React from 'react'

const Cover = ({coverImg, title}) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
  backgroundRepeat :"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  width:"100%",
 
  }
  
  return (
   <div className="h-full" style={coverImgStyle}>
    <div className="h-full flex justify-center items-center page-shadow">
      <h1 className="text-5xl font-bold font-outline-2">{title}</h1>
    </div>
   </div>
  )
}

export default Cover