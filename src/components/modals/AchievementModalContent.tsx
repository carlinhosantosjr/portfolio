export interface AchievementModalContentProps {
  title: string
  imageSrc: string
  description: string
  certificateLink: string
}

export function AchievementModalContent({ title, description, imageSrc, certificateLink }: AchievementModalContentProps) {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-lg">
      <div className="flex items-center ">
        <img src={imageSrc} alt={title} className="w-16 h-16 mr-3 rounded-bl-xl" />
        <h2 className="flex text-xl font-bold">{title}</h2>
      </div>

      <div>
        <p className="text-md text-left">{description}</p>
      </div>

      <a
        className="px-5 py-2 mt-4 bg-[var(--gray-600)] text-[var(--fontcolor-white)] rounded-lg shadow-md hover:bg-[var(--gray-300)] transition-colors duration-100 cursor-pointer w-1/2 m-auto text-center"
        href={certificateLink} target="_blank" rel="noopener noreferrer"
      >
        Ver certificado
      </a>
    </div>
  )
}
