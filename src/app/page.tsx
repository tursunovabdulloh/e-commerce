import React from "react";
import fon from "../../public/fon.png";
import SimpleCarousel from "./SimpleCarousel";
import style from "./style.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <SimpleCarousel />
    </div>
  );
}
