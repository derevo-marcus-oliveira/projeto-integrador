import { useLocation  } from "react-router-dom";
import './produto.css'

export default function Produto () {
    const location = useLocation();

    let produtos = [
        {
            "id" : 1,
            "foto" : "",
            "nome" : "Intel",
            "preco" : "120.00",
        },
        {
            "id" : 2,
            "foto" : "",
            "nome" : "AMD",
            "preco" : "100.00",
        },
        {
            "id" : 3,
            "foto" : "",
            "nome" : "GibaByte",
            "preco" : "80.00",
        }
    ]

    return (
        <>
            <div>
                {location.pathname.search('processador') > 0 ? (
                    
                    <div className="produtos">
                        
                        {produtos.map((produto) => (
                            <>    
                                <div className="boxProduto" key={produto.id}>

                                <ul>
                                    <li >
                                        <div>
                                            {produto.nome} : {produto.preco}                                
                                        </div>
                                    </li>
                                </ul>  
                                </div>

                            </>       
                        ))}

                    </div>

                
                ) : (location.pathname.search('memoriaram') > 0) ? (
                    
                    <div>
                        memoria ram hihi
                    </div>


                ) : (
                    
                    <div>
                        nao
                    </div>
                )}
                    
            </div>
            

        </>
    )
}