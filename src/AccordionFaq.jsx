import './AccordionFaq.css'
import { useState } from 'react'

function AccordionFaq(){
const [activeIndex, setActiveIndex] = useState(null);

const items = [
  {
    title: "Question 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam obcaecati, placeat omnis deserunt expedita culpa repellendus fuga sit consequatur atque error unde consequuntur ipsa temporibus libero mollitia iure. Tempore.",
  },
  {
    title: "Question 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam obcaecati, placeat omnis deserunt expedita culpa repellendus fuga sit consequatur atque error unde consequuntur ipsa temporibus libero mollitia iure. Tempore.",
  },
  {
    title: "Question 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam obcaecati, placeat omnis deserunt expedita culpa repellendus fuga sit consequatur atque error unde consequuntur ipsa temporibus libero mollitia iure. Tempore.",
  },
];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleItem(index)}
          >
            <h2>
                {item.title}
            </h2>
            <h2 className="icon">
                {activeIndex === index ? "−" : "+"}
            </h2>     
          </button>

          <div className="accordion-content">
            <h3>{item.content}</h3>
          </div>
        </div>
      ))}
    </div>
  );

}

export default AccordionFaq
