import { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from 'yup'
import styled from "styled-components"
import {  useNavigate } from "react-router-dom"

const divForm = styled.div`
    display: flex;
    // justify-content : center;
`

const Login = () =>{
    const {isLogged , setIsLogged} = useState(false)
    
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        onSubmit: values => {
          console.log(values)
          handleButtonClick()
        },
        validationSchema: Yup.object().shape({
                email: Yup.string()
            .min(5, "Email trop court")
                    .email("Email invalid")
            .required("Email est requis"),
          password: Yup.string()
            .min(5, "Password trop court")
            .required("Password est requis")
        }),
            validateOnChange: false
    })

    const handleButtonClick = (event) => {
        if (isLogged === false) {
          setIsLogged(true)
          navigate("/")
        } else {
          setIsLogged(false)
        }
      }


    return (
        <divForm>
         
                <form onSubmit={formik.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            
        </divForm>
    )
}
export default Login