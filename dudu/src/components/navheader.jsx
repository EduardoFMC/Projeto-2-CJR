import React from 'react';
import ReactDOM from 'react-dom';

export default function NavFirst () {
    const elementNav = (
        <nav class="options-backoffice">
            <a href="#">Pedidos</a>
            <a href="#">Usuários</a>
            <a href="#">Refeições</a>
            <a href="#">Categoria de refeição</a>
        </nav>
    );
    return (
        (elementNav)
    );

}