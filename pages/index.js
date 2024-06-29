// pages/index.js
const Home = () => {
    const handleLogin = (event) => {
        event.preventDefault(); // Evita que o formulário recarregue a página
        // Aqui você pode adicionar lógica para autenticar o usuário
        alert('Login realizado!');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Home;
