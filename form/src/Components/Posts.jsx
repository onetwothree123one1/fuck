import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from '../customize/Fetch';


const Posts = () => {
  


const {data: dataPost, loading} = useFetch('http://localhost:3001/posts')
  




  return (
      <div className="container">
    <table className="table table-bordered">
    <thead>
      <tr>
      
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
      </tr>
    </thead>
    <tbody>
      
        {loading === false && dataPost.map(item => {
            return(
                <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.title}</td>
                 <td>{item.body}</td>
                 </tr>
            )
        })}
        
        </tbody>
        <tfoot>
        <tr>
        {loading === true && <td > Loading...</td>}
        </tr>
        </tfoot>
       
  </table>
  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
  </div>
  )
}

export default Posts

