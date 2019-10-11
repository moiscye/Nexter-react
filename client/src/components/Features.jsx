import React from "react";

const featureList = [
  {
    title: "World best luxury homes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetudistinctio necessitatibus pariatur voluptatibus.",
    logo: "world.svg"
  },
  {
    title: " Only the best properties",
    description:
      "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    logo: "trophy.svg"
  },
  {
    title: "All homes in best location",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. necessitatibus pariatur voluptatibus.",
    logo: "location.svg"
  },
  {
    title: "Your home in one week",
    description:
      "Lorem, ipsum dolor sit amet consectetur a necessitatibus pariatur voluptatibus.",
    logo: "key.svg"
  },
  {
    title: "Top one realtors",
    description:
      "Lorem, ipsum dolor sit amet consectetur . Tenetudistinctio necessitatibus pariatur voluptatibus.",
    logo: "presentation.svg"
  },
  {
    title: "Secure payments on nexter",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  voluptatibus.",
    logo: "lock.svg"
  },
  {
    title: " Only the best properties",
    description:
      "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    logo: "trophy.svg"
  },
  {
    title: "All homes in best location",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. necessitatibus pariatur voluptatibus.",
    logo: "location.svg"
  },
  {
    title: "Your home in one week",
    description:
      "Lorem, ipsum dolor sit amet consectetur a necessitatibus pariatur voluptatibus.",
    logo: "key.svg"
  }
];

const Features = () => {
  return (
    <div className="features">
      {featureList.map(({ title, description, logo }, id) => (
        <div className="feature" key={id}>
          <img
            src={require(`../img/SVG/${logo}`)}
            alt={`Logo ${id + 1}`}
            className="feature__icon"
          />
          <h4 className="heading-4 heading-4--dark">{title}</h4>
          <p className="feature__text">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
