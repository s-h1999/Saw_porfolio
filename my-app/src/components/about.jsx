export default function About({ increment }) {
  return (
    <section id="ABOUT" className="p-4">
      <div className="max-w-3xl mx-auto px-1 lg:px-0">
        <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-8">
          My Story

          <div className="pt-2">
            <span className="p-b absolute left-0 w-20 md:w-30 lg:w-35 h-[3px] bg-neutral-600">
              <span className="block h-full bg-sky-500 w-1/3"></span>
            </span>
          </div>
        </h2>
        
        {/*
          Tip: Break the large <p> block into multiple <p> tags,
          and use an 'mb-x' class (like mb-4) on each to create professional spacing.
          The 'p-2' is moved from the parent <p> to the <div> below the title for better scoping.
        */}
        <div className="text-gray-300">
          <p className="mb-4">
            I am passionate about software development and truly enjoy building user interfaces (UIs). I focus on making them perfectly designed and also easy for everyone to use (accessible). I love the part of my job where design ideas and engineering skills come together to create smooth experiences. The best work not only looks great but is also built carefully to work fast and be simple for people to navigate.
          </p>

          <p className="mb-4">
            I serve as a Technical Assistant at Asia-Pacific International University (APIU). My primary responsibilities there are supporting the computer lab and providing technical assistance for events. Although this role involves general tech support, I actively use this time to sharpen my problem-solving skills and deepen my foundational knowledge in areas like system architecture and user support—skills that are essential for growth in the developer field. I'm constantly preparing to move into a role where I can focus on software development.
          </p>

          <p className="mb-4">
            My past work experience is quite diverse. I've held roles focused on administrative work, managing finances, and serving as an education officer for previous companies. Since these were NGOs (Non-Governmental Organizations), my focus was always on contributing to their mission. I mostly worked with the community, giving them technical support to help them implement their projects. Through this work, I realized my passion for IT and my strong desire to explore the field more.
          </p>

          <p>
            In my spare time, I love to discuss tech projects and hear future predictions for technology. I enjoy brainstorming what people need and then turning those ideas into my own personal projects. For relaxation, I gather with friends, and sometimes we play Takatraw. I also love spending time with my wife and our two cats.
          </p>
        </div>
      </div>
    </section>
  );
}