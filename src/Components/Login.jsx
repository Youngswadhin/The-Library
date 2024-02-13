import React, { useState } from 'react'

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import GoogleIcon from '@mui/icons-material/Google';

import Nav from "./Nav"

import "./Css/Login.scss"

const Login = () => {
    const [switchTab, setSwitchTab] = useState(false)
    const [showPassword, setShowPassword] = React.useState(true);
    const [progress, setProgress] = React.useState(0);

    return (
        <>
            <Nav />
            <div className="Login">
                {/* <div className="Desktop">
                    <div className="heading">The App For Getting All Typr Of BOok</div>
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="" />
                </div> */}
                <div className="loginContainer">
                    <div className="ToogleSwitch" onClick={() => { setSwitchTab(!switchTab) }}>
                        <div className={switchTab ? "activepannel pannelright" : "activepannel"}></div>

                        <div className={!switchTab ? "SwitchBox whitetext" : "SwitchBox"} >Login</div>
                        <div className={switchTab ? "SwitchBox whitetext" : "SwitchBox"} >SignUp</div>
                    </div>
                    <br />
                    <div className="InputsContainer">
                        <FormControl className="Input" variant="standard">
                            <InputLabel htmlFor="name-input">Name</InputLabel>
                            <Input
                                disabled={!switchTab}
                                id="name-input"
                                required
                                label="Name"
                                type="name"
                                defaultValue=""
                                variant="standard"
                            />
                        </FormControl>
                        <FormControl className="Input" variant="standard">
                            <InputLabel htmlFor="email-input">Email</InputLabel>
                            <Input
                                id="email-input"
                                required
                                label="Email"
                                type="email"
                                defaultValue=""
                                variant="standard"
                            />
                        </FormControl>
                        <FormControl className="Input" variant="standard">
                            <InputLabel htmlFor="password-input">Password</InputLabel>
                            <Input
                                id="password-input"
                                required
                                label="Password"
                                type={showPassword ? 'password' : 'text'}
                                defaultValue=""
                                variant="standard"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setShowPassword(!showPassword) }}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <br />
                    <div className="Validator">
                        <div className="Rules">
                            <div className="rule blue">Atleast A uppercase Letter</div>
                            <div className="rule">Contains Atlease One Number</div>
                            <div className="rule">contains Atlease one special Chanracter</div>
                        </div>
                    </div>
                    <br />
                    <div className="SubmitButton">Let's Go</div>
                    <br />
                    <div className="GoogleButton"><GoogleIcon/> Sign Up With Google</div>
                    <br /><br />
                    <div className="policy">by clicking Above Button you agree to our term and policy</div>
                </div>
            </div>
        </>
    )
}

export default Login