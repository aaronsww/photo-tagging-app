<script>
  let characters = ["Ryuk", "Character 2", "Character 3", "Character 4"];
  let show = false;
  let mouseX = 0;
  let mouseY = 0;

  function handleClick(event) {
    show = true;
    mouseX = event.pageX;
    mouseY = event.pageY;
    console.log("Mouse coordinates:", event.clientX, event.clientY);
  }

  // Add this function in your script section
  function selectCharacter(character) {
    selectedCharacter = character;
  }
</script>

<main on:click={handleClick}>
  
  <div
    class="bounding-box"
    style="top: 3690px; left: 300px; width: 60px; height: 120px;"
  />

  {#if show == true }
    <ul style="position: absolute; top: {mouseY}px; left: {mouseX}px;">
      {#each characters as character}
        <li on:click={() => selectCharacter(character)}>{character}</li>
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
    height: 8080px;
    background-image: url("/background.jpg");
  }

  .bounding-box {
    position: absolute;
    border: 2px solid red;
  }
</style>
