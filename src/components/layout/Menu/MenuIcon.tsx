import classNames from "classnames";
import { useState } from "react";
const MenuIcon = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48"
        height="48"
        onClick={() => setClicked(!clicked)}
        className={classNames(
          clicked ? "rotate-45" : "rotate-0",
          "opacity-100 fill-none stroke-gray-200 stroke-2 block cursor-pointer transition-all duration-300"
        )}
      >
        <title>Menu</title>
        {/* Top-left circle */}
        <circle
          cx="12"
          cy="12"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0 group-hover:opacity-100" : "opacity-100",
            "transform-none transition-all duration-100"
          )}
        />
        {/* Top-center circle */}
        <circle
          cx="24"
          cy="12"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0" : "opacity-100",
            "transform-none transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-6"
          )}
        />
        {/* Top-right circle */}
        <circle
          cx="36"
          cy="12"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0 group-hover:opacity-100" : "opacity-100",
            "transform-none transition-all duration-100"
          )}
        />
        {/* Middle-right circle */}
        <circle
          id="middle-right-circle"
          cx="36"
          cy="24"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0" : "opacity-100",
            "transform-none transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-6"
          )}
        />
        {/* Bottom-right circle */}
        <circle
          cx="36"
          cy="36"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0 group-hover:opacity-100" : "opacity-100",
            "transform-none transition-all duration-100"
          )}
        />
        {/* Bottom-center circle */}
        <circle
          cx="24"
          cy="36"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0" : "opacity-100",
            "transform-none transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-6"
          )}
        />
        {/* Bottom-left circle */}
        <circle
          cx="12"
          cy="36"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0 group-hover:opacity-100" : "opacity-100",
            "transform-none transition-all duration-100"
          )}
        />
        {/* Middle-left circle */}
        <circle
          cx="12"
          cy="24"
          r="3"
          opacity="1"
          transform-origin="0px 0px"
          className={classNames(
            clicked ? "opacity-0" : "opacity-100",
            "transform-none transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-6"
          )}
        />
        {/* Center circle 1*/}
        <rect
          x="21"
          y="21"
          width="6px"
          height="6px"
          rx="3"
          ry="3"
          transform-origin="0px 0px"
          className={classNames(
            clicked
              ? "w-[30px] opacity-100 -translate-x-3 translate-y-0"
              : "group-hover:w-[30px] group-hover:opacity-100 group-hover:-translate-x-3 group-hover:translate-y-0 transform-none",
            "transition-all duration-300"
          )}
        />
        {/* Center circle 2*/}
        <rect
          x="21"
          y="21"
          width="6px"
          height="6px"
          rx="3"
          ry="3"
          transform-origin="0px 0px"
          className={classNames(
            clicked
              ? "h-[30px] opacity-100 -translate-y-3 translate-x-0"
              : "group-hover:h-[30px] group-hover:opacity-100 group-hover:-translate-y-3 group-hover:translate-x-0 transform-none",
            "transition-all duration-300"
          )}
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
