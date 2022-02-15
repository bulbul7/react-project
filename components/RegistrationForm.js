import React from "react";
import {useForm} from "react-hook-form";

const RegistrationForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
  return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputFirstName" {...register("FirstName", { required: true, maxLength: 20 })} placeholder="First Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputLastName" {...register("LastName", { required: true, maxLength: 20 })} placeholder="Last Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
                type="email"
                className="form-control"
                id="inputEmail3"
                {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
            })}
                placeholder="Email"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" {...register("Password")} placeholder="Password"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputgender" className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
              <select className="form-select form-select-sm" {...register("Gender")} aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
  )
}
export default RegistrationForm;