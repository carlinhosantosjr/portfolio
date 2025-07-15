import avatar from '../../assets/avatar.png'
import flag from '../../assets/flag.png'
import react from '../../assets/react-icon.png'

export function Header() {
  return (
    <div className="grid grid-cols-[auto_1fr_268px] max-w-5xl min-h-56 pt-2.5 pl-6 pr-6">
      <img
        src={avatar}
        alt="profile"
        className="max-w-40 border-1 border-[var(--background-darker)] rounded-sm"
      />

      <div className="pl-9 pr-4 ">
        <div className="flex">
          <h2 className="text-[var(--fontcolor-white)] text-2xl pb-1">
            carlinhosantosjr
          </h2>
        </div>

        <div className="flex text-[var(--fontcolor-lightgray)] text-[0.813rem] gap-0.5 ">
          <span className="pr-2 truncate">Carlos Antonio</span>
          <img
            src={flag}
            alt="brasil"
            className="max-w-4 max-h-3 self-center"
          />
          <span className=" ">Batatais, São Paulo, Brasil</span>
        </div>
      </div>

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
    </div>
  )
}
