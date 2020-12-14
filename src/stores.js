import { writable, derived } from 'svelte/store';

export const weight = writable(false);
export const height = writable(false);
export const age = writable(false);

export const visible = writable(false);
export const selectedIndex = writable(0);
export const selectedItem = derived(
  selectedIndex,
  $selectedIndex => items[$selectedIndex ?? 0]
)
export const items = [
  {
    index: 0,
    logo: "./assets/images/planet.png",
    label: "Space",
    facts: [
      {
        text: "You contain You contain You contain You contain You contain You contain You contain You contain You contain You contain You contain You contain You contain You contain {0} atoms",
        calculation: (a, b, c) => a * b * c
      },
      {
        text: "{0} 2",
        calculation: (a, b) => a + b
      }
    ]
  },
  {
    index: 1,
    logo: "./assets/images/dna.png",
    label: "Biology",
    facts: [
      {
        text: "1",
      }
    ]
  },
  {
    index: 2,
    logo: "./assets/images/atom.png",
    label: "Physics",
    facts: [
      {
        text: "1",
      }
    ]
  },
  {
    index: 3,
    logo: "./assets/images/medical-laboratory.png",
    label: "Chemistry",
    facts: [
      {
        text: "1",
      }
    ]
  },
  {
    index: 4,
    logo: "./assets/images/laugh.png",
    label: "Other",
    facts: [
      {
        text: "1",
      }
    ]
  },
];