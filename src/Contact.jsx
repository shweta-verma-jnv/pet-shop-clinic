import React , {Component} from "react";

import "./Contact.css";
class Contact extends Component {
  constructor (props ) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.queryInput = React.createRef();

  }
  handleSubmit(event) {
    event.preventDefault();
    const name = this.nameInput.current.value;
    const email = this.nameInput.current.value;
    const query = this.nameInput.current.value;

    console.log("Name:", name );
    console.log("Email:", email );
    console.log("Query:", query );
  }
  render() {

    return (
<div className="contact-page1">
      <div className="contact-page">
       
      <div className="here-into">
      <h2>About My Pet shop and Clinic  Website</h2>
        <p>Hey there stranger! Welcome at My Pet Shop and Clinic <br />Website. This blog is made for willing who want <br />to take their pets online.</p>
        <p>Contact us for your pet needs at our pet shop and clinic <br />website. Reach out for appointments, inquiries, or assistance.<br/> We're here to help with all your furry <br/>friend's requirements.</p>
        <p>In other words, everything you need to know be visible online.</p>
        <p>Do you have any questions? Feel free to get in touch <br/>with us via our contact form on the right. We usually<br/> reply within 24 hours!</p>
  
        <h3>Want to visit us?</h3>
        <ul><li> <a href="#" >www.pet-shop&clinic.in</a></li></ul>
        <h3>Want to call us?</h3>
        <ul><li><a href="#">+91-7355287930</a></li></ul>
        <br />
        <p>Thanks for visiting my website!</p>
        <br />
        
      </div>
      <div className="here-form">
        <form className="contact-form" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" ref={this.nameInput} required />
            </div>
            <div className="form-group">
            <label htmlFor="email"> Email: </label>
            <input type="text" id="name" ref={this.nameInput} required />
          </div>
          <div className="form-group">
          <label htmlFor="query"> Query: </label>
            <textarea id="query" type="text" ref={this.nameInput} required />
            <br />
            <button type="submit"> Submit</button>
          </div>
        </form>
        <img src="https://media.istockphoto.com/id/1133808211/photo/robin-bird-on-a-cherry-tree.jpg?s=612x612&w=0&k=20&c=arTuRPMRqBLpaI9TM-lfeErJQaIUaoyWW-6XpSSN1xQ="/>
      </div>
      </div>
      <div className="picture">
       
       <img src=" https://d2zp5xs5cp8zlg.cloudfront.net/image-54474-800.jpg"/>
       <br/>

        
        <br/>
      </div>
      </div>

    );
}
}
export default Contact ;




  
    
    
  



