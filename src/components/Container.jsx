import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length; // learn why this regular expression and how it works
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - text.length;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - text.length;
  const stats = {
    numberOfWords: numberOfWords,
    numberOfCharacters: numberOfCharacters,
    instagramCharactersLeft: instagramCharactersLeft,
    facebookCharactersLeft: facebookCharactersLeft,
  };

  return (
    <main className="container flex  w-[1050px] h-[520px] rounded-xl mt-[55px] overflow-hidden relative">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />{" "}
      {/*before we had to write out props individually here, so we created a stats object and defined everything there and just called it here  */}
    </main>
  );
}
