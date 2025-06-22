import "../Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Formulário de login de usuário.
// Envia email e senha para o backend, salva o usuário logado no localStorage e redireciona para Home.

function LoginAPI() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function login() {
        setError("");
        setSuccess("");
        let item = { email, senha };
        try {
            let result = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });

            if (result.status === 200) {
                const data = await result.json();
                localStorage.setItem("user-info", JSON.stringify(data));
                setSuccess("Login realizado com sucesso!");
                setTimeout(() => navigate("/home"), 1000); // Aguarda 1s antes de redirecionar
            } else if (result.status === 401) {
                setError("Usuário ou senha incorretos.");
            } else {
                setError("Erro ao tentar fazer login. Tente novamente.");
            }
        } catch (e) {
            setError("Erro de conexão com o servidor.");
        }
    }


    return (
        <>
            <div className="form-group">
                <label htmlFor="username">E-Mail:</label>
                <input type="text" id="username" name="E-Mail" required
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="Senha" required
                    onChange={(e) => setSenha(e.target.value)} />
            </div>
            {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

            <button type="submit" onClick={login}>Login</button>
        </>
    );
}

export default LoginAPI;