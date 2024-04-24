import React, { useState } from 'react'
import "./About.css";
import { FaBold } from 'react-icons/fa';


export default function About () {

  
  return (
    <div className='about'>
        <h2>About Pet Shop </h2>
        <img src='https://img.freepik.com/free-vector/hand-drawn-pet-shop-facebook-cover-template_23-2150383109.jpg'/>
        <div className='shop'>
            <p>Diverse selection of pets including dogs, cats, birds, fish,cow , rabbits ,and small animals.</p>
            <p>Quality pet supplies ranging from food and toys to grooming products.</p>
            <p>Knowledgeable staff providing guidance on pet care and nutrition.</p>
            <p>Adoption services connecting animals with loving homes.</p>
            <p>Convenient location with parking for easy access.</p>
    </div>
   <div className='clinic'>
    <h2>About Pet Clinic</h2>
    <img srcSet='https://img.grouponcdn.com/iam/6Tuc7CdYj7mdykLbeDKW/BT-2048x1229/v1/t600x362.jpg'/>
    <p>Compassionate staff dedicated to the health and well-being of animals.</p>
    <p>Surgical procedures and emergency treatments available.</p>
    <p>Comprehensive medical examinations and treatments.</p>
    <p>Vaccinations and preventative care services.</p>
    <p>Professional veterinary care for pets.</p>
 </div>

 <h2> <strong>HISTORY </strong> </h2>
<div className='history'>
    
    <div className='msg1'>
    The pet shop website traces its origins to the early 20th century, when small independent stores began catering to the needs of pet owners. Over time, these shops evolved, offering a wider range of products, grooming services, and even adoption programs, becoming central hubs for pet enthusiasts.
    </div>
<div className='msg2'>
Meanwhile, the pet clinic website has its roots in the growth of veterinary medicine in the mid-20th century. As people's relationships with their pets deepened, the need for specialized medical care arose. Pet clinics emerged, providing comprehensive healthcare services for animals, including check-ups, surgeries, and emergency treatments, fostering a culture of responsible pet ownership.
</div>
</div>

    </div>
  )
}