import type { SkillCategory, Translation } from '../types';

export const getSkillCategories = (t: Translation): SkillCategory[] => [
  {
    title: t.skills.mobile,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Expo", level: 95 },
      { name: "Android (Java)", level: 75 },
      { name: "React Navigation", level: 90 },
      { name: "Context API / Redux", level: 85 },
      { name: "AsyncStorage / SQLite", level: 90 }
    ]
  },
  {
    title: t.skills.backend,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 80 },
      { name: "Python", level: 70 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: t.skills.tools,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Linux Administration", level: 85 },
      { name: "Firebase", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 }
    ]
  },
  {
    title: t.skills.other,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Google Play Console", level: 90 },
      { name: "AdMob Integration", level: 85 },
      { name: "Google Maps API", level: 80 },
      { name: "Push Notifications", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Agile / Scrum", level: 80 }
    ]
  }
];