import { useCharacter } from "../context/character";

const CharacterCreation = () => {
  const { stateCharacter } = useCharacter();
  console.log(JSON.stringify(stateCharacter, null, 2));
  return (
    <section data-testid="content" className="my-4">
      <p className="mb-4">
        Strength cartographer bow spell casting dexterity ogre. Dps polearm
        intelligence ambush roll for initiative gnoll.
      </p>
    </section>
  );
};

export { CharacterCreation };
