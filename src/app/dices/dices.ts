import { Dice } from './dice';

export const DICES: Dice[] = [
  { id: 4, name: 'k4', image: "../assets/k4.jpg", description: "Четыре грани"},
  { id: 6, name: 'k6', image: "../assets/k6.jpg", description:  "Шесть граней"},
  { id: 8, name: 'k8', image: "../assets/k8.jpg", description:   "Восемь граней"},
  { id: 10, name: 'k10', image:"../assets/k10.jpg", description:   "Десять граней"},
  { id: 12, name: 'k12', image: "../assets/k12.jpg", description:  "Двенадцать граней" },
  { id: 20, name: 'k20', image: "../assets/k20.jpg", description:  "Двадцать граней" },
  { id: 100, name: 'k100', image: '', description: "Сто граней"  },
];
