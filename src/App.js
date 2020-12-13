import React, { useState } from "react";
import "./styles.css";

const morse = {
  A: ".- ",
  B: "-... ",
  C: "-.-. ",
  D: "-.. ",
  E: ". ",
  F: "..-. ",
  G: "--. ",
  H: ".... ",
  I: ".. ",
  J: ".--- ",
  K: "-.- ",
  L: ".-.. ",
  M: "-- ",
  N: "-. ",
  O: "--- ",
  P: ".--. ",
  Q: "--.- ",
  R: ".-. ",
  S: "... ",
  T: "- ",
  U: "..- ",
  V: "...- ",
  W: ".-- ",
  X: "-..- ",
  Y: "-.-- ",
  Z: "--.. ",
  1: ".---- ",
  2: "..--- ",
  3: "...-- ",
  4: "....- ",
  5: "..... ",
  6: "-.... ",
  7: "--... ",
  8: "---.. ",
  9: "----. ",
  0: "----- ",
  ".": ".-.-.- ",
  ",": "--..-- ",
  "?": "..--.. ",
  "'": ".----. ",
  "!": "-.-.-- ",
  "/": "-..-. ",
  "(": "-.--. ",
  ")": "-.--.- ",
  "&": ".-... ",
  ":": "---... ",
  ";": "-.-.-. ",
  "=": "-...- ",
  "+": ".-.-. ",
  "-": "-....- ",
  _: "..--.- ",
  '"': ".-..-. ",
  $: "...-..- ",
  "@": ".--.-. ",
  " ": " / "
};

export default function App() {
  const [decode, setDecode] = useState("");

  function translate(event) {
    let str = event.target.value;
    let translated = "";
    for (let i = 0, l = str.length; i < l; i++) {
      translated = translated + morse[str[i].toUpperCase()];
    }
    setDecode(translated);
  }

  return (
    <div className="App">
      <nav>
        <h1>Morse Code</h1>
        <p>Made with ❤️ in React</p>
      </nav>
      <textarea
        placeholder="English goes here.. start typing"
        onChange={translate}
      ></textarea>

      <textarea
        readOnly
        placeholder="Morse comes here"
        value={decode}
      ></textarea>
    </div>
  );
}
