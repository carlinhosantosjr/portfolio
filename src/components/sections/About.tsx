export function About() {
  return (
    <div className="flex flex-col w-[652px] bg-[var(--gray-400)] gap-3">
      <div className="bg-[var(--gray-600)] h-10 content-center">
        <h3 className="text-[var(--fontcolor-white)] text-[1rem] pl-2.5">Sobre mim</h3>
      </div>
      <div className="flex flex-col space-y-3 bg-[var(--gray-500)] m-3 text-[var(--fontcolor-mediumgray)] transition-all duration-200 hover:text-[var(--fontcolor-lightgray)] p-2 text-[1rem] hover:bg-[var(--gray-600)]">
        <p>
          Formado em Ciência da Computação pela UNIFRAN, estou retomando minha atuação na área de tecnologia, com foco em desenvolvimento Front-end. Atualmente, estudo na Rocketseat, onde aprofundo meus conhecimentos em React, TypeScript e Next.js, com foco em boas práticas e desenvolvimento de projetos.
        </p>
        <p>
          Atuei por 8 anos como auxiliar em um escritório de advocacia, experiência que reforçou minha organização, responsabilidade e pontualidade. Também trabalhei como estagiário em Desenvolvimento Front-end, utilizando React.js com ferramentas como Git e Jira em projetos colaborativos.
          Nos últimos 4 anos, fui jogador profissional de poker, o que fortaleceu minha análise estratégica, resiliência e tomada de decisões sob pressão.
        </p>
        <p>
          Busco minha primeira oportunidade como desenvolvedor júnior, com o objetivo de contribuir com criatividade, comprometimento e foco na resolução de problemas.

        </p>
      </div>
    </div>
  )
}
