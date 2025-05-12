'use client'

import { ProjectFinance, ProjectContainer } from "./components/Projects/ProjectContainer";
import { SkillContainer } from "./components/SkillsContainer/SkillContainer";
import { BtnContact } from "./components/btnContact/BtnContact";
import { Navbar } from "./components/navbar";
import { MotionBox, MotionText, MotionTextStaggered } from "./components/Motion/Motion";
import Image from "next/image";
import pontinhos from '../assets/pontinhos.png'
import projectProfileSyncImages from "@/assets/ProfileSync";
import { Swipe } from "./components/Swipe/Swipe";
import PaladarImages from "@/assets/Paladar-Divino";
import YoutubeCopyImages from "@/assets/YoutubeCopy";
import BackEndImages from "@/assets/Back-End";
import IconsImages from "@/assets/icons";

const projectProfileSync = [
  { id: '1', image: projectProfileSyncImages.img1 },
  { id: '2', image: projectProfileSyncImages.img2 },
  { id: '3', image: projectProfileSyncImages.img3 },
  { id: '4', image: projectProfileSyncImages.img4 }
]

const projectPaladar = [
  { id: '1', image: PaladarImages.Paladar1 },
  { id: '2', image: PaladarImages.Paladar2 },
  { id: '3', image: PaladarImages.Paladar10 },
  { id: '4', image: PaladarImages.Paladar3 },
  { id: '5', image: PaladarImages.Paladar4 },
  { id: '6', image: PaladarImages.Paladar5 },
  { id: '7', image: PaladarImages.Paladar6 },
  { id: '8', image: PaladarImages.Paladar7 },
  { id: '9', image: PaladarImages.Paladar8 },
  { id: '10', image: PaladarImages.Paladar9 },
]

const projectYoutubeCopy = [
  { id: '1', image: YoutubeCopyImages.img1 },
  { id: '2', image: YoutubeCopyImages.img2 },
  { id: '3', image: YoutubeCopyImages.img3 },
  { id: '4', image: YoutubeCopyImages.img4 }
]

const backEndAPI = [
  { id: 1, image: BackEndImages.img1 },
  { id: 2, image: BackEndImages.img2 },
  { id: 3, image: BackEndImages.img3 },
  { id: 4, image: BackEndImages.img4 },
  { id: 5, image: BackEndImages.img5 },
  { id: 6, image: BackEndImages.img6 },
  { id: 7, image: BackEndImages.img7 },
]

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
            <BtnContact logo={true} text="GitHub" link="https://github.com/GabsMarc" />
            <BtnContact logo={false} text="LinkedIn" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" />
          </div>

          <div className="flex justify-center mt-[40px] 
            sm:left-[330px] sm:top-[120px] sm:absolute
            md:left-[370px] 
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

          <div className="flex w-[340px] place-self-center mt-4
            sm:left-[330px] sm:top-[200px] sm:absolute sm:w-[300px]
            md:left-[370px] md:w-[380px]
            lg:w-[600px]
            xl:left-[470px]
            2xl:left-[670px] 2xl:mt-10 2xl:w-[1000px]
          ">
            <MotionTextStaggered
              transition={0.3} text="Oi, eu sou o Gabriel Marcucci, sou desenvolvedor WEB FullStack, gosto tanto da parte visual de uma aplicação web, quanto dos processos que o usuario não vê, e nesse site eu mostro um pouco do que eu já desenvolvi sozinho para estudo."
              style=" left-[30px] top-[540px] bg-[#000000ae] text-[14px] text-wrap rounded-[10px] 
                xl:text-[16px]
                2xl:text-[20px]
              "/>
          </div>




        </div>
      </div>


      <div className="mb-5 mt-[120px] flex flex-col place-items-center
        lg:flex-row lg:gap-5 lg:justify-center
        sm:mt-[100px]
        xl:mt-[180px]
        2xl:mt-[290px]
      ">
        <MotionBox transition={0.6}>
          <SkillContainer array={FrontEndSkills} />
        </MotionBox>

        <MotionBox transition={0.6}>
          <SkillContainer array={BackEndSkills} />
        </MotionBox>
      </div>


      <div className="flex flex-col place-items-center 
        
      ">

        <div className="w-[93%] mt-[100px]
          sm:w-[595px]
          md:w-[650px]
          lg:w-[830px]
          xl:w-[1230px]
          2xl:w-[1400px]
        ">

          <MotionBox transition={1.4}>
            <ProjectContainer
              title="Divino Hamburgueria"
              about="Site desenvolvido com foco no aprendizado de novas tecnologias do Front-End e principalmente no Back-End."
              techUsed={["React", "Typescript", "Node", "Express", "Styled-Component", "Axios", "Prisma", "MySQL"]}
              link="https://github.com/GabsMarc/PaladarDivino"
            >
              <Swipe content={projectPaladar} />
            </ProjectContainer>
          </MotionBox>

          <MotionBox transition={1.4}>
            <ProjectContainer
              title="ProfileSync"
              about="Projeto criado com o objetivo de desenvolver uma tela que armazene todos os links que eu achar necessário em um só lugar."
              techUsed={['Next', 'Typescript', 'Tailwind CSS']}
              link="https://github.com/GabsMarc/ProfileSync"
            >
              <Swipe content={projectProfileSync} />
            </ProjectContainer>
          </MotionBox>

          <MotionBox transition={1.4}>
            <ProjectContainer
              title="YoutubeCopy"
              about="Esse projeto foi criado com o objetivo de tentar recriar uma interface com o conhecimento que eu tinha até o momento do projeto."
              techUsed={['Next', 'Typescript', 'Tailwind CSS']}
              link="https://github.com/GabsMarc/YoutubeCopy"
            >
              <Swipe content={projectYoutubeCopy} />
            </ProjectContainer>
          </MotionBox>

          <MotionBox transition={1.4}>
            <ProjectContainer
              title="(Back-End) - Projeto API NODE"
              about="Projeto de Back-End completo, todo organizado e padronizado, com testes usando o Jest, Token de autorização para acesso as rotas e senhas de usuários criptografadas."
              techUsed={['NODE', 'Typescript', 'SQLite', 'KNEX', 'YUP', 'BCrypt.js', 'JWT', 'Jest', 'Express']}
              link="https://github.com/GabsMarc/Back-End-Projects/tree/main/API-Node-e-Typescript"
            >
              <Swipe content={backEndAPI} />
            </ProjectContainer>
          </MotionBox>

          <MotionBox transition={1.4}>
            <ProjectFinance />
          </MotionBox>




        </div>

      </div>



    </main >
  );
}
