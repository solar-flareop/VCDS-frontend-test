import axios from "axios";
import "../pages/Home/Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const SubService = () => {
  const { mainServiceId } = useParams();
  const [subServices, setSubServices] = useState([]);

  useEffect(() => {
    const fetchSubServices = async () => {
      try {
        const { data } = await axios.get(
          `https://vcds.onrender.com/api/v1/sub-services/${mainServiceId}`
        );
        console.log(data);
        if (data) {
          setSubServices(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubServices();
  }, [mainServiceId]);

  return (
    <>
      <section className="services_section">
        <h2>Our sub Services</h2>
        <div className="services_container">
          {subServices.length !== 0 ? (
            subServices.map((service) => (
              <div className="service_card" key={service._id}>
                <img
                  src={service.sub_service_image}
                  alt="card-image"
                  className="service_card_image"
                />
                <h4 className="card_title">{service.sub_service_name}</h4>
                <p className="card_description">
                  Well get to know the designer and their design philosophy, as
                  well as take a look...
                </p>
              </div>
            ))
          ) : (
            <Spinner animation="border" variant="primary" style={{height:'5rem',width:'5rem'}}/>
          )}
        </div>
        <div className="service_section_btn">
          <button className=" homebtn ">Explore</button>
        </div>
      </section>
    </>
  );
};

export default SubService;
