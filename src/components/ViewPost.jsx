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
{PostData.map(
    (value,index)=>{
        return( <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  
  <tbody>
    <tr>
      <th scope="row">User ID</th>
      <td>{value.userId}</td>
      
    </tr>
    <tr>
      <th scope="row">ID</th>
      <td>{value.id}</td>
      
    </tr>
    <tr>
      <th scope="row">Title</th>
      <td>{value.title}</td>
      
    </tr>

 <tr>
      <th scope="row">Body</th>
      <td>{value.body}</td>
      
    </tr>

  </tbody>
</table>
        </div>

        )
    }
)}

   
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default ViewPost