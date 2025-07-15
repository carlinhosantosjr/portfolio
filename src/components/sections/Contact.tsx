import whatsAppIcon from '../../assets/whatsIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import outlookIcon from '../../assets/outlookIcon.png'

export function Contact() {
  return (
    <div className="flex flex-col w-[652px] bg-[var(--gray-400)] gap-3 mt-10">
      <div className="bg-[var(--gray-600)] h-10 content-center">
        <h3 className="text-[var(--fontcolor-white)] text-[1rem] pl-2.5">Contato</h3>
      </div>
      <div className="flex flex-col space-y-3 bg-[var(--gray-500)] m-3 text-[var(--fontcolor-white)] p-2 text-[1rem] gap-4">

        <a href="https://wa.me/5516991051414" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.02] hover:bg-[var(--gray-600)] rounded-lg p-2">
            <img className="h-15 pr-2 rounded-bl-lg" src={whatsAppIcon} alt="Whatsapp" />
            <span>Whatsapp:</span>
            <span className="text-[var(--fontcolor-lightgray)] ml-1.5">(16) 99105-1414</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/carlinhosantosjr" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.02] hover:bg-[var(--gray-600)] rounded-lg p-2">
            <img className="h-15 pr-2 rounded-bl-lg " src={linkedinIcon} alt="" />
            <span>Linkedin:</span>
            <span className="text-[var(--fontcolor-lightgray)] ml-1.5">https://www.linkedin.com/in/carlinhosantosjr
            </span>
          </div>
        </a>

        <a href="mailto:carlinhosantosjr@outlook.com">
          <div className="flex items-center transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.02] hover:bg-[var(--gray-600)] rounded-lg p-2">
            <img className="h-15 pr-2 rounded-bl-lg " src={outlookIcon} alt="" />
            <span>Email:</span>
            <span className="text-[var(--fontcolor-lightgray)] ml-1.5">carlinhosantosjr@outlook.com
            </span>
          </div>
        </a>

      </div>
    </div>
  )
}
