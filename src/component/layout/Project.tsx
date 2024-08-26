import React from "react";
import Card from "../ui/Card";
import imgPersonalNote from "../../assets/img/personal-note.png";
import imgToDoList from "../../assets/img/to-do-list.png";
import imgCss from "../../assets/icon/css.png";
import imgHtml from "../../assets/icon/html.png";
import imgJs from "../../assets/icon/js.png";
import imgReact from "../../assets/icon/react.png";
import imgVite from "../../assets/icon/vite.png";
import imgTailwind from "../../assets/icon/tailwind.png";

const iconPersonalNote = [imgVite, imgReact, imgJs, imgTailwind];
const iconToDoList = [imgHtml, imgCss, imgJs];
const personalNoteLink = "https://nasrullohfajar.github.io/personal-note/";
const ToDoListLink = "https://nasrullohfajar.github.io/todolist-app/";

const Project = () => {
  return (
    <div className="flex flex-col">
      <h1 className=" text-4xl lg:text-6xl font-bold mb-12 lg:mb-32">
        Recent Project
      </h1>
      <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-32">
        <Card
          img={imgPersonalNote}
          title="Personal Note"
          description="Easily capture and organize thoughts. Keep all notes in one simple, accessible place."
          icon={iconPersonalNote}
          isHaveLink
          link={personalNoteLink}
        />
        <Card
          img={imgToDoList}
          title="To-do List"
          description="Stay organized and on top of tasks. Manage and track to-dos with ease."
          icon={iconToDoList}
          isHaveLink
          link={ToDoListLink}
        />
      </div>
    </div>
  );
};

export default Project;
