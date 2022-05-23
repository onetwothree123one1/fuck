import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import Posts from './Posts'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNotification } from 'react-hook-notification';



const Add = (props) => {
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //EModal
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const notification = useNotification();


  const { register, handleSubmit, formState: { errors } } = useForm();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();



  //   let data = {
  //     userId: 1,
  //     title: title,
  //     body: content,

  //   }




  //   let res = await axios.post('http://localhost:3001/posts', data)
  //   if (res.data) {
  //     let newPost = res.data
  //     props.handleAdd(newPost)


  //   }



  // }

  // const onSubmit = async () => {
  //   let data = {
  //     userId: 1,
  //     title: title,
  //     body: content
  //   }

  //   let res = await axios.post('http://localhost:3001/posts', data)
  //   if (res.data) {
  //     let newPost = res.data
  //     props.handleAdd(newPost)
  //     console.log(newPost)
  //   }
  // }





  const onSubmit = async () => {
    const data = {
      userId: 1,
      title: title,
      body: content
    }
    let res = await axios.post('http://localhost:3001/posts', data)
    if (res.data) {
      let newPost = res.data
      props.handleAdd(newPost)
    }


  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" name="title" className="form-control" {...register("title", { required: true })} value={title} onChange={(e) => setTitle(e.target.value)} />
          {/* // */}
          {errors?.title?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
          <input type="text" name="content" className="form-control"  {...register("content", { required: true })} value={content} onChange={(e) => setContent(e.target.value)} />
          {/*  */}
          {errors?.content?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}
        </div>
        <button className="btn btn-primary" type="submit" onClick={() =>
          notification.success({
            text: 'Add Success',
          })
        }>Submit</button>
      </form>
    </div>
  );
}

export default Add