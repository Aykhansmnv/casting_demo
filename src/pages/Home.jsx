import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Home() {
    const slides = [
        { url: "/assets/images/card_image.svg", title: "lucy" },
        { url: "/assets/images/category_actor.svg", title: "valeri" },
        { url: "/assets/images/home_top_img.svg", title: "josh" },
        { url: "/assets/images/card_image.svg", title: "lucy" },
        { url: "/assets/images/category_actor.svg", title: "valeri" },
        { url: "/assets/images/home_top_img.svg", title: "josh" }
      ];
    
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage(currentImage === 0 ? slides.length - 1 : currentImage - 1);
    };

    const handleNextClick = () => {
        setCurrentImage(currentImage === slides.length - 1 ? 0 : currentImage + 1);
    };

  return (
    <>
        <section id="home_top_image">
            <img src="/assets/images/home_top_img.svg" alt="img" />
        </section>
        <section id="categories">
            <div className="container">
                <ul className='row'>
                    <li className='category'>
                        <Link to="/">
                            <img src="/assets/images/category_model.svg" alt="model_category_img"/>
                            <p>Models</p>
                        </Link>
                    </li>
                    <li className='category'>
                        <Link to="/">
                            <img src="/assets/images/category_actor.svg" alt="actor_category_img"/>
                            <p>Actors</p>
                        </Link>
                    </li>
                    <li className='category'>
                        <Link to="/">
                            <img src="/assets/images/category_film_production.svg" alt="film_production_category_img"/>
                            <p>Film&production</p>
                        </Link> 
                    </li>
                    <li className='category'>
                        <Link to="/">
                            <img src="/assets/images/category_child_actors.svg" alt="child_actors_category_img"/>
                            <p>Child actors</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
        <section id="models">
            <div className="container">
                <h2>VIP Actors & Models</h2>
                <div className="row">
                    <div className="col-3 col-md-4 col-xs-6 model">
                        <div className="model-image">
                            <img src="/assets/images/model.img.svg" alt="model_image"/>
                        </div>
                        <div className="model-name">
                            <p>How to Audition for Disney</p>
                        </div>
                    </div>
                    <div className="col-3 col-md-4 col-xs-6 model">
                        <div className="model-image">
                           <img src="/assets/images/home_top_img.svg" alt="model_image"/>
                        </div>
                    </div>
                    <div className="col-3 col-md-4 col-xs-6 model">
                        <div className="model-image">
                            <img src="/assets/images/model.img.svg" alt="model_image"/>
                        </div>
                        <div className="model-name">
                            <p>How to Audition for Disney</p>
                        </div>
                    </div>
                    <div className="col-3 col-md-4 col-xs-6 model">
                        <div className="model-image">
                            <img src="/assets/images/model.img.svg" alt="model_image"/>
                        </div>
                        <div className="model-name">
                            <p>How to Audition for Disney</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="news">
            <div className="container">
                <h2>Magazine</h2>
                <div className="row cards">
                    <div className="col-4 col-md-6 col-xs-12 card">
                        <div className="card_image">
                            <img src="/assets/images/card_image_2.svg" alt="card_img" />
                        </div>
                        <div className="card_body">
                            <h5 className="card_title">How to Audition for <br/>Disney</h5>
                            <p className="card_date">July 13, 2022</p>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-xs-12 card">
                        <div className="card_image">
                            <img src="/assets/images/card_image.svg" alt="card_img" />
                        </div>
                        <div className="card_body">
                            <h5 className="card_title">How to Audition for <br/>Disney</h5>
                            <p className="card_date">July 13, 2022</p>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 card">
                        <div className="card_image">
                            <img src="/assets/images/card_image.svg" alt="card_img" />
                        </div>
                        <div className="card_body">
                            <h5 className="card_title">How to Audition for <br/>Disney</h5>
                            <p className="card_date">July 13, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="most_popular">
            <div className="container">
                <h2>Most popular</h2>
            </div>
            <div className="carousel">
                <div className="carousel_images" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {slides.map((image, index) => (
                        <img key={index} className="carousel_image" src={image.url} alt={`Image ${index}`} />
                    ))}
                </div>
                <button className="carousel_prev" onClick={handlePrevClick}>
                    <i><img src="/assets/images/swiper_prev.svg" alt="Prev" /></i>
                </button>
                <button className="carousel_next" onClick={handleNextClick}>
                    <i><img src="/assets/images/swiper_next.svg" alt="Next" /></i>
                </button>
                </div>
        </section>
        <section id="partners">
           <div className="container">
                <h2>Your partners</h2>
                <div className="row partners_carousel ">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={4}
                        autoplay={{ delay: 2000 }}
                        pagination={{ clickable: true }}
                        style={{overflow:"hidden",maxHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}
                    >
                        <SwiperSlide>
                            <img src="/assets/images/partners1.svg" alt="partners.img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/assets/images/partners2.svg" alt="partners.img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/assets/images/home_top_img.svg" alt="partners.img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/assets/images/partners2.svg" alt="partners.img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/assets/images/partners1.svg" alt="partners.img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/assets/images/partners2.svg" alt="partners.img" />
                        </SwiperSlide>
                    </Swiper>
                </div>            
            </div>             
        </section>
    </>
  )
}

export default Home