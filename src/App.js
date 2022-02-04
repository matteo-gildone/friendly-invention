import { Intro } from "./screens/intro";
import { CharacterCreation } from "./screens/character-creation";
import { useScreen } from "./context/screen";

const APP_SCREENS = {
  intro: <Intro />,
  "character-creation": <CharacterCreation />,
};

function App() {
  const { stateScreen } = useScreen();
  return (
    <div
      className={
        "container mx-auto p-4 font-cinzeldecorative max-w-2xl  text-center"
      }
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {APP_SCREENS[stateScreen] || <p>Screen not available!</p>}
    </div>
  );
}

export default App;
