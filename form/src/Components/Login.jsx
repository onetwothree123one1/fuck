import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

const Login = () => {

  const { register, handleSubmit, formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);

  return (


    <div className="container">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating mb-3">
                <input type="text"
                  name="firstName"
                  className="form-control"
                  id="floatingInput"
                  placeholder="username"                 
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                  })} />
                {errors?.firstName?.type === "required" && <p style={{ color: "red" }}>This field is required</p>}
                {errors?.firstName?.type === "maxLength" && (
                  <p style={{ color: "red" }}>First name cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === "pattern" && (
                  <p style={{ color: "red" }}>Alphabetical characters only</p>
                )}
                <label htmlFor="floatingInput">UserName</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password"
                  name="passWord"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  {...register("passWord", {
                    required: true,
                    minLength: 6
                  })} />
                {errors?.passWord?.type === "required" && (<p style={{ color: "red" }}>This field is required</p>)}
                {errors?.passWord?.type === "minLength" && (<p style={{ color: "red" }}>Password no more than 6 chars</p>)}

                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" >Sign
                  in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
