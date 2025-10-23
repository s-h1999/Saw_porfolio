import { useEffect } from "react";

export function useScroll(setActive) {
  useEffect(() => {
    const main = document.querySelector("main");

    const handleScroll = () => {
      const sections = main.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = main.scrollTop;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, [setActive]);
}

// ✅ add this separate export
export function scrollToSection(id) {
  const main = document.querySelector("main");
  const target = document.getElementById(id);
  if (main && target) {
    main.scrollTo({
      top: target.offsetTop - 50,
      behavior: "smooth",
    });
  }
}
