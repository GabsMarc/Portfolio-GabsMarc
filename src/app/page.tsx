'use client'

import { ProjectFinance, ProjectPaladar, ProjectYoutubeCopy } from "./components/Projects/ProjectContainer";
import { BackSkills } from "./components/SkillsContainer/BackSkills";
import { FrontSkills } from "./components/SkillsContainer/FrontSkills";
import { BtnContact } from "./components/btnContact/BtnContact";
import { ContactContainer } from "./components/contact/ContactContainer";
import { Navbar } from "./components/navbar";
import { MotionBox, MotionText, MotionTextStaggered } from "./components/Motion/Motion";
import Image from "next/image";
import pontinhos from '../assets/pontinhos.png'


export default function Home() {
  return (
    <main className="mb-10">

      <div className="h-[900px] lg:h-[1000px]">

        <Navbar.Root>
          <Navbar.Logo text="<Gabs DEV/>" />

        </Navbar.Root>

        <Image
          src={pontinhos}
          alt=""
          width={0}
          height={0}
          className="w-[100%] h-[100%] invert "
        />
        <div>

          <div>
            <div className="bg-[url('../assets/ft.jpg')] w-[220px] h-[220px] bg-cover bg-no-repeat rounded-full absolute left-[20px] top-[180px]
            md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] sm:left-[70px] lg:left-[450px] lg:top-72 border-4 border-purple-900 " />
          </div>


          <MotionText
            transition={0.8}
            position={200}
            text="Desenvolvedor WEB"
            style="absolute left-[30px] top-[430px] bg-black text-[24px] text-nowrap px-2 rounded-[10px] 
            sm:left-[360px] sm:top-[260px] md:left-[400px] md:top-80 lg:left-[900px] lg:top-80 lg:text-[50px]" />


          <div className="w-[400px] lg:w-[550px] absolute left-[30px] top-[470px] bg-black px-1 rounded-[10px]
          sm:left-[360px] sm:top-[320px] md:left-[400px] md:top-[370px] lg:left-[900px] lg:top-[400px] ">
            <MotionTextStaggered transition={0.3} text="Oi, eu sou o Gabriel Marcucci, sou desenvolvedor WEB/Mobile e este é o meu portifólio." style="text-[14px] lg:text-2xl text-wrap " />
          </div>


          <div className="flex gap-5 absolute flex-col sm:flex-row left-[280px] top-[240px] sm:left-[50px] sm:top-[420px] md:left-[100px] md:top-[500px] lg:left-[503px] lg:top-[680px]">
            <BtnContact logo={true} text="GitHub" link="https://github.com/GabsMarc" />
            <BtnContact logo={false} text="LinkedIn" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>

        </div>
      </div>


      <div className="mt-[40px] flex flex-col place-items-center ">

        <div className="w-[93%] mb-5">
          <MotionBox transition={0.6}>
            <FrontSkills />
          </MotionBox>

          <MotionBox transition={0.8}>
            <BackSkills />
          </MotionBox>
        </div>


        <div className="w-[93%] mt-[100px]">
          <MotionBox transition={1.4} whileHover={1}>
            <ProjectPaladar />
          </MotionBox>

          <MotionBox transition={1.4} whileHover={1}>
            <ProjectFinance />
          </MotionBox>

          <MotionBox transition={1.4} whileHover={1}>
            <ProjectYoutubeCopy />
          </MotionBox>
        </div>

      </div>



    </main>
  );
}
