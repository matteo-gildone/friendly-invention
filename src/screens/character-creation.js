import { useCharacter } from "../context/character";

const CharacterCreation = () => {
  const { stateCharacter } = useCharacter();
  console.log(JSON.stringify(stateCharacter, null, 2));
  return (
    <section data-testid="content" className="my-4">
      <h1 className="text-3xl font-bold ">You look...</h1>
      <p className="mb-4">{stateCharacter.race.description}</p>
      <p className="text-3xl mb-4">
        "Wait, what?!?!?!? I'm a {stateCharacter.race.name}?!?!?!?"
      </p>
      <p className="mb-4">What am I wearing?!?!?</p>
      <p className="mb-4">{stateCharacter.klass.name}</p>
    </section>
  );
};

export { CharacterCreation };
