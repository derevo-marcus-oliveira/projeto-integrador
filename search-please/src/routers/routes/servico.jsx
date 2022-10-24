import { Outlet, Link } from "react-router-dom";

export default function Servico () {
    return (
        <>
            <div className="filtros">

            </div>
            <div className="detal">                
                <Outlet/>
            </div>
        </>
    )
}