import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import '../app/tailwind.css'

const SocialLinks = () => {

    return (
            <ul className="flex list-none flex-row items-center justify-between w-full">
                <li> < FaLinkedin className="social-icon"/> </li>
                <li> <FaDiscord className="social-icon"/> </li>
                <li> <IoLogoWhatsapp className="social-icon"/> </li>
                <li> <AiFillInstagram className="social-icon"/> </li>
                <li className="social-button h3"> Currículo </li>
            </ul>
    )
}

export default SocialLinks