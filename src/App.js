import "./App.css";
import Title from "./components/Title";
import FruitCard from "./components/FruitCard";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title via <<Props>>" />
      </main>
      <Pokemon
        name="Charizard"
        weight={90}
        awesome={true}
        terrifying={false}
        abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
      />
      <Pokemon
        name="Bulbasaur"
        weight={6.9}
        awesome={true}
        terrifying={false}
        abilities={["Overgrow", "Chlorophyll"]}
      />
      <Pokemon
        name="Mewtwo"
        weight={122}
        awesome={true}
        terrifying={true}
        abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
      />
      <Pokemon
        name="Mega beedrill"
        weight={65}
        awesome={false}
        terrifying={true}
        abilities={["Intimidate", "Unnerve"]}
      />
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
