
import React from "react";
import Card from "./Card";


const cardsData = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/58c9fe99f5e231f0df86179b/1504017391390-HK35326DFYJSSYIVZSIO/party.jpg?format=1500w",
    title: "Event 1",
    description: "This is the first card with some description.",
    buttonText: "Learn More",
  },
  {
    image: "https://www.campustimespune.com/wp-content/uploads/2016/02/sympuls-symbiosis-event-college-life-events-pune.jpg",
    title: "Event 2",
    description: "This is the second card with some description.",
    buttonText: "Learn More",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkzTHskrCa14QFF3VZS8PFivaif6PeFLJ_w&s",
    title: "Event 3",
    description: "This is the third card with some description.",
    buttonText: "Learn More",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4F65kk7xAC64Q2YTe3ZCUu_BYxFTL3xCjAQ&s",
    title: "Event 4",
    description: "This is the fourth card with some description.",
    buttonText: "Learn More",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAhI1tH8qypZE4oYMrRz7aULbjMnWUflTXA&s",
    title: "Event 5",
    description: "This is the fifth card with some description.",
    buttonText: "Learn More",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n_sbg1Yb2nveOyRq_27P8U0O1p0caFwpMw&s",
    title: "Event 6",
    description: "This is the sixth card with some description.",
    buttonText: "Learn More",
  },
];

function Event() {
  return (
    <div className="app">
      <section className="content">
        <h1 className="text-4xl font-bold text-center mb-8">EVENTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Event;
