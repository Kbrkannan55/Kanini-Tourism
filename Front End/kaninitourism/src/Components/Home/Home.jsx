import React from 'react'
import './Home.css'
import Service1 from '../../Assets/service1.png'
import Destination1 from '../../Assets/desti1 (1).png'
import Destination2 from '../../Assets/desti1 (2).png'
import Destination3 from '../../Assets/desti1 (3).png'
import Destination4 from '../../Assets/desti1 (4).png'
import Destination5 from '../../Assets/Thailand.jpg'
import Destination6 from '../../Assets/thailand1.jpg'
import Icon1 from '../../Assets/icon1.png'
import Icon2 from '../../Assets/icon2.png'
import Icon3 from '../../Assets/icon3.png'
import Blog1 from '../../Assets/travel1.jpg'
import Blog2 from '../../Assets/travel2.jpg'
import Blog3 from '../../Assets/travel3.jpg'
import Review from '../../Assets/review.png'
import Navbar from '../Navbar/Navbar'
import Blog4 from '../../Assets/travel4.jpg'
import Footer from '../Footer/Footer'



const Home = () => {



  const topFunction=()=>{
      document.body.scrollTop=0;
      document.documentElement.scrollTop= 0;
    
    
  }

  return (
    <>


      <Navbar/>
      <div className="background-image" style={{marginTop:'-20px',borderRadius:'70px'}} >
        <h1>travel to explore</h1>
        <a href="#">read more</a>
      </div>


      <div className="our-services">
        <h1>Our <span>services</span></h1>
        <div className="main-services">

          <div class="inner-service">
            <div class="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Transportation <span>Service</span> </h2>
            <p> Efficient and comfortable transportation options to get you around the destination.</p>

          </div>

          <div className="inner-service">
            <div class="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Sight <span>Seeing</span> Activities</h2>
            <p>Explore the best attractions and landmarks with our guided sightseeing tours.</p>

          </div>

          <div className="inner-service">
            <div class="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Adventure <span>Activities</span></h2>
            <p>Experience thrilling adventure activities, from hiking to water sports.</p>

          </div>

          <div class="inner-service">
            <div className="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Get <span>best</span> prices</h2>
            <p>Pricing is the factor where we stand out from others, Massive Discount.</p>

          </div>


        </div>
      </div>


      <div className="recomended-destination">
        <h1>Most Liked <span>destination</span></h1>
        <div className="main-destination">
          <div className="inner-destination">
            <div className="main-image">
              <img src={Destination1} />
            </div>

            <h2>Singapore</h2>
            <p></p>
            <div className="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>

          <div className="inner-destination">
            <div className="main-image">
              <img src={Destination2} />
            </div>
            <h2>Los Vegas</h2>
            <p></p>
            <div className="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>

          <div class="inner-destination">
            <div class="main-image">
              <img src={Destination3} />
            </div>
            <h2>Ooty</h2>
            <p></p>
            <div class="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>
          
          <div class="inner-destination">
            <div class="main-image">
              <img src={Destination4} />
            </div>
            <h2>Black Thunder</h2>
            <p></p>
            <div class="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>

          <div class="inner-destination">
            <div class="main-image">
              <img style={{height:'360px',borderRadius:'15px'}} src={Destination5} />
            </div>
            <h2>Thailand</h2>
            <p></p>
            <div class="dist-icons">
            </div>
          </div>

          <div class="inner-destination">
            <div class="main-image">
              <img style={{height:'360px',borderRadius:'15px',boxShadow:'5px 5px 10px grey'}} src={Destination6} />
            </div>
            <h2>Vagamon</h2>
            <p></p>
            <div class="dist-icons">

            </div>
          </div>
        </div>
      </div>


      <div class="reviews">
        <h1>happy customer</h1>
        <div class="mian-review">
          <div class="inner-review">
            <p>Service Provided by them was faculus, I really liked it</p>

            <div class="review-client">
              <img src={Review} />
              <span>Jothika</span>
            </div>
          </div>


          <div class="inner-review">
            <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them</p>

            <div class="review-client">
              <img src={Review} />
              <span>Priya</span>
            </div>
          </div>


          <div class="inner-review">
            <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them</p>

            <div class="review-client">
              <img src={Review} />
              <span>Lavanya</span>
            </div>
          </div>


          <div class="inner-review">
            <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them. I had suggested many friends to book a trip with these people.</p>

            <div class="review-client">
              <img src={Review} />
              <span>Keerthika</span>
            </div>
          </div>
        </div>
      </div>

      <button onClick={topFunction()} id="myBtn">UP</button>
      <Footer/>
    </>
  )
}

export default Home