import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";


import Projeto01 from '../assets/projetos/SistemaDeRestaurante.png'


export default function Projetos(){
    return(
        <div className="bg-projetos flex flex-col ">
            <h1 className="pt-8 text-center text-6xl">Projetos</h1>
            <div className="m-8 bg-bg01 shadow-custom1 py-3 rounded-lg">
                <div className="flex m-6 items-center tela770px">
                    <div className="w-80 mr-3 shadow-custom2">
                        <img src={Projeto01} alt="Captura de tea do sistema de restaurante" />
                    </div>
                    <div className=" m-auto w-60 marginTela770px">
                        <div className="flex justify-center gap-1 text-5xl">
                            <div className="flex items-center">
                                <FaReact />
                                <p className="text-sm ml-1">ReactJs</p>
                            </div>
                            <div className="flex items-center">
                                <IoLogoFirebase />
                                <p className="text-sm ml-1">FireBase</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="m-6 text-2xl underline">Sistema para um restaurante</h3>
                            <p className="text-justify">Sistema de login, Dashboard para visualizar os pedidos em tempo real
                                Botão que direciona para uma tela de pedidos com carrinho e informações,
                                Tela de cadastro de itens, Tela para visualizar os itens com funcionalidade de pausar ou excluir item,
                                Tela com um resumo de vendas do dia com botão para finalizar o dia, Tela de vendas dos dias consluídos 
                                com filtro por mês e opção de baixar um excel a tabela.
                            </p>
                        </div>
                        <div className="flex gap-8 text-xl justify-center my-4">
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <FiGithub />
                                Ir para o GitHub
                            </a>
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <TbWorld />
                                Ir para o site
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-8 bg-bg01 shadow-custom1 py-3 rounded-lg">
                <div className="flex m-6 items-center tela770px">
                    <div className="w-80 mr-3 shadow-custom2">
                        <img src={Projeto01} alt="Captura de tea do sistema de restaurante" />
                    </div>
                    <div className=" m-auto w-60 marginTela770px">
                        <div className="flex justify-center gap-1 text-5xl">
                            <div className="flex items-center">
                                <FaReact />
                                <p className="text-sm ml-1">ReactJs</p>
                            </div>
                            <div className="flex items-center">
                                <IoLogoFirebase />
                                <p className="text-sm ml-1">FireBase</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="m-6 text-2xl underline">Sistema para um restaurante</h3>
                            <p className="text-justify">Sistema de login, Dashboard para visualizar os pedidos em tempo real
                                Botão que direciona para uma tela de pedidos com carrinho e informações,
                                Tela de cadastro de itens, Tela para visualizar os itens com funcionalidade de pausar ou excluir item,
                                Tela com um resumo de vendas do dia com botão para finalizar o dia, Tela de vendas dos dias consluídos 
                                com filtro por mês e opção de baixar um excel a tabela.
                            </p>
                        </div>
                        <div className="flex gap-8 text-xl justify-center my-4">
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <FiGithub />
                                Ir para o GitHub
                            </a>
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <TbWorld />
                                Ir para o site
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-8 bg-bg01 shadow-custom1 py-3 rounded-lg">
                <div className="flex m-6 items-center tela770px">
                    <div className="w-80 mr-3 shadow-custom2">
                        <img src={Projeto01} alt="Captura de tea do sistema de restaurante" />
                    </div>
                    <div className=" m-auto w-60 marginTela770px">
                        <div className="flex justify-center gap-1 text-5xl">
                            <div className="flex items-center">
                                <FaReact />
                                <p className="text-sm ml-1">ReactJs</p>
                            </div>
                            <div className="flex items-center">
                                <IoLogoFirebase />
                                <p className="text-sm ml-1">FireBase</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="m-6 text-2xl underline">Sistema para um restaurante</h3>
                            <p className="text-justify">Sistema de login, Dashboard para visualizar os pedidos em tempo real
                                Botão que direciona para uma tela de pedidos com carrinho e informações,
                                Tela de cadastro de itens, Tela para visualizar os itens com funcionalidade de pausar ou excluir item,
                                Tela com um resumo de vendas do dia com botão para finalizar o dia, Tela de vendas dos dias consluídos 
                                com filtro por mês e opção de baixar um excel a tabela.
                            </p>
                        </div>
                        <div className="flex gap-8 text-xl justify-center my-4">
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <FiGithub />
                                Ir para o GitHub
                            </a>
                            <a href="#" className="border-2 p-2 rounded-xl hover:bg-blue-800">
                                <TbWorld />
                                Ir para o site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}