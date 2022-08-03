import React, { useState, useEffect } from "react";
import { clienteService } from "../services/cliente.service";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ListarClientes() {

    let [clientes, setClientes] = useState([]);

    useEffect(() => {
        clienteService.getAll().then(response => {
            setClientes(response.data);
        });
    }, []);

    return (
        <div className="text-center">
            <h1>Clientes</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Edad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.edad}</td>
                            <td>
                                <Button variant="warning" type="submit">
                                    Editar
                                </Button>
                                &nbsp;&nbsp;
                                <Button variant="danger" type="submit">
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );

}