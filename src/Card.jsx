import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardPropBody from "./CardPropBody";
import CardFooter from "./CardFooter";
import CardButton from "./CardButton";

const phrases = [
  "Knowledge is cultivated in solitude, but character in the furious waves of life",
  "Primero muerto que bañado en sangre",
  "the grass is greener where you water it",
  "persistence overcomes resistance",
  "The blessing we're looking for is in the work that we're doing",
  "Success is 99% sweat and 1% luck",
];

function Card() {
  // Logic - where we write JS
  function sayHi() {
    console.log("Hi!");
  }

  sayHi();

  // UI - where we write HTML and CSS, It HAS to be returned
  return (
    <div>
      <CardHeader />
      <CardBody />
      {phrases.map((phrase, index) => (
        <CardPropBody key={index} text={phrase} />
      ))}
      <CardButton />
      <CardFooter />
    </div>
  );
}

export default Card;
