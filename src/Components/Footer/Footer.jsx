import classes from "./Footer.module.css";
import facebook from "../../assets/Footer/Facebook.png";
import linkedin from "../../assets/Footer/Instagram.png";
import youtube from "../../assets/Footer/Youtube.png";
import instagram from "../../assets/Footer/Youtube.png";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h3>Smart ClinicX</h3>
          <p>
            A one-stop solution for Patient Registration, Doctor’s Appointment
            Management, Patient Serial Management, Doctor’s Chamber Management,
            E-Prescription, Patient Health Indicators Graph, and much more.
          </p>
          <button>Register Now!</button>
        </div>
        <div>
          <div className={classes.link}>
            <a href="">Home</a>
            <span>|</span>
            <a href="">Features</a>
            <span>|</span>
            <a href="">Panels</a>
            <span>|</span>
            <a href="">Benefits</a>
            <span>|</span>
            <a href="">FAQ</a>
            <span>|</span>
            <a href="">More</a>
          </div>

          <div className={classes.img}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <p className={classes.footerText}>
        Copyright © HEALTHX Ventures. All rights reserved.
      </p>
    </div>
  );
}
