// Aqui é a pagina de Visualização da LandPage, entã tudo o que for visual e feito em rotas vai ser renderizado dentro da página Views, é necessário criar um arquivo de viu para cada rota criada dentro de componentes.


import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LandPage = () =>{
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default LandPage;