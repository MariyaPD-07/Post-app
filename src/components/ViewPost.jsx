import React, { useEffect, useState } from 'react'
import PostNavbar from './PostNavbar'
import axios from 'axios'

const ViewPost = () => {
    const[PostData,changePostData]=useState(
        []
  
    )
    const fetchdata=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
          changePostData(response.data)
        }
      ).catch()
    }
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <PostNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
<div className="row g-3">
 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <table class="table">
  <thead>
    <tr>
      <th scope="col">User Id</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
   {PostData.map(
    (value,index)=>{
      return(
     
    <tr>
      <th scope="row">1</th>
      <td>{value.userId}</td>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
    
         
      )
    }
   )}

    
  </tbody>
</table>
        </div>


   
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewPost