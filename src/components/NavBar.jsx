import React from "react";
import logo from "/images/logo.svg";
import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import useWindowStore from "../store/window";

export default function NavBar() {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" className="w-5 h-5 invert" />
        <p className="font-bold text-nowrap">Lee Hour's portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              className="cursor-pointer hover:underline"
              onClick={() => {
                openWindow(type);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="icon-hover cursor-pointer">
              <div
                className="w-4 h-4 bg-current"
                style={{
                  maskImage: `url(${img})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: `url(${img})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
            </li>
          ))}
        </ul>

        <time className="text-nowrap" datetime="">
          {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
}
