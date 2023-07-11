import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup';

export default function AboutScreen() {
  return (
    <>
    <Card className="bg-dark text-white">
    <Card.Img src="./images/aboutImage.jpg" alt="Card image" style={{opacity:"0.5"}} />
    <Card.ImgOverlay>
      <Card.Title style={{fontSize:"50px"}}>About us</Card.Title>
      <Card.Text style={{fontSize:"25px"}}>
        Towards a dream of a balanced diet
      </Card.Text>
      <Card.Text style={{fontSize:"25px"}}>
          We’re here to serve the best homemade food available at your doorstep.
      </Card.Text>
      <Card.Text style={{fontSize:"25px"}}>
          We are passionate about delivering wholesome food and a rejuvenating experience to your doorstep.
          Freshness, Nutrition, and Purity are to name a few of the Values to be associated with food. Our topmost priority is to deliver these values to your doorstep. 
          Our Mission is to help people learn more about food, eating habits, and ways to stay healthy (not just physically but also spiritually) and ultimately get Joy out of this beautiful blessing called LIFE.
          Natural ingredients
          We use the absolute best ingredients money can buy and EVERYTHING we do is about flavor, quality, and taste that consumers love.
          We understand your need to stay fit and eat healthily and hence we are here with dishes that will not only help you stay fit but are tasty as well.
      </Card.Text>
      <Card.Text style={{fontSize:"25px"}}>Live your best life with Social Kitchen</Card.Text>
    </Card.ImgOverlay>
  </Card>
 <div className='review' style={{margin:"20px 30px" }}>
  <h4 style={{textAlign:"center"}}> Testimonials</h4>
 <CardGroup style={{margin:"20px 30px" }}>
  
  <Card>
  <Card.Img variant="top" src="./images/hr2.jpeg" height={"165px"}  />
    <Card.Body>
      <Card.Title>Erica Wayne</Card.Title>
      <Card.Text>(Research Assistant, Harvard University)</Card.Text>
      <Card.Text>
      The people that work here are so nice! The delivery is seriously so awesome.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p class="pstart">Rating: <span class="red-star">★</span><span
                                class="red-star">★</span><span class="red-star">★</span><span
                                class="red-star">★</span><span class="w-star">★</span></p>
    </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src="./images/hr3.jpeg" height={"165px"}  />
    <Card.Body>
      <Card.Title>Rajeev Kapoor</Card.Title>
      <Card.Text>(Student, Boston University)</Card.Text>
      <Card.Text>
      Craving Indian food and thought I'd finally try this. My friend and I ordered a paneer dosa and ground lamb along with mango lassi and gulab jamun. Loved it!
.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p class="pstart">Rating: <span class="red-star">★</span><span
                                class="red-star">★</span><span class="red-star">★</span><span
                                class="red-star">★</span><span class="red-star">★</span></p>        </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src="./images/hr8.jpg" height={"165px"}  />
    <Card.Body>
      <Card.Title>Lisa Davis</Card.Title>
      <Card.Text>(Academic Assistant, Northeastern University)</Card.Text>
      <Card.Text>
      Hands down best loaded fries I've had in a while. If your looking for good bar food and
      drinks don't forget to stop here..{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p class="pstart">Rating: <span class="red-star">★</span><span
                                class="red-star">★</span><span class="red-star">★</span><span
                                class="red-star">★</span><span class="red-star">★</span></p>        </Card.Footer>
  </Card>
  <Card>
  <Card.Img variant="top" src="./images/hr9.jpg" height={"165px"}  />
    <Card.Body>
      <Card.Title>Alex Young</Card.Title>
      <Card.Text>(Student, Northeastern University )</Card.Text>
      <Card.Text>
      It's in a convenient option. If you like minimal human interaction you can order with the touch screen things.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p class="pstart">Rating: <span class="red-star">★</span><span
                                    class="red-star">★</span><span class="red-star">★</span><span
                                    class="red-star">★</span><span class="red-star">★</span></p>
    </Card.Footer>
  </Card>
  

</CardGroup>

 </div>

   </>
  )
}
