import React from "react";
import Style from "./Financial.module.css";
import img from "../../images/financial_img.png";

const componentName = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.img}>
        <img src={img} alt="" />
      </div>
      <div className={Style.text}>
        <h1>What are Financial Services?</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          est laboriosam a corporis, pariatur nesciunt sunt ratione magnam
          exercitationem cumque perspiciatis porro delectus unde sint nulla
          fugit, quod saepe voluptatem voluptates fugiat magni soluta. Ipsa
          voluptas modi voluptatem aperiam odio. Voluptas cumque non recusandae
          voluptatum fugiat perferendis ipsam nemo explicabo ab neque, aliquid
          blanditiis temporibus rerum iure fuga quis quos exercitationem esse
          iusto cum ducimus assumenda harum eveniet? Ut nisi molestiae omnis
          animi recusandae quos rem porro quasi minima tempore, autem rerum
          optio. 
          exercitationem, dolorem pariatur atque necessitatibus sequi, omnis
          modi asperiores. Eum voluptates quisquam eveniet autem id eius sit
          doloribus.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default componentName;
