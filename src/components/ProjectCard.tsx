import { Project } from "@/types/project.interface";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}: ProjectCardProps) => {
  return (
    <Fade direction="up" triggerOnce={true}>
      <div className="w-[300px] h-[200px] md:w-[350px] md:h-[250px] m-2 rounded-lg cursor-pointer overflow-hidden">
        <div className="w-[300px] h-[400px] md:w-[350px] md:h-[500px] flex flex-col items-start justify-start hover:translate-y-[-200px] md:hover:translate-y-[-250px] bg-inherit transition-all">
          <div className="w-[300px] h-[200px] md:w-[350px] md:h-[250px] relative items-center justify-center">
            <Image
              src={project.image!}
              alt="project-image"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px)"
            />
          </div>
          <div className="w-[300px] h-[200px] md:w-[350px] md:h-[250px] flex flex-col items-center justify-center bg-light-secondary dark:bg-dark-secondary">
            <p className="w-full p text-[#FFFFFF] text-center text-wrap p-6">
              {" "}
              {project.description}{" "}
            </p>
            <div className="flex flex-row items-center justify-center">
              <Link
                href={project.github!}
                target="blank"
                className="hover:bg-light-tertiary rounded-2xl p-2"
              >
                <FaGithub className="text-3xl text-[#FFFFFF]" />
              </Link>
              <div className="w-4"></div>
              <Link
                target="blank"
                href={project.url!}
                className="hover:bg-light-tertiary rounded-2xl p-2"
              >
                <FaArrowUpRightFromSquare className="text-2xl text-[#FFFFFF]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
