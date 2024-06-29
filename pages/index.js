function Home() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" variant="outlined" type="password" />
                <Button variant="contained" color="primary">Login</Button>
            </form>
        </div>
    );
}
export default Home;
