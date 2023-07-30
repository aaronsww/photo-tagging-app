import { writable } from 'svelte/store';

export const charactersStore = writable([
  { name: "Ryuk", flag: false },
  { name: "Keanu Reeves", flag: false },
  { name: "Kenny", flag: false },
  { name: "Ferb", flag: false },
  { name: "Spider-Man", flag: false },
]);
