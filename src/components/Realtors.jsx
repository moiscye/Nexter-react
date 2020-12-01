import React from "react";

const realtorList = [
  {
    name: "Erik Feinman",
    sold: 245,
    image: "realtor-1.jpeg"
  },
  {
    name: "Kim Brown",
    sold: 212,
    image: "realtor-2.jpeg"
  },
  {
    name: "Toby Ramsey",
    sold: 198,
    image: "realtor-3.jpeg"
  },
  {
    name: "Erik Feinman",
    sold: 245,
    image: "realtor-1.jpeg"
  },
  {
    name: "Kim Brown",
    sold: 212,
    image: "realtor-2.jpeg"
  },
  {
    name: "Toby Ramsey",
    sold: 198,
    image: "realtor-3.jpeg"
  }
];

const Realtor = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3 realtors__align">Top Realtors</h3>
      <div className="realtors__list">
        {realtorList.map(({ name, sold, image }, id) => (
          <React.Fragment key={id}>
            <img
              src={require(`../img/${image}`)}
              alt={`Realtor ${id + 1}`}
              className="realtors__img"
            />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">{name}</h4>
              <p className="realtors__sold">{`${sold} houses sold`}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Realtor;
