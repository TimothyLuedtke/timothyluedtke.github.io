// Skills icons - https://react-icons.github.io/react-icons/
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
//   FaReact,
//   FaJava,
//   FaGitAlt,
//   FaGithubSquare,
//   FaLink,
// } from "react-icons/fa";
// import { SiJavascript, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";
import ArtRoomIMG from "./images/artRoom-screen.jpg";
import MichIMG from "./images/mich-screen.jpg";
import PortfolioIMG from "./images/portfolio-screen.jpg";
import DemeraIMG from "./images/demera-screen.jpg";
import ExifIMG from "./images/exifParser-screen.jpg";
import ContactrIMG from "./images/contactr-screen.png";
import PaintRepairIMG from "./images/paint-screen.jpg";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
**************************************************************
Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "TimothyLuedtke";

// Blog link icon (imported above)
// export const Blog = <FaLink />;

/* About Me
**************************************************************
Add a second paragraph for the about me section.
*/
// Resume link
export const resume = "https://docs.google.com/document/d/e/2PACX-1vTo422slrH35s1OdhHsHli5s-kkYSie8T3DupPPhBQOrNJ76pyv0z0-A08yxEFs3A/pub";


export const moreInfo =
  "All of the information from this site is generated from my Github via the GitHub API and stored using redux. It's hosted on GitHub Pages.";

// export const skillData = [
//   {
//     id: 1,
//     skill: <FaHtml5 className="display-4" />,
//     name: "HTML5",
//   },
//   {
//     id: 2,
//     skill: <FaCss3Alt className="display-4" />,
//     name: "CSS3",
//   },
//   {
//     id: 3,
//     skill: <SiJavascript className="display-4" />,
//     name: "JavaScript",
//   },
//   {
//     id: 4,
//     skill: <FaBootstrap className="display-4" />,
//     name: "BootStrap",
//   },
//   {
//     id: 5,
//     skill: <FaReact className="display-4" />,
//     name: "React / React Native",
//   },
//   {
//     id: 6,
//     skill: <SiTailwindcss className="display-4" />,
//     name: "Tailwind CSS",
//   },
//   {
//     id: 7,
//     skill: <SiMongodb className="display-4" />,
//     name: "MongoDB",
//   },
//   {
//     id: 8,
//     skill: <SiPostgresql className="display-4" />,
//     name: "PostgreSQL",
//   },
//   {
//     id: 9,
//     skill: <SiRedux className="display-4" />,
//     name: "Redux",
//   },
//   {
//     id: 10,
//     skill: <FaJava className="display-4" />,
//     name: "Java",
//   },
//   {
//     id: 11,
//     skill: <FaGitAlt className="display-4" />,
//     name: "Git",
//   },
//   {
//     id: 12,
//     skill: <FaGithubSquare className="display-4" />,
//     name: "GitHub",
//   },
// ];


export const filteredProjects = ["Paint-RepairLLC", "contactr", "exif"];

export const projectCardImages = [
  {
    name: "ArtRoom",
    image: ArtRoomIMG,
  },
  {
    name: "contactr",
    image: ContactrIMG,
  },
  {
    name: "Demera",
    image: DemeraIMG,
  },
  { 
    name: "exif",
    image: ExifIMG,
  },
  {
    name: "Mich-Restaurant",
    image: MichIMG,
  },
  {
    name: "timothyluedtke.github.io",
    image: PortfolioIMG,
  },
  {
    name: "Paint-RepairLLC",
    image: PaintRepairIMG,
  },

];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mdovagvo";
