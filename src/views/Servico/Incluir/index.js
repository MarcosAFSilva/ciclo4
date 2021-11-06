import axios from 'axios';
import { useState } from 'react';
import { Alert, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { api } from "../../../config";

export const Incluir = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });


    const [status, setStatus] = useState({
        type: '',
        message: ''
    });


    const valorInput = e => setServico({
            ...servico, [e.target.name]: e.target.value
        });
    


    const incluirServico = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api+"/incluir-servicos",servico,{headers})
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
                    <h1>Incluir Serviços</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servicos"
                        className="btn btn-outline-success">Lista de Serviços</Link>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === "error" ? <Alert color="danger">{status.message}</Alert>: ""}

            <Form className="p-2" onSubmit={incluirServico}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input
                        name="nome"
                        placeholder="Nome do serviço"
                        type="text" 
                        onChange={valorInput}/>
                </FormGroup>

                <FormGroup>
                    <Label>Descriçao</Label>
                    <Input
                        name="descricao"
                        placeholder="Descrição do serviço"
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