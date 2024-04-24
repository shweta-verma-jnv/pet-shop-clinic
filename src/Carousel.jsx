import React from "react";
import './Carousel.css';
import './slide';
const Carousel = () =>
{
    return(
    <div className="body">
    <div className="slider">
        <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <input type="radio" name="radio-btn" id="radio4"/>
            <input type="radio" name="radio-btn" id="radio5"/>
            <div className="slide first">
                <img src="https://slogansbuddy.com/wp-content/uploads/2022/02/National-Wildlife2.jpg" alt=""/>
            </div>
            <div className="slide">
                <img src="https://t3.ftcdn.net/jpg/04/06/72/26/360_F_406722651_RYj7jKrXhpe4ZqQNkgz0PjJget2rXMcp.jpg" alt=""/>
            </div>
            <div className="slide">
                <img src="https://vet.osu.edu/vmc/sites/default/files/techs_at_work.png" alt=""/>
            </div>
            <div className="slide">
                <img src="https://www.northhoffmanvet.com/uploads/6/4/9/5/64956431/9005605_orig.jpg" alt=""/>
            </div>
            <div className="slide">
                <img src="https://www.wealthmanagement.com/sites/wealthmanagement.com/files/veterinary-clinic.jpg"/>
            </div>
            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
            </div>

        </div>

        <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
            <label htmlFor="radio5" className="manual-btn"></label>
        </div>
      
    </div>
    <script src="slide.js"/>
    </div>
    )
}
export default Carousel;