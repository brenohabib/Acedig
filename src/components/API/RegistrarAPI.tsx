import "../Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarAPI() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function registrar() {
        setError("");
        setSuccess("");
        const item = {
            nome,
            email,
            senha,
            telefone,
            ativo: true
        };
        try {
            let result = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });

            if (result.status === 201) {
                setSuccess("Usuário registrado com sucesso!");
                setTimeout(() => navigate("/login"), 1200);
            } else {
                const msg = await result.text();
                setError(msg || "Erro ao registrar usuário.");
            }
        } catch (e) {
            setError("Erro de conexão com o servidor.");
        }
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-Mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    required
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    required
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>
            {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
            <button type="submit" onClick={registrar}>Registrar</button>
        </>
    );
}

export default RegistrarAPI;