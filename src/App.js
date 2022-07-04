import "./App.css";
import Title from "./components/Title";
import FruitCard from "./components/FruitCard";

function App() {
  return (
    <div className="App">
      {/* <main>
        <Title content="Some Simple Title via <<Props>>" />
      </main> */}
      <FruitCard
        image="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        name="Banana"
        description="React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
      />
      <FruitCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg"
        name="Kiwi"
        description="In fact, a kid is also the name of a baby goat!"
      />
      <FruitCard
        image="https://leprimeurduchef.com/260-large_default/fruit-of-passion.jpg"
        name="Passion Fruit"
        description="So yeah, you won't be able to look these images up. They're placeholders"
      />
    </div>
  );
}

export default App;
