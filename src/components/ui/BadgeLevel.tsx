import react from '../../assets/stacks/iconReact.png'

interface BadgeLevelProps {
  isMobile?: boolean
}

export function BadgeLevel({ isMobile }:BadgeLevelProps) {
  return (
    <>
      {isMobile
        ? (
          <div className="flex gap-3 max-w-[652px] w-12/12 h-[70px] flex bg-[var(--gray-500)] gap-2 text-[var(--fontcolor-white)] items-center pl-2 rounded-sm shadow-black shadow-xs mb-3 justify-between">
            <div className="flex text-center gap-1.5 ml-8">
              <h2 className="text-2xl text-[var(--fontcolor-white)] flex">Nível</h2>
              <span
                className="border-2 rounded-full w-7.5 h-7.5 border-blue-500 self-center
           text-[var(--fontcolor-white)]"
              >JR
              </span>
            </div>

            <div className="flex items-center gap-2 mr-8">
              <img src={react} alt="react-icon" className="h-[54px] w-[54px] rounded-xl shadow-black shadow-m" />
              <div className="flex flex-col">
                <span className="text-sm">React</span>
                <span className="text-xs text-[var(--fontcolor-lightgray)]">100 xp</span>
              </div>
            </div>
          </div>
          )
        : (
          <div className="flex flex-col gap-3">
            <div className="flex text-center gap-1.5">
              <h2 className="text-2xl text-[var(--fontcolor-white)] flex">Nível</h2>
              <span
                className="border-2 rounded-full w-7.5 h-7.5 border-blue-500 self-center
           text-[var(--fontcolor-white)]"
              >JR
              </span>
            </div>

            <div className="flex  h-[70px] bg-[var(--gray-500)] gap-2 text-[var(--fontcolor-white)] items-center pl-2 rounded-sm shadow-black shadow-xs">
              <img src={react} alt="react-icon" className="h-[54px] w-[54px] rounded-xl shadow-black shadow-m" />
              <div className="flex flex-col">
                <span className="text-sm">React</span>
                <span className="text-xs text-[var(--fontcolor-lightgray)]">100 xp</span>
              </div>
            </div>
          </div>
          )}
    </>
  )
}
