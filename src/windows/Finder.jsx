import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search, PanelLeft } from "lucide-react";
import React from "react";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const [showSidebar, setShowSidebar] = React.useState(false);

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <div className="flex items-center gap-3">
          <WindowControls target="finder" />
          <PanelLeft
            className="w-4 h-4 text-[#DBDBDB] cursor-pointer sm:hidden hover:text-white transition-colors"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        <Search className="icon" />
      </div>

      <div className="flex h-full relative">
        <div
          className={clsx(
            "sidebar",
            showSidebar
              ? "max-sm:flex max-sm:w-full max-sm:absolute max-sm:z-20 max-sm:h-full"
              : "max-sm:hidden"
          )}
        >
          <div>
            <h3>Favorites</h3>
            <ul>
              {Object.values(locations).map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active"
                  )}
                  onClick={() => {
                    setActiveLocation(item);
                    setShowSidebar(false);
                  }}
                >
                  <div
                    className={clsx(
                      item.id === activeLocation.id ? "active-icon" : "",
                      "w-4 h-4 bg-current"
                    )}
                    style={{
                      maskImage: `url(${item.icon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${item.icon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    }}
                  />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>
              {locations.work.children.map((item) => (
                <li
                  className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active"
                  )}
                  key={item.id}
                  onClick={() => {
                    setActiveLocation(item);
                    setShowSidebar(false);
                  }}
                >
                  <img src={item.icon} className="w-4" alt="" />
                  <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => {
                openItem(item);
              }}
            >
              <img src={item.icon} className="" alt="" />
              <p className="">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
