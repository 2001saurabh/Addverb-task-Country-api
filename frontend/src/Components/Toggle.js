import { useState } from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <>
      {darkMode ? (
        <button onClick={changeTheme} className="ui inverted grey basic button">
          <i class="sun icon"></i> Light Mode
        </button>
      ) : (
        <button onClick={changeTheme} className="ui  black basic button">
          <i class="moon icon" /> Dark Mode
        </button>
      )}
    </>
  );
}
