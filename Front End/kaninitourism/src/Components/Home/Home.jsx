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
import Chatbot from '../Chatbot/Chatbot'
import Allphotos from '../../DisplayPhotos/Allphotos'



const Home = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleScroll = () => {
    const myBtn = document.getElementById('myBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myBtn.style.display = 'block';
    } else {
      myBtn.style.display = 'none';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Configure carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>


      <Navbar />
      <div className='total-home-div'>
        <div className="background-image" style={{ marginTop: '-20px', borderRadius: '10px' }} >
          <h1>Travel to Explore</h1>
          <a style={{ textDecoration: 'none', backgroundColor: 'lightred', width: '150px', borderRadius: '15px', color: 'white', fontSize: '14px' }} href='#our-services'>Read more</a>
        </div>
        <div className="bg1">

        </div>
        <div className="bg2">

        </div>


        <div id='our-services' className="our-services" style={{ fontSize: '14px' }} >
          <h1 style={{ fontSize: '32px' }}>Our Services</h1>
          <div className="main-services">

            <div class="inner-service">
              <div class="inner-icons">
                <img src={Service1}></img>
              </div>
              <h2 style={{ fontSize: '28px' }}>Transportation Service </h2>
              <p style={{ fontSize: '16px' }}> Efficient and comfortable transportation options to get you around the destination.</p>

            </div>

            <div className="inner-service">
              <div class="inner-icons">
                <img src={Service1}></img>
              </div>
              <h2 style={{ fontSize: '28px' }}>Sight Seeing Activities</h2>
              <p style={{ fontSize: '16px' }}>Explore the best attractions and landmarks with our guided sightseeing tours.</p>

            </div>

            <div className="inner-service">
              <div class="inner-icons">
                <img src={Service1}></img>
              </div>
              <h2 style={{ fontSize: '28px' }}>Adventure Activities</h2>
              <p style={{ fontSize: '16px' }}>Experience thrilling adventure activities, from hiking to water sports.</p>

            </div>

            <div class="inner-service">
              <div className="inner-icons">
                <img src={Service1}></img>
              </div>
              <h2 style={{ fontSize: '28px' }}>Get Best Prices</h2>
              <p style={{ fontSize: '16px' }}>Pricing is the factor where we stand out from others, Massive Discount.</p>

            </div>


          </div>
        </div>


        <div className="recomended-destination">
          <h1 style={{ fontSize: '32px' }}>Most Liked Destination</h1>
          <div className="main-destination">
            <div className="inner-destination">
              <div className="main-image">
                <img src={Destination1} />
              </div>

              <h5>Singapore</h5>
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
              <h5>LasVegas</h5>
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
              <h5>Ooty</h5>
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
              <h5>Black Thunder</h5>
              <p></p>
              <div class="dist-icons">
                <img src={Icon1} />&nbsp;&nbsp;&nbsp;
                <img src={Icon2} />&nbsp;&nbsp;&nbsp;
                <img src={Icon3} />
              </div>
            </div>

            <div class="inner-destination">
              <div class="main-image">
                <img style={{ height: '360px', borderRadius: '15px' }} src={Destination5} />
              </div>
              <h5>Thailand</h5>
              <p></p>
              <div class="dist-icons">
              </div>
            </div>

            <div class="inner-destination">
              <div class="main-image">
                <img style={{ height: '360px', borderRadius: '15px', boxShadow: '5px 5px 10px grey' }} src={Destination6} />
              </div>
              <h5>Vagamon</h5>
              <p></p>
              <div class="dist-icons">

              </div>
            </div>
          </div>
        </div>
        <Allphotos />


        <div class="reviews">
          <h4>Happy Customer</h4>
          <div class="mian-review">
            <div class="inner-review">
              <p>Service Provided by them was faculus, I really liked it. I will suggest a lot of friends to make trip.</p>

              <div class="review-client">
                <img src={Review} />
                <span style={{ fontSize: '20px' }}>Jothika</span>
              </div>
            </div>


            <div class="inner-review">
              <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them</p>

              <div class="review-client">
                <img src={Review} />
                <span style={{ fontSize: '20px' }}>Priya</span>
              </div>
            </div>


            <div class="inner-review">
              <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them</p>

              <div class="review-client">
                <img src={Review} />
                <span style={{ fontSize: '20px' }}>Lavanya</span>
              </div>
            </div>


            <div class="inner-review">
              <p>Travel Agent was extremely friendly and I am looking forward to plan many Trips with them. I had suggested many friends to book a trip with these people.</p>

              <div class="review-client">
                <img src={Review} />
                <span style={{ fontSize: '20px' }}> Keerthika</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={topFunction()} id="myBtn">UP</button>
        <Footer />
      </div>
    </>
  )
}

export default Home