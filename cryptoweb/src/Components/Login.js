import React, { useState } from "react";
import loginDataService from "../services/loginAuth.js";
import {Link, useNavigate } from "react-router-dom";
import "../index.css";
import {Button,Badge} from "@chakra-ui/react";
const Login = props => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate();
	async function loginUser(event) {
		event.preventDefault()
        console.log(email, password);
	    const login = loginDataService.login(
        email,
        password)
        .then(response => {
        
          navigate("/");
        }
      ).catch(e => {
        console.log(e);
      }
      );
      

      
	}



  return (
    <div className="submit-form card">
      <div>
        <div className="form-group login noselect">
         <label className="" htmlFor="email">Username :</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value.toLowerCase())}
            name="email"
          />
        </div>

        <div className="form-group login noselect">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
        </div>

        <Button  onClick={() => 
                        {loginUser();
                          
                        }} 
                        className="btn floatRight btn-success">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;