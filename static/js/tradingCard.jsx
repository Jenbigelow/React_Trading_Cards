'use strict';

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];

function TradingCard(props) {
  console.log(props)
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill:{props.skill} </h2>
    </div>
  );
}

function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        key={currentCard.cardId}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

// ReactDOM.render(
  // <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
  // document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
  // <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
  // document.querySelector('#float'),
// );

// ReactDOM.render(
  // <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
  // document.querySelector('#llambda'),
// );

// ReactDOM.render(
  // <TradingCard name="Polymorphism" skill="changing shape like a liquid" imgUrl="/static/img/polymorphism.jpeg" />,
  // document.querySelector('#polymorphism'),
// );

// ReactDOM.render(
  // <TradingCard name="Placeholder" skill="being a placeholder" imgUrl="/static/img/placeholder.png" />,
  // document.querySelector('#placeholder'),
// );
ReactDOM.render(
  <TradingCardContainer/>, document.querySelector('#cards')
)
// for(const tradingCardDatum of tradingCardData){
// console.log(tradingCardDatum.name, tradingCardDatum.skill);
// }