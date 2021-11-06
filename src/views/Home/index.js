import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/listar-clientes"
                            className="btn btn-outline-success btn-sm">
                            CLIENTES
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-pedidos"
                            className="btn btn-outline-success btn-sm">
                            PEDIDOS
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-servicos"
                            className="btn btn-outline-success btn-sm">
                            SERVIÇOS
                        </a>
                    </div>
                </div>

            </Container>
        </div>
    );
};