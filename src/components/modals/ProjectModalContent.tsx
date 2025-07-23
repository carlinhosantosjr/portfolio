import { SwiperContent } from '../ui/Swiper'

interface StackProject {
  title: string
  src: string
}

interface ProjectImages {
  imageSrc: string
  title: string
}

export interface ProjectModalProps {
  imagesProject: ProjectImages[]
  title: string
  fullDescription: string
  imageSrc: string
  deployLink?: string
  repositoryLink: string
  stacksProject: StackProject[]
}

export function ProjectModalContent({ imagesProject, title, fullDescription, stacksProject, imageSrc, deployLink, repositoryLink }: ProjectModalProps) {
  const isValidDeployLink = deployLink && deployLink.trim() !== ''

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <div className="flex self-center items-center gap-2">
        <img className="w-16 rounded-bl-2xl rounded" src={imageSrc} alt="icon" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="flex gap-3 p-1 items-center">
        <SwiperContent
          contents={imagesProject}
          quantityDisplayContent={1}
          projectContent
        />

        <div className="flex flex-col justify-between">
          <p className="w-80">{fullDescription}</p>

          <div className="flex gap-2 mt-2">
            {stacksProject.map((stack, index) => (
              <img key={index} src={stack.src} alt={stack.title} title={stack.title} className="h-8 w-8 rounded hover:scale-[1.30] transition-all duration-200" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap gap-3 justify-end mt-4">
        {isValidDeployLink && (
          <a
            className="px-5 py-2 mt-4 bg-[var(--gray-600)] text-[var(--fontcolor-white)] rounded-lg shadow-md hover:bg-[var(--gray-300)] transition-colors duration-100 cursor-pointer w-1/2 text-center w-[150px]"
            href={deployLink} target="_blank" rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        )}
        <a
          className="px-5 py-2 mt-4 bg-[var(--gray-600)] text-[var(--fontcolor-white)] rounded-lg shadow-md hover:bg-[var(--gray-300)] transition-colors duration-100 cursor-pointer w-1/2 text-center w-[150px]"
          href={repositoryLink} target="_blank" rel="noopener noreferrer"
        >
          Ver código
        </a>
      </div>
    </div>
  )
}
