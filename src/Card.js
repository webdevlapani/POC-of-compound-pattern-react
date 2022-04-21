import { createContext, useContext, useState } from "react";

var CardContext = createContext();

function useCardContext() {
  var context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "Child components of Card cannot be rendered outside the Card component!"
    );
  }

  return context;
}

function Card({ children }) {
  var [toggled, setToggled] = useState(false);

  return (
    <CardContext.Provider value={{ toggled, setToggled }}>
      <div className={toggled ? "Card Card--highlight" : "Card"}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

function Heading({ children }) {
  var { toggled } = useCardContext();

  return (
    <h2
      className={
        toggled ? "Card__heading Card__heading--highlight" : "Card__heading"
      }
    >
      {children}
    </h2>
  );
}

function Button({ children }) {
  var { setToggled } = useCardContext();

  return (
    <button
      className="Card__button"
      onClick={() => setToggled((prev) => !prev)}
    >
      {children}
    </button>
  );
}

Card.Button = Button;
Card.Heading = Heading;
export default Card;
