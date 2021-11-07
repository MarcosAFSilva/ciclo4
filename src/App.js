import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './views/Home';
import { Listar as ListarClientes} from './views/Cliente/Listar/index'
import { Listar as ListarPedidos } from './views/Pedido/Listar/index'
import { Listar as ListarServicos } from './views/Servico/Listar/index'
import { Listar as ListarProdutos } from './views/Produto/Listar/index'
import { Incluir as IncluirClientes } from './views/Cliente/Incluir/index'
import { Incluir as IncluirPedidos } from './views/Pedido/Incluir/index'
import { Incluir as IncluirServicos } from './views/Servico/Incluir/index'
import { Incluir as IncluirProdutos } from './views/Produto/Incluir/index'
import { Editar as EditarClientes } from './views/Cliente/Editar/index'
import { Editar as EditarPedidos } from './views/Pedido/Editar/index'
import { Editar as EditarServicos } from './views/Servico/Editar/index'
import { Excluir as ExcluirClientes } from './views/Cliente/Excluir/index'
import { Excluir as ExcluirPedidos } from './views/Pedido/Excluir/index'
import { Excluir as ExcluirServicos } from './views/Servico/Excluir/index'

import { Menu } from './components/Menu';
import { Item } from './views/Servico/Item'

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-clientes" component={ListarClientes}/>
          <Route path="/listar-pedidos" component={ListarPedidos}/>
          <Route path="/listar-servicos" component={ListarServicos}/>
          <Route path="/incluir-clientes" component={IncluirClientes}/>
          <Route path="/incluir-pedidos" component={IncluirPedidos}/>
          <Route path="/incluir-servicos" component={IncluirServicos}/>
          <Route path="/incluir-produtos" component={IncluirProdutos}/>
          <Route path="/editar-clientes" component={EditarClientes}/>
          <Route path="/editar-pedidos" component={EditarPedidos}/>
          <Route path="/editar-servicos" component={EditarServicos}/>
          <Route path="/excluir-clientes" component={ExcluirClientes}/>
          <Route path="/excluir-pedidos" component={ExcluirPedidos}/>
          <Route path="/excluir-servicos" component={ExcluirServicos}/>
          <Route path="/listar-produtos" component={ListarProdutos}/>
          <Route path="/listar-pedido/:id" component={Item}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
