import React from 'react';

export default function Header () {
    const element = (
        <header>
        <div class="options">
            <h3>dinnerdash</h3>
            <nav>
                <a href="#">Backoffice</a>
                <a href="#">Perfil</a>
                <a href="#">Sair</a>
            </nav>

        </div>
        
        <div>
            <h1>Backoffice</h1>
            <p>Gerencie pedidos, refeições e mais.</p>
        </div>
        
        
    </header>
    );
    return (
        (element)
    );

    
}

