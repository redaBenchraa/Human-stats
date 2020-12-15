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
        text: "We need an elevator {0} your height to reach the moon",
        calculation: (h, w, a) => 38440000000 / h
      }
    ]
  },
  {
    index: 1,
    logo: "./assets/images/dna.png",
    label: "Biology",
    facts: [
      {
        text: "Your body contains {0} ml of blood",
        calculation: (h, w, a) => 0.3669 * h * h * h + 0.03308 * w + 0.1833
      }
    ]
  },
  {
    index: 2,
    logo: "./assets/images/atom.png",
    label: "Physics",
    facts: [
      {
        text: "Light has travelled roughly {0} Km since you were born",
        calculation: (h, w, a) => a * 365 * 24 * 3600 * 300000
      }
    ]
  },
  {
    index: 3,
    logo: "./assets/images/medical-laboratory.png",
    label: "Chemistry",
    facts: [
      {
        text: "From the carbon in your body, you can make almost {0} pencils",
        calculation: (h, w, a) => (w * 0.18) / 0.0015
      }
    ]
  },
  {
    index: 4,
    logo: "./assets/images/laugh.png",
    label: "Other",
    facts: [
      {
        text: "Throughout your life, it's estimated that you have farted {0} times (luckily, the majority of it doesn't smell 😂)",
        calculation: (h, w, a) => 15 * 365 * a
      }
    ]
  },
];