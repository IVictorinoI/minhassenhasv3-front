import React from 'react'

const Menu = () => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#/todos">Minhas senhas</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#/todos">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/about">Sobre</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#todos" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Opções
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#todos">Piores senhas</a>
            <a className="dropdown-item" href="#todos">Melhores senhas</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#todos">Entrar em contato</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
}

export default Menu
