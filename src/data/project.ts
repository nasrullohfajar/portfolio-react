import imgPersonalNote from "../assets/img/personal-note.png";
import imgToDoList from "../assets/img/to-do-list.png";
import imgTreasureCart from "../assets/img/treasurecart.png";
import imgCss from "../assets/icon/css.png";
import imgHtml from "../assets/icon/html.png";
import imgJs from "../assets/icon/js.png";
import imgReact from "../assets/icon/react.png";
import imgVite from "../assets/icon/vite.png";
import imgTailwind from "../assets/icon/tailwind.png";

const iconPersonalNote = [imgVite, imgReact, imgJs, imgTailwind];
const iconToDoList = [imgHtml, imgCss, imgJs];
const personalNoteLink = "https://nasrullohfajar.github.io/personal-note/";
const toDoListLink = "https://nasrullohfajar.github.io/todolist-app/";
const treasureCartLink = "https://treasurecart.vercel.app/";

export const projectData = [
  {
    id: 1,
    title: "Personal Note",
    image: imgPersonalNote,
    description:
      "Easily capture and organize thoughts. Keep all notes in one simple, accessible place.",
    icon: iconPersonalNote,
    link: personalNoteLink,
  },
  {
    id: 2,
    title: "To-do List",
    image: imgToDoList,
    description:
      "Stay organized and on top of tasks. Manage and track to-dos with ease.",
    icon: iconToDoList,
    link: toDoListLink,
  },
  {
    id: 3,
    title: "TreasureCart",
    image: imgTreasureCart,
    description:
      "Discover and shop effortlessly online. A seamless shopping experience.",
    icon: iconPersonalNote,
    link: treasureCartLink,
  },
];
