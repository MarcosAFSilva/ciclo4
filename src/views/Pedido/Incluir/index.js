import { axios } from 'axios';
import { useState } from 'react';
import { Alert, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export const Incluir = () => {

    const [pedido, setPedido] = useState({
        nome: '',
        descricao: ''
    });


    const [status, setStatus] = useState({
        type: '',
        message: ''
    });


    const valorInput = e => setPedido({
            ...pedido, [e.target.name]: e.target.value
        });
    


    const incluirPedido = async e => {
        e.preventDefault();
        console.log(pedido);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api+"/listar-pedidos",pedido,{headers})
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
                    <Link to="/listar-pedidos"
                        className="btn btn-outline-success">Lista de Serviços</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === "error" ? <Alert color="danger">{status.message}</Alert>: ""}

            <Form className="p-2" onSubmit={incluirPedido}>
                <FormGroup className="p-2">
                    <Label>Data</Label>
                    <Input
                        name="nome"
                        placeholder="Data do pedido"
                        type="date" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup>
                    <Label>Identificaçao do Cliente</Label>
                    <Input
                        name="ClienteId"
                        placeholder="Descrição do cliente"
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