interface skill {
  skill: string;
  skillName: string;
}

let skills: skill[] = [
  { skill: "html", skillName: "HTML" },
  { skill: "css", skillName: "CSS" },
  { skill: "node", skillName: "NodeJS" },
  { skill: "python", skillName: "Python" },
  { skill: "docker", skillName: "Docker" },
  { skill: "javascript", skillName: "JavaScript" },
  { skill: "reactjs", skillName: "ReactJS" },
  { skill: "tailwindcss", skillName: "TailwindCSS" },
  { skill: "typescript", skillName: "TypeScript" },
];

const getUniqueSkills = () => {
  const skill: skill[] = skills;
  return skills;
};

export default getUniqueSkills;
