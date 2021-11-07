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

    const getPedidos = async () => {
        await axios.get(api + "/listar-pedidos")
            .then((response) => {
                console.log(response.data);
                setData(response.data.pedido);
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
        getPedidos();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar pedidos</h1>
                    </div>

                    <div className="m-auto p-2">
                        <Link to="/incluir-pedidos"
                            className="btn btn-outline-primary btn-sm">CADASTRAR NOVO PEDIDO</Link>
                    </div>

                    {status.type === 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Identificaçao do Cliente</th>
                            <th>Nome do cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.nome}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-servicos/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
