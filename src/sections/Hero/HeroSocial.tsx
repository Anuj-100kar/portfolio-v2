import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

export default function HeroSocial() {

    return (

        <div className="flex gap-6 mt-12 text-3xl text-zinc-400">

            <a href="#">
                <FaGithub />
            </a>

            <a href="#">
                <FaLinkedin />
            </a>

            <a href="#">
                <FaEnvelope />
            </a>

        </div>

    );

}