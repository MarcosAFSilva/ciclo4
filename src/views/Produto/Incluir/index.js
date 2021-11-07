import axios from 'axios';
import { useState } from 'react';
import { Alert, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export const Incluir = () => {

    const [produto, setProduto] = useState({
        nome: '',
        descricao: ''
    });


    const [status, setStatus] = useState({
        type: '',
        message: ''
    });


    const valorInput = e => setProduto({
            ...produto, [e.target.name]: e.target.value
        });
    


    const incluirProduto = async e => {
        e.preventDefault();
        console.log(produto);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api+"/incluir-produtos",produto,{headers})
        .then((response) => {
            if (response.data.error){
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            }else{
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            };
            
        })
        .catch(() => {
            setStatus({
                type: 'error',
                message: 'Erro: sem conexão com a API'
            })
        })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Incluir Produtos</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-produtos"
                        className="btn btn-outline-success">Lista de Produtos</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === "error" ? <Alert color="danger">{status.message}</Alert>: ""}

            <Form className="p-2" onSubmit={incluirProduto}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input
                        name="nome"
                        placeholder="Nome do produto"
                        type="text" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup>
                    <Label>Descriçao</Label>
                    <Input
                        name="descricao"
                        placeholder="Descrição do produto"
                        type="text" 
                        onChange={valorInput}/>
                </FormGroup>

                <Button type="submit" outline color = "success">
                    Incluir
                </Button>
            </Form>

        </Container >
    );
};