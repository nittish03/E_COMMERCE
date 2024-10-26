import React, { useEffect, useState } from "react";
import Containeritems from "./Containeritems";
import Carouselitems from "./Carouselitems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Proptypes from "prop-types";

function Container(props) {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(3);
  const [articles1, setArticles1] = useState([]);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  
  const updateData = async () => {
    const url = `https://fakestoreapi.com/products/${
      props.category ? "category/" + props.category : ""
    }?limit=${limit}`;
    const url1 = `https://fakestoreapi.com/products/${
      props.category ? "category/" + props.category : ""
    }`;
    let data = await fetch(url);
    let data1 = await fetch(url1);
    let parsedData = await data.json();
    let parsedData1 = await data1.json();
    setArticles(parsedData);
    setArticles1(parsedData1);
  };
  useEffect(() => {
    updateData();
  }, []);

  const handleNextClick = () => {
    setLimit(limit + 3);
    if (limit === 21) {
      setLimit(limit - 3);
    } else {
      updateData();
    }
  };

  const handlePrevClick = () => {
    setLimit(limit - 3);
    if (limit === 3) {
      document.getElementById("prev").disabled();
      setLimit(limit + 3);
    } else {
      updateData();
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (   
     !loggedIn?
    <>
  <h1 style={{fontSize:"25vh",backgroundColor:"yellow"}} className="text-center" >LOG IN TO ACCESS</h1>
  </>
  :
    <>
    <div style={{color:"white"}} className="container d-flex justify-content-center">
      <h1>{props.category?props.category:""}</h1>
    </div>
      <div className="my-4">
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.id}>
                  <Containeritems
                    title={element.title ? element.title.slice(0, 18) + "..." : ""}
                    imageUrl={element.image}
                    description={element.description ? element.description.slice(0, 50) + "..." : ""}
                    price={element.price ? element.price + "$" : "$"}
                    rating={element.rating.rate ? element.rating.rate : "**"}
                    reviews={element.rating.count ? element.rating.count : "**"}
                  ></Containeritems>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="container"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            id="nxt"
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>

      <div className="my-4">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {articles1.map((e) => {
                return (
                  <div className="col-md-4 mb-4" key={e.id}>
                    <Carouselitems
                      title1={e.title ? e.title.slice(0, 20) + "..." : ""}
                      description1={e.description ? e.description.slice(0, 50) + "..." : ""}
                      image1={e.image}
                    ></Carouselitems>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

    </>
  );
}

export default Container;
