import React, { useState } from "react"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; // Importa o useNavigate para navegação

export const Login = () => {
    const [senhaDigitada, setSenhaDigitada] = useState("");
    const [userDigitado, setUserDigitado] = useState("");
    const navigate = useNavigate(); // Hook para navegar entre páginas

    const [user, senha] = ["matheus", "12345"]; // Simulando credenciais corretas

    const validaLogin = () => {
        if (userDigitado === user && senhaDigitada === senha) {
            // Salva o estado de login no sessionStorage
            sessionStorage.setItem("loggedIn", true);
            // Redireciona para a página Home
            navigate("/home");
        } else {
            alert("Usuário ou senha incorretos!");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>LOGIN</h2>
            <Box
                component="form"
                sx={{ '& > :not(style)': { width: '100%' } }}  // Ajusta para 100% da largura
                noValidate
                autoComplete="off"
                style={styles.form}
            >
                <TextField
                    placeholder="Digite Seu Usuário"
                    label="Usuário"
                    variant="outlined"
                    onChange={(event) => setUserDigitado(event.target.value)} // Captura o valor correto
                    InputLabelProps={{ style: styles.textField.label }}
                    InputProps={{ style: styles.textField.input }}
                    sx={styles.textField}
                />
                <TextField
                    placeholder="Digite Sua Senha"
                    label="Senha"
                    type="password" // Oculta a senha
                    variant="outlined"
                    onChange={(event) => setSenhaDigitada(event.target.value)} // Captura o valor correto
                    InputLabelProps={{ style: styles.textField.label }}
                    InputProps={{ style: styles.textField.input }}
                    sx={styles.textField}
                />
                <Button 
                    variant="contained" 
                    onClick={validaLogin} 
                    sx={styles.button}
                >
                    Entrar
                </Button>
            </Box>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0D0D0D',
        color: '#D9AB91',
    },
    form: {
        display: 'flex',
        flexDirection: 'column', // Organiza os elementos em coluna
        alignItems: 'center',    // Centraliza os campos
        gap: '20px',             // Espaço entre os campos
        width: '300px',          // Define a largura máxima do formulário
    },
    title: {
        marginBottom: '20px',
        fontSize: '3rem',
        fontFamily: 'Roboto, sans-serif',  // Aplica a fonte Roboto sem serifa
        fontWeight: '700',                 // Define a fonte como bold (700)
        color: '#D9AB91',
    },
    textField: {
        input: { color: '#D9AB91' }, // Cor do texto dentro do campo
        label: { color: '#D9AB91' }, // Cor do label
        fieldset: { borderColor: '#D9AB91' }, // Cor da borda do campo
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#D9AB91", // Cor padrão da borda
            },
            "&:hover fieldset": {
                borderColor: "#730202", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
                borderColor: "#730202", // Cor da borda quando o campo está focado
            },
        },
        width: '100%', // Ajusta a largura dos campos para 100% do formulário
    },
    button: {
        backgroundColor: '#730202',
        color: '#D9AB91',
        '&:hover': {
            backgroundColor: '#D9AB91',
            color: '#730202',
        },
        width: '100%', // Botão ajustado para 100% da largura
    },
};
