import React from 'react'
import useFetch from '../customize/Fetch';


const Detail = () => {
    let {id} = URLSearchParams();
    const {data: dataBlog, loading} = useFetch('http://localhost:3001/posts')
 
 
    let newData = [];
    if(dataBlog && dataBlog.length >0)
    {
      newData = dataBlog.slice(0,2)
    }

  return (
    <div>
    {loading === false && newData.map(item =>{
      return(
        
        
        <div className="card" >
      <div className="card-body" >
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{item.body}</p>
        
       
      </div>
    </div>
        
        );
      })};
      
      
      </div>
  )
}

export default Detail