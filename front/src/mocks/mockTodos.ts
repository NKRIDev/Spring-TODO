import type { Todo } from "../models/todoModel";

export const mockTodos: Todo[] = [
  {
    id: 1,
    title: "Apprendre TypeScript",
    description: "Lire la doc et pratiquer",
    date: Date.now(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Créer une API Spring Boot",
    description: "Endpoints CRUD pour les todos",
    date: Date.now() + 1000 * 60 * 60 * 24,
    isCompleted: true,
  },
  {
    id: 3,
    title: "Faire le design React",
    description: "Mettre en place MUI + theme",
    date: Date.now() + 1000 * 60 * 60 * 48,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Écrire le README",
    description: "Expliquer le projet et setup",
    date: Date.now() + 1000 * 60 * 60 * 72,
    isCompleted: false,
  },
  {
    id: 5,
    title: "Ajouter les tests unitaires",
    description: "React + Spring Boot",
    date: Date.now() + 1000 * 60 * 60 * 96,
    isCompleted: false,
  },
  {
    id: 6,
    title: "Déployer sur Vercel",
    description: "Frontend React",
    date: Date.now() + 1000 * 60 * 60 * 120,
    isCompleted: false,
  },
  {
    id: 7,
    title: "Déployer sur Heroku",
    description: "Backend Spring Boot",
    date: Date.now() + 1000 * 60 * 60 * 144,
    isCompleted: true,
  },
  {
    id: 8,
    title: "Mettre en place Redux",
    description: "Gestion globale des états",
    date: Date.now() + 1000 * 60 * 60 * 168,
    isCompleted: false,
  },
  {
    id: 9,
    title: "Intégrer les pickers MUI",
    description: "Date et heure pour les todos",
    date: Date.now() + 1000 * 60 * 60 * 192,
    isCompleted: false,
  },
  {
    id: 10,
    title: "Finaliser le styling",
    description: "Tailwind + MUI theme",
    date: Date.now() + 1000 * 60 * 60 * 216,
    isCompleted: true,
  },
]
