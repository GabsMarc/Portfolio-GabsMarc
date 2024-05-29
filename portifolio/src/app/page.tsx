import { ProjectContainer } from "./components/Projects/ProjectContainer";
import { BackSkills } from "./components/SkillsContainer/BackSkills";
import { FrontSkills } from "./components/SkillsContainer/FrontSkills";
import { BtnContact } from "./components/btnContact/BtnContact";
import { ContactContainer } from "./components/contact/ContactContainer";
import { Navbar } from "./components/navbar";


export default function Home() {
  return (
    <main className="mb-10">

      <Navbar.Root>
        <Navbar.Logo text="<Gabs DEV/>" />
        <Navbar.Span text="Conteúdo" />
      </Navbar.Root>

      <div>
        <div className=" bg-[url('../images/dots.png')] invert bg-cover bg-no-repeat w-[700px] h-[900px]" />
        <div>
          <div>
            <div className=" bg-[url('../images/ft.jpg')] w-[350px] h-[350px] bg-cover bg-no-repeat rounded-full absolute left-[450px] top-72 border-4 border-purple-900 " />
          </div>
          <h2 className="absolute left-[900px] top-80 text-[50px] text-nowrap">Desenvolvedor WEB</h2>
          <div>
            <p className="absolute left-[900px] top-[400px] text-2xl text-nowrap">Oi, eu sou o </p>
            <p className="absolute left-[1040px] top-[400px] text-2xl text-purple-900 text-nowrap">Gabriel Marcucci</p>
            <p className="absolute left-[950px] top-[430px] text-2xl text-nowrap">e este é meu portifólio 😉👇</p>
          </div>
          <div className="flex gap-5 absolute left-[503px] top-[680px]">
            <BtnContact logo={true} text="GitHub" link="https://github.com/GabsMarc" />
            <BtnContact logo={false} text="LinkedIn" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>
        </div>
      </div>

      <div className="w-[90%] h-[850px] bg-opacity-40 rounded-2xl m-auto my-[90px] border-white border-[1px] p-5
      grid grid-cols-3 grid-rows-2 gap-10
      ">
        
        <div className="col-start-1 ">
          <FrontSkills />
        </div>

        <div className="col-start-2 ">
          <BackSkills />
        </div>

        <div className="col-start-3 row-span-2 ">
          <ProjectContainer />
        </div>

        <div className="row-start-2 col-span-2">
          <ContactContainer />
        </div>
      </div>

    </main>
  );
}
