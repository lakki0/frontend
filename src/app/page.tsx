import Image from "next/image";
import home from "../../public/home.jpg";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>
          Better Design for your digital product.
        </h1>
        <p className={style.desc}>
          Turning your idea into reality. We bring together the teams from 
          the global tech industry.
        </p>
        <button className={style.button}>
          See Our Works
        </button>
      </div>
      <div className={style.item}>
        <Image src={home} className={style.img} alt="home images"/>
      </div>
    </div>
  );
}
