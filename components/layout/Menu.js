
import { Link, } from 'react-scroll';
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul id="menu-primary-menu" className="menu">
                <li>
                <Link href="/" rel="home"> Inicio </Link>
                </li>
                <li>
                    <Link to="aztecaz" smooth={true} duration={500} offset={-100}> ¿Por qué Aztecaz? </Link>
                </li>
                <li>
                   <Link to="team" smooth={true} duration={500} offset={-100}> Team </Link>                   
                </li>
                <li>
                    <Link to="faq" smooth={true} duration={500} offset={-100}> FAQ </Link>
                </li>
                <li>
                    <Link to="contacto" smooth={true} duration={500} offset={-100}> Contacto </Link>
                </li>
                <li>
                    <Link href="/"> Blog </Link>
                    
                </li>
            </ul>
        </>
    )
}
