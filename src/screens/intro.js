import { Button } from "../components/button";
import { useScreen } from "../context/screen";
import { useCharacter } from "../context/character";

const Intro = () => {
  const { dispatchScreen } = useScreen();
  const { dispatchCharacter } = useCharacter();

  return (
    <section data-testid="content" className="my-4 text-center">
      <p className="mb-2">You wake up in the deep dark woods.</p>
      <p className="mb-10">Start your journey?</p>
      <Button
        data-testid="button"
        primary
        onClick={() => {
          dispatchScreen({
            type: `CHANGE_SCREEN`,
            payload: "character-creation",
          });
          dispatchCharacter({ type: `CREATE_CHARACTER` });
        }}
      >
        Begin your journey!
      </Button>
      <Button data-testid="button">I'm a chicken!</Button>
    </section>
  );
};

export { Intro };
