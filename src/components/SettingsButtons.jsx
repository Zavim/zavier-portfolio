import { useStore } from "@nanostores/react";
import { isDark } from "../themeStore";
import { animate } from "../animateStore";

export default function SettingsButtons() {
  const $isDark = useStore(isDark);
  const $animate = useStore(animate);

  const handleDarkmodeToggle = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    isDark.set(element.classList.contains("dark"));
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <div className="settings-container">
      <button
        className="animate-button settings-button"
        onClick={() => animate.set(!$animate)}
      >
        <div className="settings-button-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 16"
            width="1.5em"
            height="1.5em"
            transform="rotate(-10)"
          >
            <desc>star icon</desc>
            <path
              className="svg-icon"
              id="star-path"
              fillRule="evenodd"
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            ></path>
          </svg>
          {/* {animate ? <span>playing</span> : <span>paused</span>} */}
        </div>
      </button>
      <button
        className="darkmode-button settings-button"
        id="darkmode-button"
        onClick={() => handleDarkmodeToggle()}
      >
        <div className="settings-button-text">
          {$isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="1.5em"
              height="1.5em"
            >
              <desc>lightmode icon</desc>
              <path
                className="svg-icon"
                fillRule="evenodd"
                d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526Z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="1.5em"
              height="1.5em"
            >
              <desc>darkmode icon</desc>
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
