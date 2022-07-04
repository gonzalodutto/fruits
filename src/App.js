import "./App.css";
import FruitCard from "./components/FruitCard";

function App() {
  return (
    <div>
      <FruitCard
        image="https://coding.images/react.jpg"
        title="What is React all about?"
        description="React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
      />
      <FruitCard
        image="https://animal.images/kid.jpg"
        title="A lovely kid"
        description="In fact, a kid is also the name of a baby goat!"
      />
      <FruitCard
        image="https://another.nonexistent/image.jpg"
        title="On placeholder image URLs"
        description="So yeah, you won't be able to look these images up. They're placeholders"
      />
    </div>
  );
}

export default App;
