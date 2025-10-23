// 1. Updated data structure to include the display level (e.g., '90%')
const skillData = [
  // The percentage prop is the Tailwind CSS width class
  // The level prop is the text displayed to the user
  { id: 1, name: "HTML5", percentage: "w-[90%]", level: "90%" },
  { id: 2, name: "CSS3 / Tailwind CSS", percentage: "w-[85%]", level: "85%" },
  { id: 3, name: "JavaScript / TypeScript", percentage: "w-[80%]", level: "80%" },
  { id: 4, name: "React / Next.js", percentage: "w-[75%]", level: "75%" },
  { id: 5, name: "Node.js / Express", percentage: "w-[60%]", level: "60%" },
  { id: 6, name: "Databases (SQL/NoSQL)", percentage: "w-[50%]", level: "50%" },
];

// 2. Updated reusable component to accept and display the 'level' prop
function SkillItem({ name, percentage, level }) {
  return (
    <div className="mb-6">
      {/* Skill Name and Percentage Level */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 text-base font-semibold">{name}</span>
        {/* New: Display the percentage level */}
        <span className="text-sky-400 text-base font-medium">{level}</span>
      </div>
      
      {/* Skill Bar (Adjusted Height) */}
      {/* Outer bar (background) is h-2 */}
      <div className="w-full bg-neutral-600 rounded-full h-2">
        {/* Inner bar (progress) is also h-2 for a slimmer look */}
        <div className={`bg-sky-500 h-2 rounded-full ${percentage}`}></div>
      </div>
    </div>
  );
}

// 3. The main component remains clean and uses the map function
export default function Skill() {
  return (
    <section id="SKILLS" className="p-4">
      <div className="max-w-3xl mx-auto px-1 lg:px-0">
        <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-10">
          My Skillset
          <div className="pt-2">
            <span className="p-b absolute left-0 w-28 md:w-36 lg:w-40 h-[3px] bg-neutral-600">
              <span className="block h-full bg-sky-500 w-1/3"></span>
            </span>
          </div>
        </h2>

        <div className="p-4 bg-neutral-800 rounded-lg">
          {skillData.map((skill) => (
            <SkillItem
              key={skill.id}
              name={skill.name}
              percentage={skill.percentage}
              level={skill.level} // Pass the new 'level' prop
            />
          ))}
        </div>
      </div>
    </section>
  );
}