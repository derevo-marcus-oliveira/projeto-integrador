import { useHref, useLocation  } from "react-router-dom";
import './produto.css'

export default function Produto () {
    const location = useLocation();

    let produtos = [
        {
            "id" : 1,
            "foto" : "https://www.zoing.com.br/media/catalog/product/cache/c33b112402d4ee025d9049949ed1bbd2/b/x/bx80684i79700.jpg",
            "nome" : "Intel",
            "tipo" : "Intel",
            "geracao" : ""
        },
        {
            "id" : 2,
            "foto" : "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000031oem1.jpg",
            "nome" : "AMD",
            "tipo" : "AMD",
            "geracao" : ""
        },
    ]

    let buscaInformacao = (parametro) => {

        return produtos.find(p => p.tipo == parametro);

    } 

    return (
        <>
            <div id="container-produtos">
                {location.pathname.search('processador') > 0 ? (
                    
                    <div className="produtos">
                        
                        {produtos.map((produto) => (
                            <>    
                                <div className="boxProduto" key={produto.id}>
                                    
                                    <div className="item-produto">
                                        <img src={produto.foto} alt="" srcset="" />
                                    
                                        <div className="informacao">
                                            <h2>{produto.nome}</h2>                                 
                                        </div>
                                    
                                    </div>
                                    
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