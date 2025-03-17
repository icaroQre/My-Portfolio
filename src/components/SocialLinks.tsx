import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import "../app/tailwind.css";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <ul className="flex list-none flex-row items-center justify-between w-full">
      <li>
        {" "}
        <Link
          href={"https://linkedin.com/in/ícaro-queiroz-b26195298"}
          target="_blank"
        >
          {" "}
          <FaLinkedin className="social-icon" />{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={"https://github.com/icaroQre"} target="_blank">
          {" "}
          <FaGithub className="social-icon" />{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={"https://wa.me/5543999565825"} target="_blank">
          {" "}
          <IoLogoWhatsapp className="social-icon" />{" "}
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link href={"https://www.instagram.com/icaroqre/"} target="_blank">
          {" "}
          <AiFillInstagram className="social-icon" />{" "}
        </Link>{" "}
      </li>
      <li className="social-button h3">
        {" "}
        <a href="/documents/icaro-cv.pdf" download>
          Baixar CV
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
