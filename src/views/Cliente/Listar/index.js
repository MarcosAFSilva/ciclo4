import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Table, Alert } from 'reactstrap';


import { api } from "../../../config";

export const Listar = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const getClientes = async () => {
        await axios.get(api + "/listar-clientes")
            .then((response) => {
                console.log(response.data);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API'
                })
                // console.log("Erro: sem conexão com a API")
            })
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações do cliente</h1>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/incluir-clientes"
                            className="btn btn-outline-primary btn">CADASTRAR NOVO CLIENTE</Link>
                    </div>

                    {status.type === 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Data de Nascimento</th>
                            <th>Data de Cadastro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.nome}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td>{item.clienteDesde}</td>
                                <td className="text-center/">
                                    <Link to={"/excluir-cliente/" + item.id}
                                        className="btn btn-outline-danger btn-sm">EXCLUIR</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};