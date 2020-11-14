import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/user'
import { Redirect } from 'react-router-dom'
import { loadScripts } from '../../utils'
const AuthPage = () => {
    let user = useSelector(state => {return state.user})
    const [usn,SetUSN] = useState('')
    const [pwd,SetPWD] = useState('')
    const dispatch = useDispatch()
    // useEffect(() => {
    //     document.onload=loadScripts()
    // },[])
    if(user) {
        console.log('hi ', user)
        return (
            <Redirect to="/Home"/>
        )
    }
    return (
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form className="user">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" 
                                        id="exampleInputEmail" aria-describedby="emailHelp" 
                                        placeholder="Enter Email Address..." 
                                        onChange={(e) => SetUSN(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user" 
                                        id="exampleInputPassword" placeholder="Password"
                                        onChange={(e) => SetPWD(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary btn-user btn-block" onClick={() => dispatch(login(usn,pwd))}>
                                        Login
                                    </a>
                                    <hr />
                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw" /> Login with Google
                                    </a>
                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                    </a>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="register.html">Create an Account!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
}
export default AuthPage