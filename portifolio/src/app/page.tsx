'use client'

import { ProjectContainer } from "./components/Projects/ProjectContainer";
import { BackSkills } from "./components/SkillsContainer/BackSkills";
import { FrontSkills } from "./components/SkillsContainer/FrontSkills";
import { BtnContact } from "./components/btnContact/BtnContact";
import { ContactContainer } from "./components/contact/ContactContainer";
import { Navbar } from "./components/navbar";
import { MotionBox, MotionText, MotionTextStaggered } from "./components/Motion/Motion";


export default function Home() {
  return (
    <main className="mb-10">

      <Navbar.Root>
          <Navbar.Logo text="<Gabs DEV/>" />
        <Navbar.Span text="Conteúdo" />
      </Navbar.Root>

      <div>
        <div className=" bg-[url('../assets/dots.png')] invert bg-cover bg-no-repeat w-[700px] h-[900px]" />
        <div>

          <div>
            <div className=" bg-[url('../assets/ft.jpg')] w-[350px] h-[350px] bg-cover bg-no-repeat rounded-full absolute left-[450px] top-72 border-4 border-purple-900 " />
          </div>

          <MotionText transition={0.8} position={200} text="Desenvolvedor WEB" style="absolute left-[900px] top-80 text-[50px] text-nowrap" />

          <div className="w-[550px] absolute left-[920px] top-[400px]">
            <MotionTextStaggered transition={0.3} text="Oi, eu sou o Gabriel Marcucci, sou desenvolvedor WEB/Mobile e este é o meu portifólio 😉👇" style=" text-2xl text-wrap " />
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
          <MotionBox transition={0.6}>
            <FrontSkills />
          </MotionBox>
        </div>

        <div className="col-start-2 ">
          <MotionBox transition={0.8}>
            <BackSkills />
          </MotionBox>
        </div>

        <div className="row-start-2 col-span-2">
          <MotionBox transition={1.2}>
            <ContactContainer />
          </MotionBox>
        </div>

        <div className="col-start-3 row-span-2 ">
          <MotionBox transition={1.4}>
            <ProjectContainer />
          </MotionBox>
        </div>

      </div>


    </main>
  );
}
