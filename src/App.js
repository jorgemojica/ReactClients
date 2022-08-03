import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import ListarClientes from "./components/listar-clientes.component";
import AgregarClientes from "./components/agregar-clientes.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
          <Link to={"/clientes"} class="navbar-brand">
            Clientes
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to={"/clientes"} className="nav-link">
                  Clientes
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/agregarCliente"} class="nav-link">
                  Nuevo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/clientes" element={<ListarClientes />} />
            <Route exact path="/agregarCliente" element={<AgregarClientes />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
