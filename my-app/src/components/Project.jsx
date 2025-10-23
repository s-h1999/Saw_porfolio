// 1. Define the data array outside the component
const projectData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "This is a personal portfolio project built with React and Tailwind CSS. It showcases my skills, experiences, and projects in a modern and responsive design.",
    imageSrc: "slo.png",
    imageAlt: "Project Preview: My Portfolio Website",
    // You might want to add links here later:
    // liveLink: "https://yourportfolio.com",
    // repoLink: "https://github.com/your/repo",
  },
  {
    id: 2,
    title: "E-commerce Redesign Concept",
    description: "A front-end redesign of a mock e-commerce store focusing on improved mobile user experience and faster load times. Built with Next.js and styled-components.",
    imageSrc: "slo.png", // Replace with a different image source later
    imageAlt: "Project Preview: E-commerce Redesign",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A full-stack application for managing daily tasks and projects. Features user authentication, CRUD operations, and state management using Redux.",
    imageSrc: "slo.png", // Replace with a different image source later
    imageAlt: "Project Preview: Task Management App",
  },
];

// 2. Define a reusable component using props
function ProjectItem({ title, description, imageSrc, imageAlt }) {
  // The original Tailwind CSS structure for a single project item
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 bg-neutral-800 p-4 rounded-lg border border-neutral-700 border-3 mb-6">
      {/* Photo */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0"
      />

      {/* Text beside the photo */}
      <div className="text-center md:text-left">
        <h3 className="text-xl text-gray-300 font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// 3. Refactor the main component to use the data and the reusable component
export default function Project() {
  return (
    <section id="PROJECT" className="p-4">
      <div className="max-w-3xl mx-auto px-1 lg:px-0">
        
        <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-12">
          What I Create

          <div className="pt-2">
            <span className="p-b absolute left-0 w-35 md:w-45 lg:w-48 h-[3px] bg-neutral-600">
              <span className="block h-full bg-sky-500 w-1/3"></span>
            </span>
          </div>
        </h2>

        {/* Map over the array to render the project items */}
        {projectData.map((project) => (
          <ProjectItem
            key={project.id} // Essential for list rendering in React
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}

        {/* Note: I removed the 'mb-6' from the last item in the map, 
             which was present in your original structure's last item's parent div.
             The ProjectItem component now handles 'mb-6', which may result in an 
             extra margin at the bottom of the section. If you need to remove the 
             bottom margin on the very last item, you would need a slightly more 
             complex conditional className check within the map. */}
      </div>
    </section>
  );
}