import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import LoginAPI from "./API/LoginAPI";

function Login() {
    const navigate = useNavigate();
    const [mode, setMode] = useState<"login" | "register">("login");

    //const handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault();
    // Simule ação de login ou registro
    //navigate("/home");
    //};

    return (
        <div className="login-container">
            <div className="login-tabs">
                <button
                    type="button"
                    className={mode === "login" ? "active-tab" : ""}
                    onClick={() => setMode("login")}
                >
                    Login
                </button>
                <button
                    type="button"
                    className={mode === "register" ? "active-tab" : ""}
                    onClick={() => setMode("register")}
                >
                    Registrar
                </button>
            </div>
            <h2>{mode === "login" ? "Login" : "Registrar"}</h2>
            <LoginAPI />
            {mode === "register" && (
                <div className="form-group">
                    <label htmlFor="confirm">Confirmar Senha:</label>
                    <input type="password" id="confirm" name="confirm" required />
                </div>
            )}

        </div>
    );
}

export default Login;