import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import '../app/tailwind.css'
import Link from "next/link";

const SocialLinks = () => {

    return (
            <ul className="flex list-none flex-row items-center justify-between w-full">
                <li> <Link href={"https://linkedin.com/in/ícaro-queiroz-b26195298"}> <FaLinkedin className="social-icon"/> </Link> </li>
                <li> <Link href={"https://github.com/icaroQre"}> <FaGithub className="social-icon"/> </Link> </li>
                <li> <Link href={"https://wa.me/5543999565825"}> <IoLogoWhatsapp className="social-icon"/> </Link> </li>
                <li> <Link href={"https://www.instagram.com/icaroqre/"}> <AiFillInstagram className="social-icon"/> </Link> </li>
                <li className="social-button h3"> Currículo </li>
            </ul>
    )
}

export default SocialLinks