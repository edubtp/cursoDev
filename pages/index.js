// pages/index.js
import React from 'react';
import { TextField, Button } from '@material-ui/core';

const Home = () => {
    const handleLogin = () => {
        // Lógica para autenticar o usuário
        alert('Login realizado!');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" variant="outlined" type="password" />
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </div>
    );
};

export default Home;
