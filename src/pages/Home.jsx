import axios from "axios";
import Faq from "../components/Faq";
import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, address);
    setAddress("");
    setEmail("");
    setName("");
  };
  const [mainServices, setMainServices] = useState([]);

  useEffect(() => {
    const fetchMainServices = async () => {
      try {
        const { data } = await axios.get(
          "https://vcds.onrender.com/api/v1/main-services"
        );
        if (data) {
          setMainServices(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMainServices();
  }, []);

  const navigate = useNavigate();
  const getSubService = (mainServiceId) => {
    navigate(`/sub-services/${mainServiceId}`);
  };

  return (
    <>
      <div className="bubble_small"></div>
      <div className="bubble_big"></div>
      <section className="hero_section">
        <div className="hero_1">
          <h2 className="heading">Vijay Computer Data System</h2>
          <div className="description">
            Unleash Your Creativity: Effortlessly Type, Print, and Design with
            Us!
          </div>
          <div>
            <button className="homebtn">Get Started</button>
          </div>
        </div>
        <div className="hero_2">
          <img src="/hero_image.png" alt="" className="hero_image" />
        </div>
      </section>

      {/* Services */}

      <section className="services_section">
        <h2>Our Services</h2>
        <div className="services_container">
          {
            mainServices.map((service) => (
              <div
                className="service_card"
                key={service._id}
                onClick={() => getSubService(service._id)}
              >
                <img
                  src={service.main_service_image}
                  alt="card-image"
                  className="service_card_image"
                />
                <h4 className="card_title">{service.main_service_name}</h4>
                <p className="card_description">
                  Well get to know the designer and their design philosophy, as
                  well as take a look...
                </p>
              </div>
            ))}
        </div>
        <div className="service_section_btn">
          <button className=" homebtn ">Explore</button>
        </div>
      </section>

      {/* FAQ */}

      <section className="faq_container">
        <h2>Frequently Asked Questions</h2>
        <h4>
          We tried to answer most common questions, if you have any additional,
          please get in touch with our friendly team
        </h4>
        <Faq />
      </section>

      {/* Contact us */}

      <section className="contact_us">
        <div className="contact_us_image">
          <img src="/contactus.png" alt="contactus" />
        </div>
        <div className="contact_us_form">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button>Contact Us</button>
          </form>
        </div>
        <div className="contact_us_owner">
          <h3>Conatct Vaibhu4coding</h3>
          <h3>Bansed in Panvel</h3>
        </div>
      </section>
    </>
  );
};

export default Home;
