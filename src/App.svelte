<script>
  let characters = [
    { name: "Ryuk", flag: false },
    { name: "Character 2", flag: false },
    { name: "Character 3", flag: false },
  ];
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
          alert("yay");
        } else {
          alert("nah");
        }
    }
  }

  function checkFlag() {
    characters[0].flag = true;
    console.log(selectedCharacter, "selected");
  }
</script>

<main on:click={handleClick}>
  <div
    class="bounding-box"
    style="top: 2920px; left: 240px; width: 45px; height:95px;"
    on:click={checkFlag}
  />

  {#if show == true}
    <ul style="position: absolute; top: {mouseY}px; left: {mouseX}px;">
      {#each characters as character}
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
