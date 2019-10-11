import React from "react";

const Gallery = () => {
  //fill the array of given size secuencially
  const fillRange = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((item, index) => start + index);
  };

  //array of 14 elements which is the number of items in the gallery
  const array = fillRange(0, 14 - 1);

  return (
    <section className="gallery" id="gallery">
      {array.map(id => (
        <figure className={`gallery__item gallery__item--${id + 1}`} key={id}>
          <img
            src={require(`../img/gal-${id + 1}.jpeg`)}
            alt={`Gallery Item ${id + 1}`}
            className="gallery__img"
          />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
