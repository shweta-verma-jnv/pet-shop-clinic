import React from "react";
import "./Pricing.css";

import img8 from './images/free-plan.png';
import img9 from './images/Premium-plan.png';
import img10 from './images/Standard-plan.png';
import img11 from './images/text-icon.jpg';

export default function Pricing() {
    console.log("first")
  return (

    <section className="price">
      <div className="heading">
    <h2>Pet Shop & Clinic Plan</h2>
     <p>Explore our pet clinic's services and shop's pricing plans. </p>
     </div>
    
     <div class="container main-container">
        <div class="boxwrap free">
<img src={img8} />
<h3>Free Plan</h3>

<ul>
  <li> Free Guidance for Pet care </li>
  <li>  First Time free medical treatment</li>
  <li>  Explore our clinic & shop</li> 
</ul>

<h2>Free</h2>
<a href="#" className="free">Select </a>
  </div>

  <div class="boxwrap standard">
<img src={img10} />
<h3>Standard Plan</h3>

<ul>
  <li> Free Guidance for Pet care </li>
  <li>  First Time free medical treatment</li>
  <li>  Explore our clinic & shop</li> 
  <li>Any Time Contact Us </li>
  <li>Overall Checkup for your pet </li>
</ul>
<h2>500 ₹ / month </h2>
<a href="#" className="free">Select </a>

</div>

<div class="boxwrap premium ">
<img src={img9} />
<h3>Premium Plan</h3>

<ul>
  <li> Free Guidance for Pet care </li>
  <li>  First Time free medical treatment</li>
  <li>  Explore our clinic & shop</li> 
  <li>Any Time Contact Us </li>
  <li>Overall Checkup for your pet </li>
  <li>Provide home survice</li>
  <li>Hospitalized offer </li>
</ul>
<h2>800 ₹ / month </h2>
<a href="#" className="free">Select </a>

</div>
  </div>

  <div className="contact">
    <a href="#"> <img src={img11} /></a>
    <i>If you have any questions, please <a href="#">Contact us </a></i>
  </div>
  </section>   

    
  );
}
