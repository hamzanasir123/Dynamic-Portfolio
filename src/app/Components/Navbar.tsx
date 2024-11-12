"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const projects = [
  { id: 1, title: 'Initial Portfolio', img : 'https://i.pinimg.com/236x/b8/33/1e/b8331ed0fdac3f2aa57a0aeda171295d.jpg' , link: 'https://hamzanasir123portfolio.vercel.app/', msg: 'This Portfolio project is a personal website developed using pure HTML, CSS, and TypeScript. It serves as a showcase for my skills, projects, and professional background, featuring an elegant and responsive design. The project emphasizes clean code practices with TypeScript, ensuring type safety and robust functionality. ' },
  { id: 2, title: 'Resume Builder', img : 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg' , link: 'https://hackathon-1-beta-drab.vercel.app/', msg: 'The Resume Builder project is a web application built with HTML, CSS, and TypeScript, designed to help users create polished resumes easily. The application provides a user-friendly interface where users can input their details, such as personal information, education, work experience, and skills, which are then formatted into a structured resume layout.' },
  { id: 3, title: 'Colour Picker', img: 'https://i.pinimg.com/736x/98/be/da/98beda8fb6b9d1bf3c81d150421a7ac8.jpg' , link: 'https://colours-rosy.vercel.app/', msg: 'The Color Picker project is a simple, interactive tool built with pure HTML, CSS, and TypeScript. It allows users to choose a color from a color palette, displaying the selected color in real-time along with its corresponding hex code. The hex code can then be copied with a single click, making it easy for users to use the exact color in other projects' },
  { id: 4, title: 'Possword Generator', img: 'https://i.pinimg.com/736x/a6/59/a3/a659a35a870f8cc0ad564780024711e8.jpg' , link: 'https://possword-generator.vercel.app/', msg: 'The Password Generator project is a simple web tool created using HTML, CSS, and TypeScript. This tool allows users to generate secure passwords tailored to their needs. Users can specify password length (from 8 to 100 characters) and include options for numbers, uppercase letters, and special characters. ' },
  { id: 5, title: 'Currency Converter', img: 'https://i.pinimg.com/736x/03/b7/55/03b7554cb30c285891ffbc7f80ba8462.jpg' , link: 'https://currency-converter-seven-self.vercel.app/', msg: 'The Currency Converter is a simple, user-friendly web app built with HTML, CSS, and TypeScript. This tool allows users to convert between different currencies instantly using real-time exchange rates. The app features a clean and intuitive interface, where users can select their input and output currencies and enter an amount for conversion.' },
  { id: 6, title: 'UI Ecommerce', img: 'https://i.pinimg.com/736x/5f/08/ac/5f08ac7ecd9cf158bdcd43085837f41f.jpg' , link: 'https://manzeil.vercel.app/', msg: 'The Ecommerce UI project is a user interface for an online store, built entirely with React.js. It includes a modern layout, showcasing products in an organized and visually appealing way. The UI features components for product listings, product details, a shopping cart, and a checkout page. State management is handled locally, ensuring smooth interactions like adding items to the cart.' },
  { id: 7, title: 'Tic-Tac-Toe', img: 'https://i.pinimg.com/736x/cd/de/a3/cddea39b17378d5fc6eae06d00c6738d.jpg' , link: 'https://tic-tac-toe-six-lovat-56.vercel.app/', msg: 'This is a simple implementation of the classic Tic-Tac-Toe game built using pure HTML, CSS, and TypeScript. The game allows two players to take turns placing X and O on a 3x3 grid. The objective is to get three of the same symbols in a row, column, or diagonal to win. The project showcases interactive UI elements, smooth gameplay logic, and uses TypeScript for managing the game state and player turns.' },
  { id: 8, title: 'Rock-Paper-Scissor', img: 'https://i.pinimg.com/736x/41/a9/8f/41a98fb3cef655eb56658464a4112f15.jpg' , link: 'https://rock-paper-scissor-five-rust.vercel.app/', msg: 'This project is a simple implementation of the classic Rock-Paper-Scissors game using pure HTML, CSS, and TypeScript. The game allows users to play against the computer by selecting one of three options: Rock, Paper, or Scissors. The game logic is handled with TypeScript, where it randomly generates the computer s choice and compares it to the user is selection to determine the winner.' },
];

