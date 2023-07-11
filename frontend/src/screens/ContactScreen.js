import React,{Fragment} from 'react';
import './CSS/Contact.css'
const contact=()=>{

    return(
       <Fragment>
       
        <section className="contact">
        <video className='videoTag' autoPlay loop muted>
       <source src="./images/contact.mp4" type='video/mp4' />
        </video>

         <div className='contact-heading'>
            <h2>Contact Us</h2>
        </div>
        <div className='contact-container'>
           <div className="row">
              <div className="column">
                

                <div className='contact-widget'>
                  <div className='contact-widget-item'>
                    <div className='icon'>
                    <i className='fas fa-phone' style={{fontSize:'36px'}}></i>
                    </div>
                    <div className='text'>
                      <h5>Call Us</h5>
                      <p>123-123-1234</p>
                    </div>

                  </div>
                </div>

                <div className='contact-widget'>
                  <div className='contact-widget-item'>
                    <div className='icon'>
                    <i className='fas fa-envelope' style={{fontSize:'36px'}}></i>
                    </div>
                    <div className='text'>
                      <h5>EMAIL</h5>
                      <p>help@socialkitchen.com</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className='contact-widget'>
                  <div className='contact-widget-item'>
                    <div className='icon'>
                    <i className='fas fa-map-marker-alt' style={{fontSize:'36px'}}></i>
                    </div>
                    <div className='text'>
                      <h5>Address</h5>
                      <p>219 Washington street,Boston,MA,02115,United States</p>
                    </div>

                  </div>
                </div>
             

           </div>

           <div className='row'>
            <div className='map-column'>
                <div className='contact-map' style={{marginTop: '40px'}}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.100145223002!2d-71.071258!3d42.3403882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b8c7e11c787%3A0x79a6ded37af7bd4f!2sWashington%20St.!5e0!3m2!1sen!2sus!4v1670128383037!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{border:"0"}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
                </div>
              </div>
            </div>
            <div className='row'>
            <div className='column' style={{marginTop: '40px'}}>
                  <form>
                  <h4>Fill out for Any queries </h4>

                  <div className='form-group'>

                    <input type='text' class="form-control" aria-describedby="name" placeholder="Enter Your Name"></input>
                </div>   
                <div className='form-group'>
                        <input type='email' class="form-control" aria-describedby="email" placeholder="Enter Your Email"></input>
                </div>    
                <div>
                  <textarea class="form-control" placeholder='Comment'></textarea><br></br>
                </div>    
                <button type='submit'>Send Message</button>
                </form>

              </div>
           </div>
        </div>
        </section>
       </Fragment>
    )
}
export default contact;