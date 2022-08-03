import React, { useState } from "react";
import { clienteService } from "../services/cliente.service";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function AgregarClientes() {

    let [cliente, setCliente] = useState({
        nombre: "",
        telefono: "",
        edad: 0,
        estado: false
    });

    const estados = [
        { estado: false, nombre: "Inactivo" },
        { estado: true, nombre: "Activo" }
    ]

    const handleChange = (event) => {
        setCliente({ ...cliente, [event.target.name]: event.target.value });
    };

    const handleClick = () => {
        clienteService.create(cliente).then(response => {
            setCliente({
                nombre: response.data.nombre,
                telefono: response.data.telefono,
                edad: response.data.edad,
                estado: response.data.estado
            });
        });
    }

    return (
        <Container className="mt-5">
            <div className="text-center mb-5">
                <h1>Agregar Cliente</h1>
            </div>
            <Form>
                <Container className="col-4">
                    <Row>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={handleChange} name="nombre" type="text" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control onChange={handleChange} name="telefono" type="text" placeholder="Teléfono" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="edad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control onChange={handleChange} name="edad" type="text" placeholder="Edad" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="estado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select onChange={handleChange}
                                name="estado" aria-label="Default select example">
                                <option>Seleccione...</option>
                                {estados.map(estado => (
                                    <option key={estado.estado} value={estado.estado}>{estado.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Button onClick={handleClick} variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Row>
                </Container>
            </Form>
        </Container >
    );

}