<script>
  import CharacterBox from './components/CharacterBox.svelte';

  import { charactersStore } from "./stores.js";
  let characters;
  let displayCharacters;
  charactersStore.subscribe((value) => {
    characters = value;
  });
  displayCharacters = characters; //to pop values without affecting the order of array

  let selectedCharacter = "";
  let show = false;
  let mouseX = 0;
  let mouseY = 0;

  function handleClick(event) {
    show = true;
    mouseX = event.pageX;
    mouseY = event.pageY;
    console.log("Mouse coordinates:", event.clientX, event.clientY);
  }

  function selectCharacter(character) {
    selectedCharacter = character.name;
    console.log(selectedCharacter, "selected");
    check();
  }

  function check() {
    switch (selectedCharacter) {
      case "Ryuk":
        if (characters[0].flag == true) {
          displayCharacters = displayCharacters.filter((character) => character.name !== "Ryuk");
        }
        break;
      case "Keanu Reeves":
        if (characters[1].flag == true) {
          displayCharacters = displayCharacters.filter((character) => character.name !== "Keanu Reeves");
        }
        break;
      case "Kenny":
        if (characters[2].flag == true) {
          displayCharacters = displayCharacters.filter((character) => character.name !== "Kenny");
        }
        break;
      case "Ferb":
        if (characters[3].flag == true) {
          displayCharacters = displayCharacters.filter((character) => character.name !== "Ferb");
        }
        break;
      case "Spider-Man":
        if (characters[4].flag == true) {
          displayCharacters = displayCharacters.filter((character) => character.name !== "Spider-Man");
        }
        break;
        
    }
  }
</script>

<main on:click={handleClick}>
  <CharacterBox top={2920} left={240} width={45} height={95} onCharacterClick={() => (characters[0].flag = true)} />
  <CharacterBox top={3810} left={590} width={70} height={65} onCharacterClick={() => (characters[1].flag = true)} />
  <CharacterBox top={4020} left={970} width={130} height={180} onCharacterClick={() => (characters[1].flag = true)} />
  <CharacterBox top={4830} left={880} width={50} height={40} onCharacterClick={() => (characters[2].flag = true)} />
  <CharacterBox top={4990} left={1460} width={10} height={40} onCharacterClick={() => (characters[3].flag = true)} />
  <CharacterBox top={5915} left={950} width={60} height={60} onCharacterClick={() => (characters[4].flag = true)} />

  {#if show == true}
    <ul style="position: absolute; top: {mouseY}px; left: {mouseX}px;">
      {#each displayCharacters as character}
        <li on:click={() => selectCharacter(character)}>{character.name}</li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  img {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: auto;
  }

  main {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 6400px;
    background-image: url("/background.jpg");
    background-size: contain;
  }
</style>
