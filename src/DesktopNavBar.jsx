import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect } from "react";

export default function DesktopNavBar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only trigger on large screens

      if (e.clientY < 60) {
        setShow(true);
      } else {
        setShow(false);
      }

    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow transition-transform duration-300 z-50
        ${show ? "translate-y-0" : "-translate-y-full"}
        dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-lg">Neel Khiroya <span className="text-sm">- Dartmouth, NS</span></div>
        <ul className="flex gap-6 text-sm text-gray-800 dark:text-gray-200">
          <li><a href="https://drive.google.com/file/d/1gxxtrQux9eUshb_GlnS1wqkJN1_CQfK3/view?usp=sharing" className="hover:underline">Resume</a></li>
          <li><a href="https://github.com/neelKhiroya" className="hover:underline">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/neel-khiroya-71a177239/" className="hover:underline">LinkedIn</a></li>
          <li><a href="mailto:neel@khiroya.ca" className="hover:underline">Contact</a></li>
          <DarkModeToggle />
        </ul>
      </div>
    </nav>
  );
}
