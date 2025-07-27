import type React from 'react'
import { projects } from '../../data/mockedData'
import { ProjectCard } from '../ui/ProjectCard'
import { ProjectModalContent, type ProjectModalProps } from '../modals/ProjectModalContent'

interface ProjectSpotlightProps {
  openModal: (content: React.ReactNode) => void
}

export function ProjectSpotlight({ openModal }: ProjectSpotlightProps) {
  function handleOPenModal(project: ProjectModalProps) {
    openModal(<ProjectModalContent {...project} />)
  }
  return (
    <div id="projectSpotlightSection" className="flex flex-col screen650:w-[652px] bg-[var(--gray-400)] gap-3 mt-10 ">
      <div className="bg-[var(--gray-600)] h-10 content-center ">
        <h3 className="text-[var(--fontcolor-white)] text-[1rem] pl-2.5">Projetos</h3>
      </div>
      <div className="flex flex-col gap-8 m-3 text-[var(--fontcolor-mediumgray)] p-2 text-[1rem] text-center ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imagePreviewSrc={project.imagePreviewSrc}
            title={project.title}
            shortDescription={project.shortDescription}
            stacksProject={project.stacksProject}
            onClick={() => handleOPenModal(project)}
          />
        ))}

      </div>
    </div>
  )
}
