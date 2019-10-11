import React, { useState } from "react";
import { ReactComponent as HeartLogo } from "../img/SVG/heart.svg";
import { ReactComponent as Logo1 } from "../img/SVG/map-pin.svg";
import { ReactComponent as Logo2 } from "../img/SVG/profile-male.svg";
import { ReactComponent as Logo3 } from "../img/SVG/expand.svg";
import { ReactComponent as Logo4 } from "../img/SVG/key.svg";
import { Button } from "react-bootstrap";
import ContactModal from "../components/ContactModal";
const houseList = [
  {
    name: "Beautiful family house",
    location: "USA",
    rooms: 6,
    area: "392",
    price: "1,200,000",
    image: "house-1.jpeg"
  },
  {
    name: "Modern Glass Villa",
    location: "UK",
    rooms: 4,
    area: "592",
    price: "1,450,000",
    image: "house-2.jpeg"
  },
  {
    name: "Cozy Country House",
    location: "Canada",
    rooms: 8,
    area: "962",
    price: "2,374,000",
    image: "house-3.jpeg"
  },
  {
    name: "Large Rustical Villa",
    location: "New Zeland",
    rooms: 3,
    area: "592",
    price: "1,700,000",
    image: "house-4.jpeg"
  },
  {
    name: "Majestic Palace House",
    location: "Australia",
    rooms: 6,
    area: "320",
    price: "3,988,000",
    image: "house-5.jpeg"
  },
  {
    name: "Modern Family Apartment",
    location: "Mexico",
    rooms: 6,
    area: "458",
    price: "1,750,000",
    image: "house-6.jpeg"
  },
  {
    name: "Modern Glass Villa",
    location: "UK",
    rooms: 4,
    area: "592",
    price: "1,450,000",
    image: "house-2.jpeg"
  },
  {
    name: "Cozy Country House",
    location: "Canada",
    rooms: 8,
    area: "962",
    price: "2,374,000",
    image: "house-3.jpeg"
  },
  {
    name: "Large Rustical Villa",
    location: "New Zeland",
    rooms: 3,
    area: "592",
    price: "1,700,000",
    image: "house-4.jpeg"
  }
];

const Homes = () => {
  const [showM, setShowM] = useState(false);
  const handleShow = () => setShowM(true);
  const handleClose = () => setShowM(false);

  return (
    <section className="homes" id="homes">
      {/* <Example show={showM} handleClose={handleClose} send={send}/> */}
      <ContactModal show={showM} handleClose={handleClose} />
      {houseList.map(({ location, name, image, price, rooms, area }, id) => (
        <div className="home" key={id}>
          <img
            src={require(`../img/${image}`)}
            alt={`House ${id + 1}`}
            className="home__img"
          />
          <HeartLogo className="home__like" />
          <h5 className="home__name">{name}</h5>
          <div className="home__location">
            <Logo1 />
            <p>{location}</p>
          </div>

          <div className="home__rooms">
            <Logo2 />
            <p>{`${rooms} rooms`}</p>
          </div>

          <div className="home__area">
            <Logo3 />
            <p>
              {area} m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <Logo4 />
            <p>{price}</p>
          </div>
          {/* <button type="button" className="btn home__btn" onClick={handleShow}>
            Contact Realtor
          </button> */}
          <Button
            size="lg"
            block
            variant="primary"
            onClick={handleShow}
            className="home__btn"
          >
            Contact Realtor
          </Button>
        </div>
      ))}
    </section>
  );
};
export default Homes;
