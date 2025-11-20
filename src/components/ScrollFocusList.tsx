import Lenis from "lenis";
import { useEffect } from "react";
import { characters } from "../assets/assets";
import ListItem from "./ListItem";

export default function ScrollFocusList() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <section className="spacing" />
      <section className="listing">
        <ul>
          {characters.map((characters) => (
            <ListItem key={characters.name} item={characters} />
          ))}
        </ul>
      </section>
      <section className="spacing" />
    </>
  );
}
