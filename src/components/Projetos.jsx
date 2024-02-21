import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";


import Projeto01 from '../assets/projetos/SistemaDeRestaurante.png'


export default function Projetos(){
    return(
        <div>
            <h1>Projetos</h1>
            <div>
                <div className="flex m-6 items-center">
                    <div className="w-80 mr-3">
                        <img src={Projeto01} alt="Captura de tea do sistema de restaurante" />
                    </div>
                    <div className=" w-60 ">
                        <div className="flex justify-center gap-1 text-4xl">
                            <FaReact />
                            <IoLogoFirebase />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}