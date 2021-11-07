import axios from 'axios';
import { useState } from 'react';
import { api } from "../../../config";

export const Excluir = () => {

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



    const excluirCliente = async e => {
        e.preventDefault();
        console.log(cliente);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/excluir-clientes/", cliente, { headers })
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

    
};