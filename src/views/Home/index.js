import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página Inicial</h1>
                    </div>
                    <div className="p-2">
                        <a href="/listar-clientes"
                            className="btn btn-primary btn-lg">
                            CLIENTES
                        </a>
                    </div>
                    <div>
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
                    <div>

                    <div className="p-2">
                        <a href="/listar-compras"
                            className="btn btn-outline-success btn-sm">
                            COMPRAS
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="/listar-produtos"
                            className="btn btn-outline-success btn-sm">
                            PRODUTOS
                        </a>
                    </div>
                    </div>
                   
                </div>
            </Container>
        </div>
    );
};