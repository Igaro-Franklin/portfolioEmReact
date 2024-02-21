import './app.css';

import Inicio from './components/Inicio';
import Projetos from './components/Projetos';

function App() {

  return (
    <>
      <div>
        <div className='w-full flex h-20 fixed top-0 items-center justify-around mx-auto bg-black'>
            <nav>
                <ul className="flex text-4xl font-semibold gap-3">
                    <li>
                        <a href="#Inicio" className="p-1 hover:text-blue-600 hover:underline">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#Projetos" className="p-1 hover:text-blue-600 hover:underline">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="p-1 hover:text-blue-600 hover:underline">
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a href="#" className="p-1 hover:text-blue-600 hover:underline">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
      <div id='Inicio' className="mt-28">
        <Inicio/>
      </div>
      <div id='Projetos' className="mt-28">
        <Projetos/>
      </div>
    </>
  )
}

export default App
