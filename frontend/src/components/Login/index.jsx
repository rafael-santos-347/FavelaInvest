import React from 'react';
import './styles.css';
import Foto_login from '../../assets/imagens/foto.png';
import Header from '../Header';
import Footer from '../Footer';

const Login = () => {
    return(
        <React.Fragment>
            <Header />
            <main id="main" className="d-flex justify-content-center align-items-center h-100 mt-5">
                <section className="container-login">
                <img id="foto" src={Foto_login} alt="Foto" />
                <form action="https://favela-back.herokuapp.com/login_cadastro.php" method="POST" >          
                    <legend>LOGIN</legend>
                    <label htmlFor="email" id="lEmail">Email</label>
                    <input required type="text" name="email" id="email" />
                    <label htmlFor="senha" id="lSenha">Senha</label>
                    <input required type="password" name="senha" id="senha" />
                    <button type="submit">Entrar</button>
                    <a className="texto1 mt-4" href="#">Esqueçeu a senha?</a>
                    <a className="texto2 mt-2" href="/cadastro">Ainda não possui uma conta?</a>
                </form>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Login;