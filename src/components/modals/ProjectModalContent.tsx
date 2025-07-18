interface stackProject {
  title: string
  src: string
}

interface ProjectModalProps {
  imagePreviewSrc: string
  title: string
  description: string
  stacksProject: stackProject[]
}

export function ProjectModalContent({ imagePreviewSrc, title, description, stacksProject }:ProjectModalProps) {
  return (
    <div className="flex flex-col gap-4">
      <img src={imagePreviewSrc} alt={title} className="w-full rounded" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <div className="flex gap-2 mt-2">
        {stacksProject.map((stack, index) => (
          <img key={index} src={stack.src} alt={stack.title} title={stack.title} className="h-8 w-8 rounded" />
        ))}
      </div>
    </div>
  )
}
