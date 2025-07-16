import { achievements } from '../../data/mockedData'

export function Achievements() {
  return (
    <div id="achievementsSection" className="flex flex-col w-[652px] bg-[var(--gray-400)] gap-3 mt-10">
      <div className="bg-[var(--gray-600)] h-10 content-center">
        <h3 className="text-[var(--fontcolor-white)] text-[1rem] pl-2.5">Conquistas</h3>
      </div>
      <div className="flex space-y-3 bg-[var(--gray-500)] m-3 text-[var(--fontcolor-mediumgray)] p-2 text-[1rem] text-center">
        <div className="flex flex-1 p-4 gap-2 justify-between">
          {achievements.map((icon, index) => (
            <img
              className="pl-1 pr-1 h-20 w-22 rounded-bl-lg transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.15]"
              title={icon.title}
              src={icon.src}
              alt={icon.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
