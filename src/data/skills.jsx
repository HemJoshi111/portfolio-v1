import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava, FaGitAlt, FaLinux, FaDatabase, FaPhp } from 'react-icons/fa';
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiRedux, SiMysql, SiFirebase, SiVite, SiNextdotjs, SiMongoose } from 'react-icons/si';
import { TbApi, TbBrandVscode, TbDeviceDesktopAnalytics } from 'react-icons/tb';

export const skillsData = [
    {
        id: 1,
        category: "Frontend Engineering",
        description: "Building responsive, performant user interfaces.",
        icon: <TbDeviceDesktopAnalytics className="w-6 h-6" />,
        skills: [
            { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-[#E34F26]" /> },
            { name: "CSS3", level: "Advanced", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            { name: "React.js", level: "Advanced", icon: <FaReact className="text-blue-400" /> },
            { name: "Next.js", level: "Basic", icon: <SiNextdotjs className="text-white" /> },
            { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "JavaScript (ES6+)", level: "Advanced", icon: <FaJs className="text-yellow-400" /> },
            // { name: "Redux Toolkit", level: "Basic", icon: <SiRedux className="text-purple-500" /> },
            { name: "Vite", level: "Intermediate", icon: <SiVite className="text-yellow-400" /> },
        ]
    },
    {
        id: 2,
        category: "Backend Architecture",
        description: "Designing scalable APIs and database schemas.",
        icon: <FaNodeJs className="w-6 h-6" />,
        skills: [
            { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", level: "Intermediate", icon: <SiExpress className="text-gray-400" /> },
            { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-500" /> },
            { name: "Mongoose", level: "Intermediate", icon: <SiMongoose className="text-red-500" /> },
            { name: "REST APIs", level: "Advanced", icon: <TbApi className="text-blue-300" /> },
            { name: "MySQL", level: "Intermediate", icon: <SiMysql className="text-blue-600" /> },
            { name: "PHP", level: "Basic", icon: <FaPhp className="text-[#777BB4]" /> },
        ]
    },
    {
        id: 3,
        category: "Computer Science Core",
        description: "Foundational knowledge for optimized systems.",
        icon: <FaJava className="w-6 h-6" />,
        skills: [
            { name: "Java (OOP)", level: "Intermediate", icon: <FaJava className="text-red-500" /> },
            { name: "Data Structure & Algorithms", level: "Academic", icon: <div className="font-mono font-bold text-yellow-500 text-xs">DSA</div> },
            { name: "DBMS", level: "Academic", icon: <FaDatabase className="text-blue-400" /> },
            { name: "OS & Computer Networks", level: "Academic", icon: <FaLinux className="text-slate-200" /> },
            { name: "Artificial Intelligence", level: "Academic", icon: <GiArtificialIntelligence className="text-slate-200" /> },
        ]
    },
    {
        id: 4,
        category: "DevOps & Tools",
        description: "Tools for deployment and version control.",
        icon: <FaGitAlt className="w-6 h-6" />,
        skills: [
            { name: "Git & GitHub", level: "Intermediate", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "VS Code", level: "Advanced", icon: <TbBrandVscode className="text-blue-500" /> },
            { name: "Postman", level: "Advanced", icon: <SiPostman className="text-orange-500" /> },
            { name: "Linux Basics", level: "Basic", icon: <FaLinux className="text-yellow-200" /> },
            { name: "Firebase", level: "Basic", icon: <SiFirebase className="text-yellow-500" /> }
        ]
    }
];