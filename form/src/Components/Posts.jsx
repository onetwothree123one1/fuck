import React from 'react'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from '../customize/Fetch';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Add from './Add'
import Blogs from './Blogs'
import DeleteModal from './DeleteModal';

const Posts = () => {



  //Modal
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  //EModal
  const [newData, setNewData] = useState([])





  const { data: dataPost, loading } = useFetch('http://localhost:3001/posts')


  useEffect(() => {
    if (dataPost) {
      let data = dataPost
      setNewData(data)
    }
  }, [dataPost]
  )
  // const handleAdd = (newPost) => {
  //   setShow(false)
  //   let data = newData;
  //   setNewData(data);

  // }
  const handleAdd = (newPost) => {
    setShow(false)
    setNewData(newData => [...newData, newPost]);

  }


  // const deleteP = (id) => {
  //   let data = newData;
  //   data = data.filter(item => item.id !== id)
  //   setNewData(data)
  // }
  const deleteP = async (id) => {


    await axios.delete('http://localhost:3001/posts' + `/${id}`);
    console.log(newData)
    const dataNew = newData.filter((item) => {
      return item.id !== id
    })

    setNewData(dataNew)



  };

  return (
    <>
      <hr></hr>
      <div className="container">
        <Modal show={show} onHide={handleClose}>

          <Modal.Body>
            <Add handleAdd={handleAdd} />
          </Modal.Body>
        </Modal>

        <Button variant="primary" type="button" className="btn btn-secondary" onClick={handleShow}>

          Add New Post
        </Button>
      </div>
      <hr></hr>
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

            {loading === false && newData.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <DeleteModal />
                  <td><button type="button" className="btn btn-outline-danger" onClick={() => deleteP(item.id)}>Delete</button></td>
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
    </>
  )
}

export default Posts

