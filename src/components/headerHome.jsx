import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button'; // Importando o Button do Material UI
import Stack from '@mui/material/Stack'; // Importando o Stack para organizar os botões
import { border, borderRadius, padding } from "@mui/system";


const Usuario = 'Matheus'

// Dados para os botões (exemplo)
const buttonData = [
    { label: 'Paciente 1' },
    { label: 'Paciente 2' },
    { label: 'Paciente 3' },
    { label: 'Paciente 4' },
];

export const Header = () => {
    return (
        <div>
            <div style={styles.container1}>
                <div style={styles.containerUsuario}>
                    <PersonIcon style={styles.icon} />
                    <h1 style={styles.text}>Bem Vindo {Usuario}</h1>
                </div>
                <div style={styles.mainContainer}>
                    <div style={styles.buttonContainer}>
                        <Stack direction="column" spacing={2}>
                            {buttonData.map((button, index) => (
                                <Button
                                    key={index}
                                    sx={styles.button} // Aplica o estilo ao botão
                                    variant="contained" // Usando o estilo "contained" para um botão com cor de fundo
                                >
                                    {button.label}
                                </Button>
                            ))}
                        </Stack>
                    </div>
                    <div style={styles.squareContainer}>
                        {/* Você pode adicionar conteúdo dentro do contêiner quadrado aqui */}
                        <h2 style={styles.squareText}>Resultado</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container1: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '75vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column', // Alinha o conteúdo em coluna
        alignItems: 'flex-start', // Alinha o conteúdo à esquerda
    },
    containerUsuario: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '80%',
        marginLeft: '20px',
    },
    icon: {
        color: '#730202',
        fontSize: '100px',
        marginRight: '20px',
    },
    text: {
        color: '#0D0D0D',
        fontSize: '24px',
    },
    mainContainer: {
        display: 'flex', // Para colocar os contêineres lado a lado
        gap:'50%',
        marginTop: '50px', // Espaço entre o contêiner do usuário e os botões
        width: '90%', // Ocupa toda a largura disponível

        border:'1px solid #0D0D0D',
        borderRadius:'15px',
        padding:'30px',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column', // Exibe os botões em coluna
        //marginTop: '50px', // Espaço entre o contêiner do usuário e os botões
        marginLeft: '50px',
        alignItems: 'flex-start', // Alinha os botões à esquerda

        padding: '30px',
        borderRadius: '15px',

        backgroundColor: '#0D0D0D'
    },
    squareContainer: {
        backgroundColor: '#F2911B', // Cor de fundo do contêiner quadrado
        marginLeft: '20px', // Espaço entre os contêineres
        display: 'flex',
        alignItems: 'center', // Centraliza verticalmente o texto
        justifyContent: 'center', // Centraliza horizontalmente o texto
        borderRadius: '15px', // Borda arredondada

        padding:'30px'
    },
    squareText: {
        color: '#0D0D0D', // Cor do texto dentro do contêiner quadrado
        fontSize: '20px', // Tamanho do texto
        textAlign: 'center', // Centraliza o texto
    },
    button: {
        backgroundColor: '#730202', // Define a cor do botão
        color: '#FFFFFF', // Cor do texto do botão
        '&:hover': {
            backgroundColor: '#F2911B', // Cor ao passar o mouse sobre o botão
        },
        width: '100%', // Faz o botão ocupar toda a largura disponível
    },
};

