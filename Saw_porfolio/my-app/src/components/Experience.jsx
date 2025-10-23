// 1. Define the data array outside the component
const experienceData = [
  {
    id: 1,
    time: "Present 2025",
    title: "Initial Front-End Developer Role",
    description: "Explore on modern React web apps with a focus on responsive design and access.",
  },
  {
    id: 2,
    time: "2023 - 2024",
    title: "Implementation figma and wordpress for APIU project",
    description: "Developed and maintained client websites using HTML, CSS, JavaScript, and basic CMS integration.",
  },
  {
    id: 3,
    time: "2022",
    title: "Shwe Kyun Thar Company",
    description: "Worked as an Education Officer, coordinating educational programs and providing technical support.",
  },
  {
    id: 4,
    time: "2021",
    title: "Dawna Hinthar Company",
    description: "Worked as an Finance Officer, managing financial records and assisting with budgeting.",
  },

  {
    id: 5,
    time: "2020",
    title: "Local Resource Center",
    description: "Provided Administrative support and basic IT assistance to community members.",
  },


];

// 2. Define a reusable component using props
function ExperienceItem({ time, title, description }) {
  // The original Tailwind CSS structure for a single item
  return (
    <>
      <div className="font-semibold text-gray-300">{time}</div>
      <div>
        <p className="text-gray-300 pb-1">{title}</p>
        <p className="text-sm mt-2 text-gray-300">
          {description}
        </p>
        {/* The original code had a <br /> here, which is better replaced by proper spacing utilities, 
            but keeping the existing structure's intent. */}
        
      </div>
    </>
  );
}


// 3. Refactor the main component to use the data and the reusable component
export default function Experience() {
  return (
    <section id="EXPERIENCE" className="p-4">
      <div className="max-w-3xl mx-auto px-1 lg:px-0">
        <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-10">
          My Journey

          {/* This is for underline effect */}
          <div className="pt-2">
            <span className="p-b absolute left-0 w-28 md:w-40 lg:w-40 h-[3px] bg-neutral-600">
              <span className="block h-full bg-sky-500 w-1/3"></span>
            </span>
          </div>
        </h2>

        <div className="space-y-6"> 
          {/* Map over the array to render the experience items */}
          <div className="grid grid-cols-[1fr_3fr] gap-8">
            {experienceData.map((item) => (
              <ExperienceItem
                key={item.id} // Essential for list rendering in React
                time={item.time}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}