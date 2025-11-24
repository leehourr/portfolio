import React from "react";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
// import { Heading3 } from 'lucide-react'

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  console.log({ image });
  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 pb-0 space-y-6">
        {image ? (
          <div className="w-[40%] float-end mr-4">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        ) : null}
      </div>
      {/* {subtitle ? <h3 className='m-5 text-lg font-semibold'>{subtitle}</h3> : null} */}

      {Array.isArray(description) && description.length > 0 ? (
        <div className="space-y-3 pt-0 p-5 leading-relaxed text-base text-[#DBDBDB]">
          {description.map((para, index) => (
            <p className="" key={index}>
              {para}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
