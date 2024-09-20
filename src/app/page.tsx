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

      <div className="h-[700px] lg:h-[1000px]">

        <Navbar.Root>
          <Navbar.Logo text="<Gabs DEV/>" />
        </Navbar.Root>

        <div className="bg-[url('../assets/pontinhos.png')] invert bg-contain bg-no-repeat sm:w-[900px] sm:h-[720px] lg:w-[800px] lg:h-[1000px] absolute top-12 lg:top-6" />
    
        <div>

          <div>
            <div className="bg-[url('../assets/ft.jpg')] w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-cover bg-no-repeat rounded-full absolute left-[20px] top-[180px] sm:left-[70px] lg:left-[450px] lg:top-72 border-4 border-purple-900 " />
          </div>

          <MotionText transition={0.8} position={200} text="Desenvolvedor WEB" style="absolute left-[30px] top-[430px] sm:left-[360px] sm:top-[260px] md:left-[400px] md:top-80 lg:left-[900px] lg:top-80 text-[24px] lg:text-[50px] text-nowrap" />

          <div className="w-[400px] lg:w-[550px] absolute left-[30px] sm:left-[360px] sm:top-[320px] md:left-[400px] md:top-[370px] lg:left-[900px] lg:top-[400px] top-[470px]">
            <MotionTextStaggered transition={0.3} text="Oi, eu sou o Gabriel Marcucci, sou desenvolvedor WEB/Mobile e este é o meu portifólio 😉👇" style="text-[14px] lg:text-2xl text-wrap " />
          </div>


          <div className="flex gap-5 absolute flex-col sm:flex-row left-[280px] top-[240px] sm:left-[50px] sm:top-[420px] md:left-[100px] md:top-[500px] lg:left-[503px] lg:top-[680px]">
            <BtnContact logo={true} text="GitHub" link="https://github.com/GabsMarc" />
            <BtnContact logo={false} text="LinkedIn" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>

        </div>
      </div>

      <div className="w-[90%] p-[10px] gap-5 bg-opacity-40 rounded-2xl m-auto my-[90px] border-white border-[1px] grid lg:grid-cols-3 lg:grid-rows-2 ">
        
        <div className="col-start-1 row-start-1 lg:row-start-1 ">
          <MotionBox transition={0.6}>
            <FrontSkills />
          </MotionBox>
        </div>

        <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 ">
          <MotionBox transition={0.8}>
            <BackSkills />
          </MotionBox>
        </div>

        <div className="col-start-1 row-start-3 lg:col-start-1 lg:col-span-2 lg:row-start-2">
          <MotionBox transition={1.2}>
            <ContactContainer />
          </MotionBox>
        </div>

        <div className="col-start-1 row-start-4 lg:col-start-3 lg:row-span-2">
          <MotionBox transition={1.4} whileHover={1}>
            <ProjectContainer />
          </MotionBox>
        </div>

      </div>


    </main>
  );
}