const assignments = [
  { id: 1, title: 'Assignment 1', img : 'https://i.pinimg.com/736x/6d/3d/44/6d3d44a710fdc4682907bf295eedaf8d.jpg' , link: 'https://class01-assignment.vercel.app/', msg: 'For this assignment, I created a simple "Hello World" application using Next.js, showcasing the basic functionality and routing of this powerful React framework. The project demonstrates how to set up a Next.js environment, create a page component, and render dynamic content. The "Hello World" message is displayed on the home page, ' },
  { id: 2, title: 'Assignment 2', img : 'https://i.pinimg.com/736x/b2/f7/e6/b2f7e662bd33ecacd886f410bd516f86.jpg' , link: 'https://class02-assignment.vercel.app/', msg: 'In this assignment, I developed a three-page website using pure Next.js, which includes a Home, About, and Contact page. Each page is created with simple, efficient components that demonstrate Next.jss power and flexibility.' },
  { id: 3, title: 'Assignment 3', img : 'https://i.pinimg.com/736x/e8/07/10/e80710011bee126be441233d968ceb51.jpg' , link: 'https://class03-assignment-silk.vercel.app/', msg: 'This project demonstrates the creation of a simple Next.js application consisting of three components: Home, About, and Contact. The application is built using only Next.js, without additional libraries or frameworks.' },
  { id: 4, title: 'Assignment 4', img : 'https://i.pinimg.com/236x/0e/b0/ac/0eb0acafd3ee2f0d51b86a0c62c0b05f.jpg' , link: '/Next.pptx', msg: 'For this assignment, I created a detailed PowerPoint presentation on NEXTjs. The slides were designed to clearly communicate key concepts, backed by engaging visuals and concise content. Click the image to download the presentation and explore the work I put into it.' },
  { id: 5, title: 'Assignment 5', img : 'https://i.pinimg.com/236x/81/a1/35/81a135f4fe8b4d292e405d6825a56db0.jpg' , link: 'https://class05-assignment-two.vercel.app/', msg: 'For Class Assignment 5, I created a three-page website based on a Figma design, integrating images as per the design specifications. The project involved translating the design into functional web pages using NEXTjs. I ensured that the layout, typography, and color scheme matched the original Figma design while also optimizing the images for performance and responsiveness across different screen sizes.' },
];

