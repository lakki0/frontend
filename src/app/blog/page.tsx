import React, { use } from "react";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ params }) => {
  const param = use(params);
  return (
    <div>
      <div className={style.container}>
        <h2 className={style.catTitle}>{param.category}</h2>
        <div className={style.item}>
          <Link href='/blog/testId'>
            <div className={style.imgContainer}>
              <Image
                className={style.img}
                src="https://images.pexels.com/photos/36016480/pexels-photo-36016480.jpeg"
                alt=""
                fill={true}
              />
            </div>

            <div className={style.content}>
              <h1 className={style.titke}>Title</h1>
              <p className={style.desc}>Desc</p>
            </div>
          </Link>
        </div>

        <div className={style.item}>
          <Link href='/blog/testId'>
            <div className={style.imgContainer}>
              <Image
                className={style.img}
                src="https://images.pexels.com/photos/36016480/pexels-photo-36016480.jpeg"
                alt=""
                fill={true}
              />
            </div>

            <div className={style.content}>
              <h1 className={style.titke}>Title</h1>
              <p className={style.desc}>Desc</p>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
