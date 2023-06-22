import "./ProductDetail.css";
// import Review from "../../components/Review/Review";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  return (
    <>
      <div className="productContainer">
        <div className="productImage">
          <img src="/productDetailImg.png" alt="product image" />
        </div>
        <div className="productDetails">
          <h2 className="productTitle">minimilstic wedding card</h2>
          <p className="productAvailabile">
            Availability : <span>Available</span>
          </p>
          <div className="productRating">
            <AiFillStar className="ratingStar"/>
            <AiFillStar className="ratingStar"/>
            <AiFillStar className="ratingStar"/>
            <AiFillStar className="ratingStar"/>
            <AiFillStar className="ratingStar"/>
          </div>
          <div className="productDesc ription">
            <ul>
              <li>
                a9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling
              </li>
              <li>
                Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
              </li>
              <li>Hands-free Voice Control, Always Ready</li>
              <li>
                Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker
                Mode
              </li>
              <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
            </ul>
          </div>
          <hr />
          <div className="productQuantity">
            <Button variant="outline-primary">106 cm (42)</Button>
            <Button variant="outline-primary">121 cm (48)</Button>
            <Button variant="outline-primary">139 cm (55)</Button>
            <Button variant="outline-primary">164 cm (65)</Button>
            <Button variant="outline-primary">196 cm (77)</Button>
            <Button variant="outline-primary">210 cm (83)</Button>
          </div>
          <hr />
          <div className="productPrice">
            <h6>Price</h6>
            <h4>Rs. 600.72</h4>
          </div>
          <div className="productButtons">
          <Button variant="primary">Buy Now</Button>
          </div>
        </div>
      </div>
    </>
    // <div className="main-services-detailed">
    //   <div className="links">
    //     <div className="button">
    //       <img className="hexagon-icon" alt="" src="/hexagon.svg" />
    //       <div className="home">Home</div>
    //       <img className="hexagon-icon" alt="" src="/hexagon1.svg" />
    //     </div>
    //     <div className="button1">
    //       <img className="hexagon-icon" alt="" src="/hexagon1.svg" />
    //       <div className="home">Service</div>
    //       <img className="hexagon-icon" alt="" src="/hexagon2.svg" />
    //     </div>
    //     <div className="button">
    //       <img className="hexagon-icon" alt="" src="/hexagon2.svg" />
    //       <div className="home">Account Section</div>
    //       <img className="hexagon-icon" alt="" src="/hexagon2.svg" />
    //     </div>
    //     <div className="button">
    //       <img className="hexagon-icon" alt="" src="/hexagon1.svg" />
    //       <div className="home">Our Customers</div>
    //       <img className="hexagon-icon" alt="" src="/hexagon.svg" />
    //     </div>
    //     <div className="button">
    //       <img className="hexagon-icon" alt="" src="/hexagon.svg" />
    //       <div className="home">About Us</div>
    //       <img className="hexagon-icon" alt="" src="/hexagon.svg" />
    //     </div>
    //   </div>
    //   <div className="hello-kadam">Hello, Kadam!</div>
    //   <img
    //     className="unsplashc8ta0gwpbqg-icon"
    //     alt=""
    //     src="/unsplashc8ta0gwpbqg@2x.png"
    //   />
    //   <img className="logo-website-1" alt="" src="/logo-website-1@2x.png" />
    //   <div className="minimilstic-wedding-card">minimilstic wedding card</div>
    //   <div className="price">Price</div>
    //   <div className="rs-60072">Rs. 600.72</div>
    //   <div className="div">:</div>
    //   <div className="main-services-detailed-child" />
    //   <img className="image-12-icon" alt="" src="/image-12@2x.png" />
    //   <div className="gen5-ai-processor">{`α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling`}</div>
    //   <div className="pixel-dimming-perfect">{`Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume`}</div>
    //   <div className="hands-free-voice-control">
    //     Hands-free Voice Control, Always Ready
    //   </div>
    //   <div className="dolby-vision-iq">
    //     Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
    //   </div>
    //   <div className="eye-comfort-display">
    //     Eye Comfort Display: Low-Blue Light, Flicker-Free
    //   </div>
    //   <div className="availability-available">
    //     <span>Availability:</span>
    //     <span className="available"> Available</span>
    //   </div>
    //   <img className="main-services-detailed-item" alt="" src="/star-1.svg" />
    //   <img className="main-services-detailed-inner" alt="" src="/star-1.svg" />
    //   <img className="star-icon" alt="" src="/star-1.svg" />
    //   <img className="main-services-detailed-child1" alt="" src="/star-1.svg" />
    //   <img className="main-services-detailed-child2" alt="" src="/star-7.svg" />
    //   <img className="main-services-detailed-child2" alt="" src="/star-7.svg" />
    //   <img className="main-services-detailed-child2" alt="" src="/star-1.svg" />
    //   <div className="ellipse-div" />
    //   <div className="main-services-detailed-child5" />
    //   <div className="main-services-detailed-child6" />
    //   <div className="main-services-detailed-child7" />
    //   <div className="main-services-detailed-child8" />
    //   <div className="line-div" />
    //   <div className="main-services-detailed-child9" />
    //   <div className="rectangle-div" />
    //   <div className="cm-42">106 cm (42)</div>
    //   <div className="cm-48">121 cm (48)</div>
    //   <div className="cm-55">139 cm (55)</div>
    //   <div className="cm-65">164 cm (65)</div>
    //   <div className="cm-77">196 cm (77)</div>
    //   <div className="cm-83">210 cm (83)</div>
    //   <div className="main-services-detailed-child10" />
    //   <div className="main-services-detailed-child11" />
    //   <div className="main-services-detailed-child12" />
    //   <div className="div1">1</div>
    //   <img className="frame-icon" alt="" src="/frame.svg" />
    //   <img className="frame-icon1" alt="" src="/frame1.svg" />
    //   <div className="buy-now">Buy Now</div>
    //   <div className="main-services-detailed-child13" />
    //   <div className="main-services-detailed-child14" />
    //   <div className="reviews">Reviews</div>
    //   <div className="add-a-review">+ Add a review</div>
    //   <div className="macbook-pro-16-24">
    //     <Review />
    //     <Review />
    //   </div>
    // </div>
  );
};

export default ProductDetail;