const milestones = [
  { id: 1, title: 'Milestone 1', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone01-black.vercel.app/', msg: 'In Milestone 1, I successfully set up my first Next.js project and created a simple "Hello World" page. This milestone helped me get acquainted with the basic structure of a Next.js application, including its file system-based routing and rendering features. I learned how to create pages, work with the default pages/index.js file, and set up a development environment.' },
  { id: 2, title: 'Milestone 2 Assignment with CSS', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-assignment-with-css.vercel.app/' , msg: 'For Class Milestone 2, the assignment involves building a simple multi-page website using React components. The goal is to create a structured website with at least two pages, where each page is a separate React component. You will apply custom CSS to style the website, ensuring it looks polished and professional. Additionally, the website should be responsive, meaning it will adapt and look good on various screen sizes, such as desktops, tablets, and mobile devices.'},
  { id: 3, title: 'Milestone 2 Assignment with Tailwind', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-assignment-with-tailwind.vercel.app/', msg : 'For this assignment, I built a simple, responsive multi-page website using React components. Each page was structured using React Router to allow seamless navigation between them. To ensure a smooth and consistent design across all pages, I applied Tailwind CSS, leveraging its utility-first classes to style the elements. The website was optimized for responsiveness, ' },
  { id: 4, title: 'Milestone 2 Project with CSS', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-project-with-css.vercel.app/', msg: 'Milestone 2 focuses on the development of a personal portfolio website, featuring a Home, About, and Contact page. The project involves designing a custom layout using CSS to create an intuitive and visually appealing user experience. Each page is styled with unique designs that reflect the users personal brand, while ensuring consistency across the site. ' },
  { id: 5, title: 'Milestone 2 Project with Tailwind', img : 'https://i.pinimg.com/736x/1e/6c/30/1e6c30eb67af7eb04da5eee429d80de3.jpg' , link: 'https://milestone02-vert.vercel.app/', msg: 'For Milestone 2, I designed and developed a personal portfolio website using Tailwind CSS. The project features a clean and responsive layout with three pages: Home, About, and Contact. The Home page introduces myself, highlighting key skills and accomplishments. The About page gives a deeper insight into my background,' },
];

const uiux = [
  { id: 1, title: 'Positivus', img : 'https://i.pinimg.com/736x/82/7f/8c/827f8c8170a5842d2560da75249117af.jpg' , link: 'https://positivus-lime.vercel.app/', msg: 'I created a website called Positivus, where I designed both the UI and UX to provide a seamless and engaging experience for users. Using Next.js, I built a fast and responsive platform with optimized performance and dynamic content. The design focuses on clean aesthetics, easy navigation, and user-friendly interactions.' },
];


const Poppin = Poppins({ weight: "400", subsets: ["latin"] });

function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
   const [active, setActive] = useState('Projects')
  return (
    <>
      <div className="h-[80px] sm:w-[400px] mb-4 bg-[#F2F7FC] rounded-[20px] border-[#E1E8EF] border-2 sm:ml-[460px]">
        <div className="sm:w-[440px] h-[80px] sm:mx-6 mx-3 my-3">
          <div className="flex flex-wrap gap-12">
            <button
              onClick={() => {
                setActiveTab("Home");
              }}
              className={`h-[50px] rounded-[10px] w-[50px]  ${
                activeTab === "Home"
                  ? "bg-gradient-to-r from-[#FF9C1A] to-[#E80505]"
                  : ""
              }`}
            >
              <Image
                src={"/ic_outline-home.png"}
                alt="Home"
                height={44}
                width={35}
                className="pl-3"
              />
              <p className="text-xs">Home</p>
            </button>
            <button
              onClick={() => {
                setActiveTab("Resume");
              }}
              className={`h-[50px] rounded-[10px] w-[50px] ${
                activeTab === "Resume"
                  ? "bg-gradient-to-r from-[#FF9C1A] to-[#E80505]"
                  : ""
              } `}
            >
              <Image
                src={"/mi_document.png"}
                alt="Resume"
                height={40}
                width={35}
                className="pl-3"
              />
              <p className="text-xs">Resume</p>
            </button>
            <button
              onClick={() => {
                setActiveTab("Work");
              }}
              className={`h-[50px] rounded-[10px] w-[50px] ${
                activeTab === "Work"
                  ? "bg-gradient-to-r from-[#FF9C1A] to-[#E80505]"
                  : ""
              } `}
            >
              <Image
                src={"/material-symbols_work-outline.png"}
                alt="Work"
                height={44}
                width={35}
                className="pl-3"
              />
              <p className="text-xs">Work</p>
            </button>
            <button
              onClick={() => {
                setActiveTab("Contact");
              }}
              className={`h-[50px] rounded-[10px] w-[50px] ${
                activeTab === "Contact"
                  ? "bg-gradient-to-r from-[#FF9C1A] to-[#E80505]"
                  : ""
              } `}
            >
              <Image
                src={"/lucide_contact-round.png"}
                alt="Contact"
                height={44}
                width={35}
                className="pl-3"
              />
              <p className="text-xs">Contact</p>
            </button>
          </div>
        </div>
      </div>
      <div className=" sm:w-[860px] bg-white rounded-[20px]">
        <div className="sm:mx-20 my-10">
          {activeTab === 'Home' && (
            <div>
                <div className="flex flex-wrap">
               <p className={`${Poppin.className} ml-[100px] sm:ml-0 text-4xl`}>ABOUT ME</p>
               <p className="w-[352px] h-[2px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505] sm:m-5 m-3 "></p>
             </div>
             <div className="my-4 p-5 sm:p-0">
               <p className="text-center sm:text-left">
                 Hello there! I'm thrilled to welcome you to my portfolio. I am a
                 passionate and versatile full-stack developer with a keen interest
                 in exploring the latest cutting-edge technologies. My journey in
                 the world of web development has been nothing short of
                 exhilarating, and I constantly strive to enhance my skills and
                 embrace emerging trends in the industry.
               </p>
             </div>
             <p className={`${Poppin.className} text-4xl ml-[100px] sm:ml-0 my-5`}>What I do!</p>
             <div className="flex flex-wrap gap-8">
               <div className="sm:w-[333px] w-[300px] ml-10 sm:ml-0  bg-[#FFEBD1] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Vector (2).png"}
                     alt="Pic"
                     width={30}
                     height={28}
                     className="m-4"
                   />
                   <p className="p-3 font-bold text-xl">Web Development</p>
                   <p className="text-sm m-5">
                     As a developer, I find myself most captivated by the power and
                     flexibility of NEXT.js. I'm always eager to dive into new
                     projects that leverage NEXT.js and discover innovative ways to
                     create fast, scalable, and user-friendly applications.
                   </p>
                 </div>
               </div>
               <div className="sm:w-[333px] w-[300px] ml-10 sm:ml-0 bg-[#F2F7FC] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Vector (5).png"}
                     alt="Pic"
                     width={30}
                     height={28}
                     className="m-4"
                   />
                   <p className="p-3 font-bold text-xl">App Development</p>
                   <p className="text-sm m-5">
                     With a focus on user-centric design and cutting-edge
                     technologies, I thrive on building intuitive and efficient
                     apps that make a positive impact on people's lives. Let's turn
                     ideas into reality and shape the future together.
                   </p>
                 </div>
               </div>
               <div className="sm:w-[333px] w-[300px] ml-10 sm:ml-0  bg-[#F2F7FC] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Group.png"}
                     alt="Pic"
                     width={30}
                     height={28}
                     className="m-4"
                   />
                   <p className="p-3 font-bold text-xl">UI/UX Designing</p>
                   <p className="text-sm m-5">
                     Crafting visually appealing and intuitive user interfaces that
                     offer a delightful user experience is something I'm truly
                     fanatic about.
                   </p>
                 </div>
               </div>
               <div className="sm:w-[333px] w-[300px] ml-10 sm:ml-0  bg-[#FFEBD1] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Vector (3).png"}
                     alt="Pic"
                     width={30}
                     height={28}
                     className="m-4"
                   />
                   <p className="p-3 font-bold text-xl">Mentorship</p>
                   <p className="text-sm m-5">
                     I have also found great joy in sharing my knowledge with
                     others. Being a technical mentor allows me to give back to the
                     community that has supported me throughout my career.
                   </p>
                 </div>
               </div>
             </div>
            </div>
          )}
          {activeTab === 'Resume' && (
                 <div>
                <div className="flex flex-wrap">
               <p className={`${Poppin.className} ml-[120px] sm:ml-0  text-4xl`}>Resume</p>
               <p className="w-[352px] h-[2px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505] sm:m-5 m-3 "></p>
             </div>
             <div className="grid sm:grid-cols-2 mt-6">
              <div className="flex flex-wrap gap-3 p-5">
                <Image
                src={"/Hat.png"}
                alt="Pic"
                height={27}
                width={27}
                />
                <p className="text-xl">Education</p>
                <div className="p-5 text-left bg-[#FFEBD1] w-[300px] rounded-[20px]">
                  <p className="text-gray-400">2020-2021</p>
                   <p className=" font-bold text-md">Web Development</p>
                   <p className="text-sm ">
                     Governor House
                   </p>
                 </div>
                 <div className="p-5 text-left bg-[#FFEBD1] w-[300px] rounded-[20px]">
                  <p className="text-gray-400">2012-2016</p>
                   <p className=" font-bold text-md">Intermadiate</p>
                   <p className="text-sm ">
                     Nabi Bagh Z.M Collage
                   </p>
                 </div>
                 <div className="m-4">
                  <p className="text-2xl font-semibold">Work Skills</p>
                  <div className="mt-5 gap-3 flex flex-wrap">
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">NEXT.js</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">React.js</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">HTML 5</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">CSS 3</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Tailwind CSS</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Figma</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Typescript</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Javacript</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Git</p>
                 </div>
                 </div>
               </div>
               <div className="flex flex-wrap gap-3 p-5">
                <Image
                src={"/Ex.png"}
                alt="Pic"
                height={27}
                width={27}
                />
                <p className="text-xl">Experience</p>
                <div className="p-5 text-left bg-[#FFEBD1] w-[300px] rounded-[20px]">
                  <p className="text-gray-400">2024 - Present</p>
                   <p className=" font-bold text-md">Senior Student</p>
                   <p className="text-sm ">
                     Governor House
                   </p>
                 </div>
                 <div className="p-5 text-left bg-[#FFEBD1] w-[300px] rounded-[20px]">
                  <p className="text-gray-400">2023 - 2024</p>
                   <p className=" font-bold text-md">Hackathon/Projects</p>
                   <p className="text-sm ">
                     Resume Builder
                   </p>
                 </div>
                 <div className="m-4">
                  <p className="text-2xl font-semibold">Soft Skills</p>
                  <div className="mt-5 gap-3 flex flex-wrap">
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Time Management</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Mentorship</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Impeccable Communication</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Flexibility</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Research</p>
                  <p className="px-2 py-1 bg-[#E1E8EF] rounded-[8px]">Writing</p>
                 </div>
                 </div>
               </div>
              </div>
            </div>
          )}
          {activeTab === 'Contact' && (
            <div>
            <div className="flex flex-wrap">
           <p className={`${Poppin.className} ml-[110px] text-4xl`}>Contact</p>
           <p className="w-[352px] h-[2px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505] sm:m-5 m-3 "></p>
         </div>
         <div className="flex flex-wrap gap-4">
          <br/>
         <div className="w-[333px] mt-5  bg-[#FFEBD1] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Call.png"}
                     alt="Pic"
                     width={24}
                     height={24}
                     className="m-4 "
                   />
                   <p className="p-3 font-bold text-3xl">Phone :</p>
                   <p className="text-lg mx-5">
                     +923122449908
                   </p>
                   <p className="text-lg mx-5 my-2">
                     +923003572159
                   </p>
                 </div>
               </div>
               <div className="w-[333px] mt-5 ml-[20px]  sm:ml-[0]  bg-[#F2F7FC] rounded-2xl">
                 <div className="flex flex-wrap">
                   <Image
                     src={"/Email (2).png"}
                     alt="Pic"
                     width={24}
                     height={24}
                     className="m-4  "
                   />
                   <p className="p-3 font-bold text-3xl">Email :</p>
                   <p className="text-lg mx-10 my-5">
                     hk435981@gmail.com
                   </p>
                 </div>
               </div>
         </div>
         <br/>
         <div className="h-[392px] sm:w-[694px] bg-[#F8FBFB] rounded-[20px]">
              <p className="p-5">I am always open to discussing <b> new projects, opportunities in tech world,
              partnerships</b> and more so <b> mentorship.</b> </p>
              <form action="" method="POST">
              <div className="p-4">
              <label>Name :</label>
              <input type="text" className="w-[300px] ml-5 mb-5" required />
              <hr/>
              </div>
              <div className="p-4">
              <label>Email :</label>
              <input type="email" className="w-[300px] ml-5 mb-5"  required/>
              <hr/>
              </div>
              <div className="p-4">
              <label>Message :</label>
              <input type="text" className="w-[300px] ml-5 mb-5"  required/>
              <hr/>
              </div>
              <button type="submit" className="px-[30px] py-[10px] rounded-[20px] ml-6 sm:ml-0 bg-gradient-to-r from-[#FF9C1A] to-[#E80505]">Submit</button>
              </form>
         </div>
        </div>
          )}
          {activeTab === 'Work' && (
            <div>
            <div className="flex flex-wrap">
           <p className={`${Poppin.className} text-4xl ml-[60px] sm:ml-0`}>Latest Projects</p>
           <p className="w-[352px] h-[2px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505] sm:m-5 m-3 "></p>
         </div>
          <div className="text-center">
           <button onClick={() => setActive('Projects')} className={`font-semibold text-black px-[32px] py-[10px] rounded-[24px]  mt-[30px] ${active === 'Projects' ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white' : '' }`}>
                Projects
              </button>
              <button onClick={() => setActive('Assignments')} className={`font-semibold text-black px-[32px] py-[10px] rounded-[24px]  mt-[30px] ${active === 'Assignments' ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white' : '' }`}>
                Assignments
              </button>
              <button onClick={() => setActive('Milestones')} className={`font-semibold text-black px-[32px] py-[10px] rounded-[24px]  mt-[30px] ${active === 'Milestones' ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white' : '' }`}>
                Milestones
              </button>
              <button onClick={() => setActive('UI/UX')} className={`font-semibold px-[32px] text-black py-[10px] rounded-[24px]  mt-[30px] ${active === 'UI/UX' ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white' : '' }`}>
                UI/UX
              </button>
          </div>
          <div className="h-[500px] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200 ">
         {active === 'Projects' && projects.map((project) => 
            <div key={project.id} className="grid sm:grid-cols-3 sm:p-5 m-2 bg-[#FFEED9]  mt-[20px] rounded-2xl">
            <Link href={project.link ?? '/'} target="_blank" className="col-span-1">
            <Image
            src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
            alt="Project"
            height={158}
            width={206}
            className=" w-[190px] sm:w-[206px] ml-[85px] rounded-md m-4 sm:m-0"
            />
            </Link>
            <div className="col-span-2 sm:text-left text-center">
            <p className="felx-wrap m-4 sm:m-0  px-4 text-3xl  font-semibold">{project.title}</p>
            <p className="px-4 py-3 sm:py-0">{project.msg}</p>
            </div>
          </div>
         )}
         {active === 'Assignments' && assignments.map((project) => 
            <div key={project.id} className="grid sm:grid-cols-3 sm:p-5 m-2 bg-[#FFEED9] mt-[20px] rounded-2xl">
            <Link href={project.link ?? '/'} target="_blank" className="col-span-1">
            <Image
            src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
            alt="Project"
            height={158}
            width={206}
            className=" w-[190px] sm:w-[206px] ml-[85px] rounded-md m-4 sm:m-0"
            />
            </Link>
            <div className="col-span-2 sm:text-left text-center">
            <p className="felx-wrap m-4 sm:m-0  px-4 text-3xl  font-semibold">{project.title}</p>
            <p className="px-4 py-3 sm:py-0">{project.msg}</p>
            </div>
          </div>
         )}
         {active === 'Milestones' && milestones.map((project) => 
            <div key={project.id} className="grid sm:grid-cols-3 sm:p-5 bg-[#FFEED9] m-2 mt-[20px] rounded-2xl">
            <Link href={project.link ?? '/'} target="_blank" className="col-span-1">
            <Image
            src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
            alt="Project"
            height={158}
            width={206}
            className=" w-[190px] sm:w-[206px] ml-[85px]  rounded-md m-4 sm:m-0"
            />
            </Link>
            <div className="col-span-2 sm:text-left text-center">
            <p className="felx-wrap m-4 sm:m-0  px-4 text-3xl  font-semibold">{project.title}</p>
            <p className="px-4 py-3 sm:py-0">{project.msg}</p>
            </div>
          </div>
         )}
         {active === 'UI/UX' && uiux.map((project) => 
            <div key={project.id} className="grid sm:grid-cols-3 sm:p-5 m-2 bg-[#FFEED9] mt-[20px] rounded-2xl">
            <Link href={project.link ?? '/'} target="_blank" className="col-span-1">
            <Image
            src={project.img ?? 'https://i.pinimg.com/736x/96/ee/3a/96ee3a5133c8a49748dab7c0616547a1.jpg'}
            alt="Project"
            height={158}
            width={206}
            className=" w-[190px] sm:w-[206px] ml-[85px] rounded-md m-4 sm:m-0"
            />
            </Link>
            <div className="col-span-2 sm:text-left text-center">
            <p className="felx-wrap m-4 sm:m-0  px-4 text-3xl  font-semibold">{project.title}</p>
            <p className="px-4 py-3 sm:py-0">{project.msg}</p>
            </div>
          </div>
         )}
         </div>
         </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
