import Foto1 from '../assets/avatar/Avatar4.png';
import { FaGithub, FaLinkedin, FaWhatsapp  } from "react-icons/fa";

export default function Inicio(){
    return(
        <div className=" bg-blue-800 py-28">
            <div className="flex tela770px m-5 justify-around items-center p-3 rounded-lg">
                <div>
                    <img src={Foto1} alt="Imagem avatar de Ígaro Franklin" className=" w-80 h-80" />
                </div>
                <div className="marginTela770px w-60 border-l-4">
                    <h2 className="text-4xl font-extrabold mb-4 ml-3">Olá, sou <span>Ígaro Franklin</span></h2>
                    <p className="text-lg ml-3">Estudante de Desenvolvimento Web na Faculdade Anhanguera. 
                        Comecei no mundo da programação como um hoobie, e cada dia que passou fui me apaixonando 
                        cada vez mais por esse mundo. Fui soldado do Exército Brasileiro em 2016, trabalhei no 
                        McDonald's por 4 anos e meio onde fui treinador e suporte de TI, em seguida trabalhei 
                        como cozinheiro em um restaurante de massas. Esses empregos me deram uma sólida base 
                        para minhas soft skills.
                    </p>
                    <p className="text-xl ml-3">Estou no começo da minha carreira, mas já tenho uma base de conhecimentos e sempre atrá de mais!</p>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <div className="w-16 hover:text-blue-600 text-6xl">
                    <a href="#"><FaGithub /></a>
                </div>
                <div className="w-16 hover:text-blue-600 text-6xl">
                    <a href="#"><FaLinkedin /></a>
                </div>
                <div className="w-16 hover:text-blue-600 text-6xl">
                    <a href="#"><FaWhatsapp /></a>
                </div>
            </div>
        </div>
    )
}