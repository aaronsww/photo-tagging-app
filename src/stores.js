import { writable } from 'svelte/store';

export const charactersStore = writable([
  { name: "Ryuk", flag: false, path: "./src/assets/images/ryuk.jpg" },
  { name: "Keanu Reeves", flag: false, path: "./src/assets/images/keanu-reeves.jpg" },
  { name: "Kenny", flag: false, path: "./src/assets/images/kenny.png" },
  { name: "Ferb", flag: false, path: "./src/assets/images/ferb.jpg" },
  { name: "Spider-Man", flag: false, path: "./src/assets/images/spidey.png" },
]);
