import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {Button} from "@chakra-ui/react";
import loginDataService from "../services/loginAuth.js";

const Register = props => {
   

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()
       const result = loginDataService.register(
            name,
            email, 
            password)
            .then(response => {
                console.log(response.data);
                props.history.push("/");
            }).catch(e => {
                console.log(e);
            }
            );
            console.log(result.json());
		
	}

    return (
        <div className="submit-form card">
            <div>
                <div className="form-group login">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                        name="email"
                    />
                </div>

                <div className="form-group login">
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                </div>

                <div className="form-group login">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                </div>

                <Button onClick={registerUser} className="btn btn-success">
                    Sign Up
                </Button>
            </div>
        </div>
    );
}
export default Register;