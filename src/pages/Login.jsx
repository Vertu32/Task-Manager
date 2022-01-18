import  React from "react";
import {useContext} from "react";
import MyButton from "../components/UI/MyButton/MyButton";
import MyInput from "../components/UI/MyInput/MyInput";
import {AuthContext} from "../components/context/index.js"
import { Button, Input } from "@mui/material";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)


    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }

    return(
        <div className="modal__wrapper">
            <div className="modal">
                <h1>Войдите в аккаунт</h1>
                <form  className="modal__form">
                    <Input style={{width: '500px'}} type="text" placeholder="Введите логин"/>
                    <Input style={{width: '500px', margin: '18px'}} type="password" placeholder="Введите пароль" />
                    <Button onClick={login}>Войти</Button>
                </form>
            </div>
            

        </div>
    )

}

export default Login;