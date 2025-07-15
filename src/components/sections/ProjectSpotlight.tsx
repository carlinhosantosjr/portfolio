export function ProjectSpotlight() {
  return (
    <div className="flex flex-col w-[652px] bg-[var(--gray-400)] gap-3 mt-10">
      <div className="bg-[var(--gray-600)] h-10 content-center">
        <h3 className="text-[var(--fontcolor-white)] text-[1rem] pl-2.5">Projetos</h3>
      </div>
      <div className="flex space-y-3 bg-[var(--gray-500)] m-3 text-[var(--fontcolor-mediumgray)] p-2 text-[1rem] text-center">
        <div className="flex flex-col flex-1">
          <span className="text-[var(--fontcolor-white)]">Total de projetos</span>
          <span>3</span>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-[var(--fontcolor-white)]">Em desenvolvimento</span>
          <span>3</span>
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-[var(--fontcolor-white)]">Finalizados</span>
          <span>3</span>
        </div>
      </div>
    </div>
  )
}
