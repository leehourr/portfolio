import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import { techStack } from "../constants";
import { Check, Flag } from "lucide-react";
import { WindowControls } from "../components";
const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@Leehour % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < items.length - 1 ? "," : " "}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> 6 of 6 stacks loaded succesfully (100%)
          </p>
          <p className="text-[#DBDBDB]">
            <Flag size={20} fill="#DBDBDB" /> Render time 6ms.
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindows = WindowWrapper(Terminal, "terminal");

export default TerminalWindows;
