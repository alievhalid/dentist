import React, {useState} from 'react';
import {Button, Paper, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import styles from './auth.module.scss';
import {auth} from "../../redux/auth/authReducer";

const Auth = () => {
    const dispatch =useDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [empty, setEmpty] = useState(false);


    const handleLogin = (e) =>{
        setLogin(e.target.value)
        if (login && password){
            setEmpty(false)
        }
    }
    const handlePass = (e) =>{
        setPassword(e.target.value)
        if (login && password){
            setEmpty(false)
        }
    }
    const handleSubmit = () => {
        if (login && password){
            dispatch(auth(login, password))
        }else {
            setEmpty(true)
        }

    }

    return (
        <div className={styles.auth}>
            <Paper
                elevation={7}
                className={styles.box}>
                <h2 className={styles.h2} >АВТОРИЗАЦИЯ</h2>
                {empty ? <div>Введите данные</div> : ''}
                <div>
                    <TextField
                        error={empty}
                        id="filled-login-input"
                        label="Login"
                        type="login"
                        autoComplete="current-login"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={login}
                        onChange={handleLogin}
                    />
                    <TextField
                        error={empty}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={handlePass}
                    />
                    <Button onClick={handleSubmit}
                            className={styles.btn}
                            variant="contained"
                            color="primary"
                    >
                        Войти
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default Auth;