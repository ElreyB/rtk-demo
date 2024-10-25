import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Locations from "./components/Locations";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Rick and Morty Explorer</h1>
      <CharacterDetail />
      <Characters />
      <Episodes />
      <Locations />
    </div>
  );
}

export default App;
