import React, { useState } from 'react'
import "./Features.css";


export default function Features() {

  
  return (
    <div className='features-page'>
    <h1>Pet Shop & Clinic Features </h1> 
    <div className='youtube-video'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/CjN0feQt5E8?si=Z4w9-843v4t4KJ_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div className='about-shop'>
      <div className='shop'>
      <h3>About Pet Shop </h3>
      <p>Visit our pet shop for a delightful range of furry  <br/>friends and supplies. From cuddly companions to top-quality <br/>care products, we're here to fulfill all your pet-related <br/> needs with love and expertise.</p>
      </div>
      <img src="https://media.gettyimages.com/id/1216655311/photo/two-caged-dogs.jpg?s=612x612&w=0&k=20&c=5qNnzj7LuVBNVOEHHbc6k_fiw6End9Q6s6kAFF_SP7o="/>
    </div>
    <div className='facilities-1'>
     
      
      <img src='https://visitripon.co.uk/wp-content/uploads/the-pet-shop.jpg'/>
      <div className='shop'>
      <h3>Shop Facilities</h3>
      <p>Pet shops offer facilities like grooming services, pet <br/> supplies, adoption centers, and sometimes boarding facilities.<br/> They provide a one-stop destination for pet owners to <br/> meet various needs for their furry companions.</p>
      </div>
    </div>

    <div className='about-clinic'>
    <div className='shop'>
      <h3>About Pet Clinic </h3>
      <p>A pet clinic provides veterinary care for animals, including  <br/>check-ups, vaccinations, surgeries, and emergency treatments. <br/>It ensures the health and well-being of pets through <br/>professional medical services.</p>
      </div>
      <img src='https://www.hobsonvalleyanimalclinic.com/sites/site-5955/images/staff%20vets%202015%20resizes.JPG'/>
    </div>

    <div className='facilities-2'>
     
     
      <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-clinic-post-design-template-371efc037a1c2d395e6d6db4c358887a_screen.jpg?ts=1596458121'/>
      <div className='shop'>
      <h3> Clinic Facilities</h3>
      <p>Pet clinics offer facilities such as examination rooms, surgical <br/>suites, diagnostic equipment, pharmacy services, and boarding <br/>facilities. They provide comprehensive care to ensure <br/> the health and happiness of pets.</p>
      </div>
    </div>
            </div>
  )
};

