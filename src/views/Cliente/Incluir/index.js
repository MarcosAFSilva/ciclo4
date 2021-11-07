import axios from 'axios';
import { useState } from 'react';
import { Alert, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export const Incluir = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        descricao: ''
    });


    const [status, setStatus] = useState({
        type: '',
        message: ''
    });


    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });



    const incluirCliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/incluir-clientes", cliente, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message,
                    });
                };

            })
            .catch(() => {
                console.log("Erro: Sem conexão com a API")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Incluir Pedidos</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-clientes"
                        className="btn btn-outline-success">Lista de Clientes</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={incluirCliente}>

                <FormGroup>
                    <Label>Nome do Cliente</Label>
                    <Input
                        name="nome"
                        type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup>
                    <Label>Endereço (Rua, número e bairro)</Label>
                    <Input
                        name="endereco"
                        type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup>
                    <Label>Cidade</Label>
                    <Input
                        name="cidade"
                        type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup>
                    <Label>UF</Label>
                    <Input
                        name="uf"
                        type="text"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup>
                    <Label>Data de Nascimento</Label>
                    <Input
                        name="nascimento"
                        type="date"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup>
                    <Label>Data do Cadastro</Label>
                    <Input
                        name="clienteDesde"
                        type="date"
                        onChange={valorInput} />
                </FormGroup>

                <Button type="submit" outline color="success">
                    Incluir
                </Button>
            </Form>

        </Container >
    );
};