import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardPropBody from "./CardPropBody";
import CardFooter from "./CardFooter";

function Card() {
  // Logic - where we write JS
  function sayHi() {
    console.log("Hi!");
  }

  sayHi();

  const soccerText = "I love Soccer";

  // UI - where we write HTML and CSS, It HAS to be returned
  return (
    <div>
      <CardHeader />
      <CardBody />
      <CardPropBody text={"I love baseball"} />
      <CardPropBody text={"I love Basketball"} />
      <CardPropBody text={soccerText} />
      <CardPropBody text={"I love Swimming"} />
      <CardPropBody message={"I love Karate"} />
      <CardFooter />
    </div>
  );
}

export default Card;
