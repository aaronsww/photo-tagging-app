<script>
  export let top;
  export let left;
  export let width;
  export let height;
  export let onCharacterClick;
</script>

<div
  class="bounding-box"
  style={`top: ${top}px; left: ${left}px; width: ${width}px; height: ${height}px;`}
  on:click={onCharacterClick}
/>

<style>
    .bounding-box {
      position: absolute;
      /* border: 2px solid red; */
    }
</style>