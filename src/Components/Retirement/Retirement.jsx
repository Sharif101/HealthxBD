import React from 'react';
import Style from './Retirement.module.css'
import img from '../../images/Retirement.png'

const componentName = (props) => {
    return (
        <div className={Style.container}>
        <div className={Style.text}>
          <h1>Retirement</h1>
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
          <button>Learn More</button>
        </div>

        <div className={Style.img}>
          <img src={img} alt="" />
        </div>
      </div>
    );
};

export default componentName;