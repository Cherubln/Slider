import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    index < 0
      ? setIndex(people.length - 1)
      : index > people.length - 1
      ? setIndex(0)
      : setIndex(index);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  const prevPerson = () => {
    setIndex((state) => state - 1);
  };
  const nextPerson = () => {
    setIndex((state) => state + 1);
  };
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> Reviews
        </h2>
        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, quote, image, name, title } = person;
            // more staff coming
            let position = 'nextSlide';
            if (personIndex === index) position = 'activeSlide';
            if (personIndex === (index - 1 + people.length) % people.length)
              position = 'lastSlide';
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            );
          })}
          <button className='prev' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
