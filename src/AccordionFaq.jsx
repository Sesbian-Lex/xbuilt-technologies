import './AccordionFaq.css'
import { useState } from 'react'

function AccordionFaq(){
const [activeIndex, setActiveIndex] = useState(null);

const items = [
  {
    title: "Who is this for?",
    content:
      "We work with service businesses (Coaches, Agencies, Consultants, Service based businesses,  and entrepreneurs) Who want a professional online presence and better marketing results."
  },
  {
    title: "Do you write the text for the website?",
    content:
      "Yes. A pretty design is useless without the right words. We write sales-focused copy to make sure your visitors understand what you do and want to buy from you."
  },
  {
    title: "How long does a project take?",
    content:
      "Most projects are completed within 4-6 weeks, depending on the scope and how quickly we receive feedback from you."
  },
  {
    title: "What platforms do you use?",
    content:
      "We specialize in high-conversion platforms like GoHighLevel (GHL) for funnels and automation, ensuring your site is more than just a brochure."
  },
  {
    title: "Is the website mobile friendly?",
    content:
      "Absolutely. All our designs are fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    title: "Do I own the website?",
    content:
      "Yes. Once the final payment is made, you have full ownership of your website, design assets, and content."
  },
  {
    title: "What are the payment terms?",
    content:
      "We typically require a 50% deposit to start the project and the remaining 50% upon completion and launch."
  },  
  {
    title: "Do you offer ongoing support?",
    content:
      "Yes, we offer maintenance packages to keep your site updated, secure, and running smoothly after launch."
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
            <h3 style={{marginLeft : 32}}>{item.content}</h3>
          </div>
        </div>
      ))}
    </div>
  );

}

export default AccordionFaq
