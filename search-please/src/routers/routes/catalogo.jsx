import { Outlet, Link, useNavigation, useLocation  } from "react-router-dom";
import "./filtro.css"


export default function Catalogo () {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <>

            <div className="filtros" >
                {location.pathname.search('memoriaram') > 0 ? (
                    <div className="container">
                       <fieldset>
                            <legend> Tipo </legend>
                            <div>
                                <input type="checkbox" id="ddr4" name="ddr4" />
                                <label for="ddr4">DDR4</label>
                            </div>
                            
                            <div>
                                <input type="checkbox" id="ddr3" name="ddr3" />
                                <label for="ddr3">DDR3</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend> Capacidade </legend>
                            <div>
                                <input type="checkbox" id="c2" name="c2" />
                                <label for="c2">2gb</label>
                            </div>                            
                            <div>
                                <input type="checkbox" id="c4" name="c4" />
                                <label for="c4">4gb</label>
                            </div>
                            <div>
                                <input type="checkbox" id="c8" name="c8" />
                                <label for="c8">8gb</label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend> Mhz </legend>
                            <div>
                                <input type="checkbox" id="f800" name="f800" />
                                <label for="f800">800mhz</label>
                            </div>
                            <div>
                                <input type="checkbox" id="f1066" name="f1066" />
                                <label for="f1066">1066mhz</label>
                            </div>
                            <div>
                                <input type="checkbox" id="f1333" name="f1333" />
                                <label for="f1333">1333mhz</label>
                            </div>
                            <div>
                                <input type="checkbox" id="f1600" name="f1600" />
                                <label for="f1600">1600mhz</label>
                            </div>
                            <div>
                                <input type="checkbox" id="f1866" name="f1866" />
                                <label for="f1866">1866mhz</label>
                            </div>
                            <div>
                                <input type="checkbox" id="f2133" name="f2133" />
                                <label for="f2133">2133mhz</label>
                            </div>
                        </fieldset>
                    </div>
                ) : (
                    <div className="container">
                        <fieldset>
                            <legend> RAM </legend>

                            <div>
                                <input type="checkbox" id="clock" name="clock" />
                                <label for="clock">DDR4</label>
                            </div>

                            <div>
                                <input type="checkbox" id="horns" name="horns"/>
                                <label for="horns">DDR3</label>
                            </div>
                        </fieldset>
                    </div>
                )}
                
            </div>
            <div className="detal">                
                <Outlet/>
            </div>
        </>
    )
}