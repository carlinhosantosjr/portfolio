interface stackProject {
  title: string
  src: string
}

interface ProjectCardProps {
  imagePreviewSrc: string
  title: string
  shortDescription: string
  stacksProject: stackProject[]
  onClick: () => void;
}

export function ProjectCard({ imagePreviewSrc, title, shortDescription, stacksProject, onClick }: ProjectCardProps) {
  return (
    <div className="flex flex-col-reverse items-center screen550:flex-row gap-3 bg-[var(--gray-500)] p-4 transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.06] hover:bg-[var(--gray-600)]" onClick={onClick}>
      <img className="h-36 w-40 rounded-bl-2xl" src={imagePreviewSrc} alt="" />
      <div className="flex flex-col gap-1.5 m-auto ">
        <h3 className="text-[var(--fontcolor-white)]">{title}</h3>
        <span className="flex text-sm">{shortDescription}</span>

        <div className="flex gap-2 ml-2 mt-auto w-full">
          {stacksProject.map((stack, index) => (
            <img
              key={index}
              className="h-8 w-8 rounded-bl-lg"
              src={stack.src}
              alt={stack.title}
              title={stack.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
