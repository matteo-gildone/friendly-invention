import { Button } from "../components/button";
import { useScreen } from "../context/screen";

const Intro = () => {
  const { dispatch } = useScreen();
  return (
    <section data-testid="content" className="my-4">
      <p className="mb-4">
        Strength cartographer bow spell casting dexterity ogre. Dps polearm
        intelligence ambush roll for initiative gnoll.
      </p>
      <Button
        data-testid="button"
        onClick={() =>
          dispatch({ type: `SET_SCREEN`, payload: "character-creation" })
        }
      >
        Begin your journey!
      </Button>
    </section>
  );
};

export { Intro };
