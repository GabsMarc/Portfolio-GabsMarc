'use client'

import { SkillContainer } from "./components/SkillsContainer/SkillContainer";
import { BtnContact, ContactCircle } from "./components/btnContact/BtnContact";
import { Navbar } from "./components/navbar";
import { MotionBox, MotionTextStaggered } from "./components/Motion/Motion";
import Image from "next/image";
import pontinhos from '../assets/pontinhos.png'
import { SwipeContent } from "./components/Swipe/Swipe";

import IconsImages from "@/assets/icons";

const FrontEndSkills = [
  {
    id: 1,
    img: IconsImages.react.src,
    skill: 'React'
  },
  {
    id: 2,
    img: IconsImages.javascript.src,
    skill: 'Javascript'
  },
  {
    id: 3,
    img: IconsImages.typescript.src,
    skill: 'Typescript'
  },
  {
    id: 4,
    img: IconsImages.html.src,
    skill: 'HTML'
  },
  {
    id: 5,
    img: IconsImages.css.src,
    skill: 'CSS'
  },
  {
    id: 6,
    img: IconsImages.tailwind.src,
    skill: 'Tailwind CSS'
  },
  {
    id: 7,
    img: IconsImages.next.src,
    skill: 'Next.js'
  },
  {
    id: 8,
    img: IconsImages.axios.src,
    skill: 'Axios'
  },

]

const BackEndSkills = [
  {
    id: 1,
    img: IconsImages.node.src,
    skill: 'Node'
  },
  {
    id: 2,
    img: IconsImages.javascript.src,
    skill: 'Javascript'
  },
  {
    id: 3,
    img: IconsImages.typescript.src,
    skill: 'Typescript'
  },
  {
    id: 4,
    img: IconsImages.express.src,
    skill: 'Express'
  },
  {
    id: 5,
    img: IconsImages.prisma.src,
    skill: 'Prisma'
  },
  {
    id: 6,
    img: IconsImages.mysql.src,
    skill: 'MySQL'
  },
  {
    id: 7,
    img: IconsImages.sqlserver.src,
    skill: 'SQLServer'
  },
  {
    id: 8,
    img: IconsImages.insomnia.src,
    skill: 'Insomnia'
  },

]

export default function Home() {
  return (
    <main className="">

      <div className="h-[900px] lg:h-[1000px]">

        <Navbar.Root>
          <Navbar.Logo text="<Gabs DEV/>" />
        </Navbar.Root>

        <Image
          src={pontinhos}
          alt=""
          width={0}
          height={0}
          className="w-[450px] h-[100%] invert absolute
            sm:w-[500px] sm:h-[100%]
            md:w-[600px] md:h-[100%]
            lg:w-[700px] lg:h-[1000px]
            xl:w-[900px] xl:h-[1100px]
            2xl:w-[1000px] 2xl:h-[1200px]
          
          "/>
        <div className="relative">

          <div>
            <div className="bg-[url('../assets/ft.jpg')] w-[220px] h-[220px] m-auto mt-10 bg-cover bg-no-repeat rounded-full border-4 border-purple-900
              sm:left-[70px] sm:absolute sm:mt-[100px]
              xl:left-[130px] xl:w-[250px] xl:h-[250px]
              2xl:left-[130px] 2xl:w-[320px] 2xl:h-[320px]
            ">
            </div>
          </div>

          <div className="flex gap-2 m-auto flex-row mt-5 justify-center 
            sm:left-[60px] sm:top-[350px] sm:flex-row sm:absolute sm:m-0
            xl:left-[135px] xl:top-[370px]
            2xl:left-[160px] 2xl:top-[490px]
            "
          >
            <BtnContact text="Contate-me" link="https://github.com/GabsMarc" />
            <ContactCircle icon={IconsImages.github.src} link="https://github.com/GabsMarc" />
            <ContactCircle icon={IconsImages.linkedinCircle.src} link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>

          <div className="flex justify-center mt-[40px] font-bold
            sm:left-[330px] sm:top-[120px] sm:absolute
            md:left-[360px] 
            xl:left-[470px]
            2xl:left-[670px]
          ">
            <MotionTextStaggered
              transition={0.8}
              position={200}
              text="Desenvolvedor WEB"
              style="left-[30px] top-[500px] bg-[#000000ae] text-[24px] text-nowrap rounded-[10px] 
                xl:text-[28px]
                2xl:text-[35px]
              "/>
          </div>

          <div className="flex w-[340px] place-self-center mt-4 text-center
            sm:left-[330px] sm:top-[200px] sm:absolute sm:w-[300px]
            md:left-[360px] md:w-[380px] md:text-left
            lg:w-[600px]
            xl:left-[470px]
            2xl:left-[670px] 2xl:mt-10 2xl:w-[1000px]
          ">
            <MotionTextStaggered
              transition={0.3} text="Oi, eu sou o Gabriel Marcucci, sou desenvolvedor WEB FullStack, gosto tanto da parte visual de uma aplicação web, quanto dos processos que o usuário não vê, e nesse site eu mostro um pouco do que eu já desenvolvi sozinho para estudo."
              style=" left-[30px] top-[540px] bg-[#000000ae] text-[14px] text-wrap rounded-[10px]
                xl:text-[16px]
                2xl:text-[20px]
              "/>
          </div>




        </div>
      </div>


      <div className="w-[100%] flex flex-col mt-[100px]
        sm:mt-[100px]
        xl:mt-[180px]
        2xl:mt-[290px]
      ">

        <div className="flex-1 ">
          <h2 className="py-3 font-medium text-[24px] text-center ">
            Meus conhecimentos
          </h2>
        </div>

        <div className="flex-1 mb-5 flex flex-col place-items-center
          lg:flex-row lg:gap-5 lg:justify-center">
          <MotionBox transition={0.6}>
            <SkillContainer array={FrontEndSkills} title="Front-End" />
          </MotionBox>

          <MotionBox transition={0.6}>
            <SkillContainer array={BackEndSkills} title="Back-End" />
          </MotionBox>
        </div>

      </div>



      <div className="flex flex-col place-items-center 
        
      ">

        <div className="w-[93%] mt-[100px]
          sm:w-[595px]
          md:w-[650px]
          lg:w-[830px]
          xl:w-[1200px]
          2xl:w-[1400px]
        ">
          <h2 className="py-3 font-medium text-[24px] text-center">
            Meus Projetos
          </h2>
          <SwipeContent />

        </div>

      </div>


      <footer className="w-full h-[120px] mt-[100px] bg-[#180b2881] flex">

        <div className="flex-1 content-center">
          <h1 className=" text-[25px] pl-[30px] bg-gradient-to-r from-white via-purple-90000 to-purple-900 text-transparent bg-clip-text">
            {"<Gabs DEV/>"}
          </h1>
        </div>

        <div className=" content-center">
          <div className="flex gap-2 px-10 flex-row justify-center">
            <ContactCircle color="#3c07648b" icon={IconsImages.github.src} link="https://github.com/GabsMarc" />
            <ContactCircle color="#3c07648b" icon={IconsImages.linkedinCircle.src} link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>
        </div>

      </footer>


    </main >
  );
}
