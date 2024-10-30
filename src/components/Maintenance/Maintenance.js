import { FaFacebook } from "react-icons/fa";
import mercadopagoIcon from "../../assets/icons/mercadolibre.png"
import { SiGooglemaps } from "react-icons/si";

const Maintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-5">
            <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">Estamos renovando la pagina!</h1>
            <p className="text-lg text-center mb-8 max-w-md">
                Nuestro sitio está actualmente en mantenimiento para mejorar su experiencia. Vuelva a
                visitarnos pronto.
            </p>
            <div className="flex space-x-6">
                <p className="text-lg text-center mb-8 max-w-md">
                    Encuentrenos en Av. Enrique Santamarina 325, B1842 Monte Grande, Buenos Aires, Argentina
                </p>
            </div>
            <div className="flex space-x-6">
                <a href="https://www.facebook.com/luna.almohadones/" target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-700 transition duration-300">
                    <FaFacebook size={36}/>
                </a>
                <a href="https://listado.mercadolibre.com.ar/pagina/lubellacreaciones/" target="_blank"
                   rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                    <img src={mercadopagoIcon} alt="MercadoPago" width={36} height={36}/>
                </a>
                <a href="https://www.google.com/maps/place/Luna+Almohadones/@-34.8214333,-58.4700998,15z/data=!4m2!3m1!1s0x0:0xdfc6d6114dceb18a?sa=X&ved=1t:2428&ictx=111"
                   target="_blank"
                   rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                    <SiGooglemaps size={36}/>
                </a>
            </div>
        </div>
    );
};

export default Maintenance;
