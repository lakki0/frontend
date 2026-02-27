import style from "./page.module.css";
import Image from "next/image";
// import Button from "../../components/button/Button"

import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
          alt="our image"
          // width={800}
          fill={true}
          // height={300}
          className={style.img}
        />

        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storyteller</h1>
          <h2 className={style.imgDesc}>
            Handcrafting award winning digital experience.
          </h2>
        </div>
      </div>

      <div className={style.textContainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who Are We?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            asperiores nemo possimus earum et nihil consequatur dolorem, officia
            minima, commodi, in corrupti unde atque voluptates repellat quasi?
            A, magnam odio ipsam doloremque saepe vero laboriosam, nostrum
            <br />
            <br />
            laudantium officiis natus non pariatur corporis eos iure. Sequi qui
            voluptatem quasi consequuntur iure? Tempore laudantium rerum in
            commodi, rem fugiat minus quo quidem ipsum harum, molestiae aliquid,
            voluptas minima hic ipsam impedit aperiam! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Asperiores rerum deleniti atque.
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}>Who We Do?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            asperiores nemo possimus earum et nihil consequatur dolorem, officia
            minima, commodi, in corrupti unde atque voluptates repellat quasi?
            A, magnam odio ipsam doloremque saepe vero laboriosam, nostrum
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
