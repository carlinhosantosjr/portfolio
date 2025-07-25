import avatar from '../../assets/avatar.png'
import flag from '../../assets/flag.png'
import { BadgeLevel } from '../ui/BadgeLevel'

export function Header() {
  return (
    <div className="grid grid-cols-[auto_1fr_min-content] screen820:grid-cols-[auto_1fr_268px] max-w-5xl min-h-56 pt-2.5 pl-6 pr-6">
      <img
        src={avatar}
        alt="profile"
        className="min-w-[120px] screen420:max-w-40 border-1 border-[var(--background-darker)] rounded-sm"
      />

      <div className="screen420:pl-9 pl-4 pr-4">
        <div className="flex">
          <h2 className="text-[var(--fontcolor-white)] text-2xl pb-1">
            carlinhosantosjr
          </h2>
        </div>

        <div className="flex text-[var(--fontcolor-lightgray)] text-[0.813rem] gap-0.5 flex-col screen550:flex-row ">
          <span className="pr-2 truncate">Carlos Antonio</span>
          <div className="flex">
            <img
              src={flag}
              alt="brasil"
              className="max-w-4 max-h-3 self-center"
            />
            <span className=" ">Batatais, São Paulo, Brasil</span>
          </div>
        </div>
      </div>

      <div className="hidden screen820:block">
        <BadgeLevel isMobile={false} />
      </div>

    </div>
  )
}
