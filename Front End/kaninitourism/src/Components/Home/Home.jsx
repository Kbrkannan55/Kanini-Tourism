import React from 'react'
import './Home.css'
import Service1 from '../../Assets/service1.png'
import Destination1 from '../../Assets/desti1 (1).png'
import Destination2 from '../../Assets/desti1 (2).png'
import Destination3 from '../../Assets/desti1 (3).png'
import Destination4 from '../../Assets/desti1 (4).png'
import Destination5 from '../../Assets/desti1 (5).png'
import Destination6 from '../../Assets/background-mid.jpg'
import Icon1 from '../../Assets/icon1.png'
import Icon2 from '../../Assets/icon2.png'
import Icon3 from '../../Assets/icon3.png'
import Blog1 from '../../Assets/travel1.jpg'
import Blog2 from '../../Assets/travel2.jpg'
import Blog3 from '../../Assets/travel3.jpg'
import Review from '../../Assets/review.png'
import Navbar from '../Navbar/Navbar'
import Blog4 from '../../Assets/travel4.jpg'



const Home = () => {


  return (
    <>


      <Navbar/>
      <div className="background-image" style={{marginTop:'-20px'}}>
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
            <h2>Get <span>best</span> prices</h2>
            <p> Aut nisi ratione earum, magni adipisci quae, esse minima tenetur iste animi, eveniet facilis accusantium accusamus recusandae assumenda hic architecto modi quod.</p>

          </div>

          <div className="inner-service">
            <div class="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Get <span>best</span> prices</h2>
            <p>Aut nisi ratione earum, magni adipisci quae, esse minima tenetur iste animi, eveniet facilis accusantium accusamus recusandae assumenda hic architecto modi quod.</p>

          </div>

          <div className="inner-service">
            <div class="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Get <span>best</span> prices</h2>
            <p>Aut nisi ratione earum, magni adipisci quae, esse minima tenetur iste animi, eveniet facilis accusantium accusamus recusandae assumenda hic architecto modi quod.</p>

          </div>

          <div class="inner-service">
            <div className="inner-icons">
              <img src={Service1}></img>
            </div>
            <h2>Get <span>best</span> prices</h2>
            <p>Aut nisi ratione earum, magni adipisci quae, esse minima tenetur iste animi, eveniet facilis accusantium accusamus recusandae assumenda hic architecto modi quod.</p>

          </div>


        </div>
      </div>


      <div className="recomended-destination">
        <h1>We Preferred <span>destination</span></h1>
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
              <img src={Destination5} />
            </div>
            <h2>Thailand</h2>
            <p></p>
            <div class="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>

          <div class="inner-destination">
            <div class="main-image">
              <img src={Destination6} />
            </div>
            <h2>Vagamon</h2>
            <p></p>
            <div class="dist-icons">
              <img src={Icon1} />&nbsp;&nbsp;&nbsp;
              <img src={Icon2} />&nbsp;&nbsp;&nbsp;
              <img src={Icon3} />
            </div>
          </div>
        </div>
      </div>



      <div class="our-blog">
        <h1>our <span>blog</span></h1>
        <div class="mian-blog">

          <div class="inner-blog">
            <img src={Blog1} />
            <img src={Blog4}/>
          </div>


          <div class="inner-blog blog-images">
            <img src={Blog2} />
            <img src={Blog3} />
          </div>




        </div>
      </div>







      <div class="reviews">
        <h1>happy <span>customer</span></h1>
        <div class="mian-review">
          <div class="inner-review">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus perferendis hic dignissimos soluta inventore quisquam velit commodi ad debitis pariatur laudantium totam explicabo, vitae ipsum sit saepe? Veritatis, facere?</p>

            <div class="review-client">
              <img src={Review} />
              <span>Name goes here</span>
            </div>
          </div>


          <div class="inner-review">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloribus perferendis hic dignissimos soluta inventore quisquam velit commodi ad debitis pariatur laudantium totam explicabo, vitae ipsum sit saepe? Veritatis, facere?</p>

            <div class="review-client">
              <img src={Review} />
              <span>Name goes here</span>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Home