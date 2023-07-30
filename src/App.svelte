<script>
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
  <div
    class="bounding-box"
    style="top: 2920px; left: 240px; width: 45px; height:95px;"
    on:click={() => (characters[0].flag = true)}
  />
  <div
    class="bounding-box"
    style="top: 3810px; left: 590px; width: 70px; height:65px;"
    on:click={() => (characters[1].flag = true)}
  />
  <div
    class="bounding-box"
    style="top: 4020px; left: 970px; width: 130px; height:180px;"
    on:click={() => (characters[1].flag = true)}
  />
  <div
    class="bounding-box"
    style="top: 4830px; left: 880px; width: 50px; height:40px;"
    on:click={() => (characters[2].flag = true)}
  />
  <div
    class="bounding-box"
    style="top: 4990px; left: 1460px; width: 10px; height:40px;"
    on:click={() => (characters[3].flag = true)}
  />
  <div
    class="bounding-box"
    style="top: 5915px; left: 950px; width: 60px; height:60px;"
    on:click={() => (characters[4].flag = true)}
  />

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

  .bounding-box {
    position: absolute;
    border: 2px solid red;
  }
</style>
