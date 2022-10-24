import { Outlet, Link, useLocation } from "react-router-dom";
import './root.css';

export default function Root() {
    const location = useLocation();
    return (
      <>
        <div id="container">
            <div id="header">
                <div className="logo">
                    <Link to={"/"}> 
                        <p>search please</p>
                    </Link>
                    
                </div>
                <div className="container-header">
                   
                    <div className="area1">
                        <input type="text" className="campo" />
                        <button type="submit" className="pesquisa">
                           <Link to={""}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                           </Link>
                        </button>

                        <div className="perfilUsuario">

                            <p>Fulano de Tal</p>
                            <div className="perfil">

                            </div>
                        </div>

                    </div>
                    <div className="area2">

                        <nav className="menu">

                            <ul className="lista">

                                <li className="item-lista">
                                    <span className="linha"></span>
                                    <p>Catalogo</p>
                                    <div className="conteudo">
                                        <nav className="submenu">
                                            <ul>
                                            <ul>
                                                <li>
                                                    <Link className="url-item" to={"catalogo/memoriaram"}>Mémoria RAM</Link>
                                                </li>
                                                <li>
                                                    <Link className="url-item" to={"catalogo/processador"}>Processador</Link>
                                                </li>
                                            </ul>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="item-lista">
                                    <span className="linha"></span>
                                    <p >Serviço</p>
                                    <div className="conteudo">
                                        <nav className="submenu">
                                            <ul>
                                                <li>
                                                    <Link className="url-item" to={"servico/montagem"}>Montagem</Link>
                                                </li>
                                                <li>
                                                    <Link className="url-item" to={"servico/reparo"}>Reparo</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </li>
                                <li className="item-lista">
                                    <Link className="url" to={"contato"}>Contato</Link>
                                    
                                </li>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
    
            <div id="detalhe">
                <Outlet/>
            </div>
        </div>
      </>
    );
  }