import React, { use } from "react";
import style from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  const param = use(params);
  // console.log(param.category)
  return (
    <div className={style.container}>
      <h2 className={style.catTitle}>{param.category}</h2>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.titke}>Title</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src="https://images.pexels.com/photos/36016480/pexels-photo-36016480.jpeg"
            alt=""
            fill={true}
          />
        </div>
      </div>

      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.titke}>Title</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image
            className={style.img}
            src="https://images.pexels.com/photos/36016480/pexels-photo-36016480.jpeg"
            alt=""
            fill={true}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Category;
