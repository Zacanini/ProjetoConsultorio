
import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/home" style={styles.link}>HOME</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/pagina1" style={styles.link}>Pagina1</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/pagina2" style={styles.link}>Pagina2</Link>
                    </li>
                </ul>
            </nav>
            <main style={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

// Estilos
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#0D0D0D', // Cor de fundo para todo o layout
        color: '#D9AB91', // Cor do texto padrão para combinar com o tema
    },
    navbar: {
        backgroundColor: 'rgba(217, 171, 145, 0.03)',
        borderRadius: '25px', 
        borderBottom: '1px solid #F21905',
        padding: '20px',
        position: 'fixed', 
        top: 0,
        left: '50%', // Para centralizar horizontalmente
        transform: 'translateX(-50%)', // Ajusta o elemento para ficar bem no centro
        width: '99%', // Define 95% da largura da tela
        zIndex: 1000, 
    },    
    navList: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center', // Centraliza os itens do menu
        margin: 0,
        padding: 0,
        gap: '30px', // Espaço entre os itens do menu
    },
    navItem: {
        fontSize: '1.2rem',
    },
    link: {
        textDecoration: 'none',
        color: '#D9AB91', // Cor do link padrão
        fontWeight: 'bold',
        transition: 'color 0.3s ease', // Suave transição para hover
        fontFamily: 'Roboto, sans-serif',
        '&:hover': {
            color: '#F2911B', // Cor ao passar o mouse sobre o link
        },
    },
    content: {
        marginTop: '80px', // Cria espaço para que o conteúdo não fique atrás do menu
        padding: '20px',
        display: 'flex',
        justifyContent: 'center', // Centraliza o conteúdo
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#0D0D0D', // Fundo do conteúdo
        color: '#D9AB91',
    },
};
