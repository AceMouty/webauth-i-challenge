import React from 'react'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'

function loginForm(props){
  return (
    <div className="form-container">
      <h1>Register New User</h1>
      <Form>
        <Field type="text" name="username" placeholder="User Name"/>
        <Field type="password" name="password" placeholder="Password"/>
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues({ username, password }) {
    return(
      {
        username: username || "",
        password: password || ""
      }
    )
  },

  handleSubmit(values,{props}){
    axios
      .post('http://localhost:5000/api/register', values)
      .then(res => props.history.push('/users'))
  }
})(loginForm)