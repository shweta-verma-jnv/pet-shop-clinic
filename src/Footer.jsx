import React from "react";
import "./Footer.css";
import img2 from './images/fb-icon.png';
import img3 from './images/Twitter-icon.png';
import img4 from './images/insta-icon.png';
import img5 from './images/linkdn-icon.png';
import img6 from './images/youtube-icon.png';
import img7 from './images/rabbit-icon.svg';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="outerFooter">
            <div className=" sub-container other-container ">
            <i>  Pet Shop & Clinic  </i>
            <a href="#">
                <img src= {img7}alt=" Pet Shop & Clinic " />
            </a>
           
            <p>  A pet shop provides supplies and animals, while a <br/>clinic offers medical care for pets. </p>
            <p> +91-7355287930  <br/>  support@pet-shop&clinic.com </p>
            <ul>
                <li>
                <a href="#">
                   
                    <img src={img2}/>
                </a>
                </li>
                <li>
               
                <a href="#">
                  
                    <img src={img3} />
                </a>
                </li>
                <li>
                <a href="#">
                    <img src={img4} />
                </a>
                </li>
                <li>
                <a href="#">
                   
                    <img src={img5} />
                </a>
                </li>
                <li>
                <a href="#">
                   
                    <img src={img6} />
                </a>
                </li>
            </ul>
            </div>

            <div className="sub-container">
            <ul>
                <li>
                <h4>
                     Pet Shop & Clinic
                </h4>
                </li>
                <br />
                <li>
                
                <Link to={"/about"}> About  </Link>
                </li>
                <br />
                <li>
                
                <Link to={"/contact"}>  Contact us </Link>
                </li>
                <br />
               
                
            </ul>
            </div>
            <div className="sub-container">
            <ul>
                <li>
                
                <h4>
                     Petconomy 
                </h4>
                </li>
                <br />
                <li>
                <Link to={"/features"}> features </Link>
                </li>
                <br />
                <li>
                <Link to={"/pricing"}>Pricing</Link> 
                </li>
                <br />
                <li>
                <a href="#"> Reviews </a>
                </li>
                <br />
                
            </ul>
            </div>
            

            <div className="sub-container">
            <ul>
                <li>
                
                <h4>
                   Pet Specialist
                </h4>
                </li>
                <br />
                <li>
                <a href="#"> Veterinarian </a>
                </li>
                <br />
                
                <li>
                <a href="#"> Chat support</a>
                </li>
            </ul>
            </div>

            
        </div>
      

     
      

        <div className="lower">
        <hr />
        <p>© 2024 pet shop & clinic  Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
      </div>
      </div>
    </footer>


  );
};




export default Footer;
