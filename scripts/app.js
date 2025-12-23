// Toggle hamburger menu for small/mobile screens
window.onload = function () {
  const burger = document.querySelector(".navbar-burger");
  const navbarMenu = document.querySelector(".navbar-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
};

// Scroll up to the top of projects section when transitioning between tabs
const tabs = document.querySelectorAll(".tab");
const projectsContainer = document.querySelector(".projects-container");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    projectsContainer.classList.add("change-tab");
    setTimeout(() => {
      projectsContainer.classList.remove("change-tab");
      window.scrollTo(0, document.querySelector("#projects").offsetTop);
    });
  });
});

// Generatte project cards and filter by tab
const projects = [
  {
    image: "images/bdk.png",
    title: "Ballroom Dance Kelowna",
    tags: ["HTMl/CSS", "Freelance"],
    duration: "2025",
    description: "A freelance project for the local ballroom dance scene.",
    link: "https://www.ballroomdancekelowna.ca/",
    projectType: "software-engineering",
  },
  {
    image: "images/mentormatch.png",
    title: "Mentor Match",
    tags: ["React", "Node.js", "Firebase"],
    duration: "September 2020 - April 2021",
    description:
      "A web-based mentorship platform aiming to facilitate the matching process between users seeking to learn skills (Mentees) and individuals who can offer guidance in sought-after skills (Mentors). I liaised directly with an industry client working for my team of four during our year-long Capstone Software Engineering project. During weekly SCRUM stand-ups, I spearheaded task management, while iterating on client feedback in UX prototyping, front-end development, & requirements elicitation.",
    link: "https://github.com/jpabadir/pace-c",
    projectType: "software-engineering",
  },
  {
    image: "images/leftovers_club.png",
    title: "Leftovers Club Website",
    tags: ["PHP", "Javascript", "HTML", "CSS"],
    duration: "January 2020 - April 2020",
    description:
      "Collaborated with one other team member to create a website to streamline UBCO's Leftovers Club membership aquisition and communication processes. I iterated on designs with the club's executives and implemented them on the front-end; added security on the back-end by restricting privileges per user type; and communicated with our database to store and retrieve data to dynamically populate content.",
    link: "https://github.com/VNAJack/COSC360-Leftovers-Website",
    projectType: "software-engineering",
  },
  {
    image: "images/azile.png",
    title: "Azile",
    tags: ["Python", "DialogFlow"],
    duration: "January 2020 - April 2020",
    description:
      "Inspired by the Eliza chatbot, Azile is a chatbot created using Python and Dialogflow. The project solidified Scrum and Pair Programming methodologies, as well as project management fundamentals.",
    link: "https://github.com/shepkeira/Chatbot",
    projectType: "software-engineering",
  },
  {
    image: "images/flare.png",
    title: "Flare",
    tags: ["Flutter", "Dart"],
    duration: "January 2020",
    description:
      "During BC Hacks 2020, my team of four learned Flutter in tandem with the Google Maps API to create an iOS/Android cross-platform community driven application. At the end of the 24-hour long Hackathon, our team won the Google Women in Tech award.",
    link: "https://devpost.com/software/flare-osva8x",
    projectType: "software-engineering",
  },
  {
    image: "images/dreamweavers.png",
    title: "DreamWeavers",
    tags: ["MySQL", "HTML", "CSS"],
    duration: "November - December 2019",
    description:
      "As a part of the Introduction to Databases course (COSC 304), my team of four created a web application to search, categorize, and purchase dreams upon user authentication. I primarily worked on the backend to create the databases' schema, creating queries to handle functionality across the site's pages.",
    link: "https://cosc304.ok.ubc.ca/12304986/tomcat/Lab10/listprod.jsp",
    projectType: "software-engineering",
  },
  {
    image: "images/nopioid.png",
    title: "Nopioid",
    tags: ["React"],
    duration: "March 2017",
    description:
      "Created in response to the increase in fentanyl-related deaths in Metro Vancouver, Nopioid was a project built using React during Northwest Hacks in 2017. I worked with a team of 3 upper-year CS students to gain knowledge of Javascript and front-end frameworks.",
    link: "https://devpost.com/software/nopioid",
    projectType: "software-engineering",
  },
  {
    image: "images/duck_duck_code.png",
    title: "Duck Duck Code",
    tags: ["HTML", "CSS", "Javascript"],
    duration: "July 2016",
    description:
      "Worked with two other team members to create a 2D side scrolling platform game. Learned HTML, CSS, Javascript, and Git version control in the process.",
    link: "http://project-wtd.appspot.com/",
    projectType: "software-engineering",
  },
  {
    image: "images/sheep.jpg",
    title: "CSF Design Challenge",
    tags: ["Figma", "Wireframe", "User-Centred Design"],
    duration: "June 2022",
    description:
      "Tasked with creating three pages in a user portal to display information belonging to individual sheep, I employed key design thinking processes. Leveraging my background in computer science, I was able to parse through the data in the JSON file, identifying project goals and employing empathy for users. Through iterative prototyping and user testing, I refined the wireframes to design a solution that successfully addressed  the project's requirements and provided an engaging and informative experience for users.",
    link: "https://www.figma.com/file/ClXm1y0PhRAietBlNxePZk/CSF-Designer-Internship-Assessment?type=design&node-id=101%3A2&t=EyJJf4cPiXgQvK0A-1",
    projectType: "ui-ux",
  },
  {
    image: "images/dfg.png",
    title: "Develop for Good",
    tags: ["Figma", "Lo-Fi", "User-Centred Design"],
    duration: "November 2021 - April 2022",
    description:
      "Worked with two other designers on an internal project for Develop For Good. I undertook competitive visual analysis of non-profit sectors to create three prototypes in Figma. This entailed utilizing data from sample sizes to inform design decisions, as well as feedback during weekly client stand-ups.",
    link: "https://katrinamartel.me/images/dfg_marketing_site_final_presentation_compressed.pdf",
    projectType: "ui-ux",
  },
  {
    image: "images/mobile_meter.png",
    title: "Mobile Meter",
    tags: ["Figma", "Information Architecture", "User Interviews"],
    duration: "June 2021",
    description:
      "A relic to the first time I used Figma to create an interactive prototype. Although the current prototype would require significant changes to improve the UI, the design document showcases the groundwork and insights from user interviews that shaped the project.",
    link: "images/mobile_meter.pdf",
    projectType: "ui-ux",
  },
  {
    image: "images/safe_cycle.png",
    title: "Safe Cycle",
    tags: ["Lo-Fi", "Balsamiq"],
    duration: "March 2020",
    description:
      "A low-fidelity prototype using Balsamiq to model the mobile interface of a bike safety app for COSC 341 (Human Computer Interaction).",
    link: "images/bike_saftey_app_prototype.pdf",
    projectType: "ui-ux",
  },
  {
    image: "images/cs-ed-2025.png",
    title: "Holiday Unlock the Box Challenge",
    tags: ["Hands-on", "Problem Solving"],
    duration: "December 2025",
    description:
      "A holiday tech activity, introducing grade 3-5 students to the concept of logic gates.",
    link: "https://www.linkedin.com/posts/katrina-martel_computerscienceeducationweek-activity-7409276691749089280-C8GJ",
    projectType: "education",
  },
  {
    image: "images/microbit+led.png",
    title: "LED Light Show with Micro:bit",
    tags: ["Coding", "Music Theory", "Hands-On"],
    duration: "December 2024",
    description:
      "In the spirit of Computer Science Education Week, I designed an LED programming activity.",
    link: "https://www.youtube.com/watch?v=YpC46Yc4148",
    projectType: "education",
  },
  {
    image: "images/jigsaw.png",
    title: "Figjam Jigsaw Reading Template",
    tags: ["Collaboration", "Reflective Practice", "Active Learning"],
    duration: "May 2023",
    description:
      "A collaborative note-taking template in FigJam using the 'jigsaw' instructional method to facilitate student learning and engagement. With a focus on helping intermediate elementary to secondary school students take on specific roles in group settings, the template affords interactivity and accountability. Additionally, the self-reflection component promotes metacognitive thinking and provides an opportunity for students to assess their contributions to the group.",
    link: "https://www.youtube.com/watch?v=UBHhk_rN1Tw",
    projectType: "education",
  },
  {
    image: "images/lets_talk_science.png",
    title: "Rural Expansion Assistant",
    tags: ["Place-based", "Hands-on", "STEAM"],
    duration: "February 2022 - May 2022",
    description:
      "Created a workshop for the national office surrounding bitmapping in monochrome raster images, along with student and facilitator guides. Conducted STEM workshops for over 250 students in a rural community.",
    link: "https://news.ok.ubc.ca/2022/10/02/planting-seeds-of-science/",
    projectType: "education",
  },
  {
    image: "images/ubc.jpeg",
    title: "Teaching Assistant",
    tags: [],
    duration: "May - June 2020",
    description:
      "During term one of summer courses, I gained marking experience by grading student labs as well as the final exam for an average of 40 students in COSC 301 (Intro to Data Analytics). Within this role, I also responded to inquiries and invigilated the MATH 221 (Matrix Algebra) final exam.",
    link: "https://www.calendar.ubc.ca/okanagan/courses.cfm?code=cosc#:~:text=COSC%20301%20(3,Equivalency%3A%20DATA%20301.",
    projectType: "education",
  },
  {
    image: "images/coding_quest.png",
    title: "Coding Instructor",
    tags: ["Hands-on", "Coding"],
    duration: "September 2018 - March 2020",
    description:
      "Provided assistance to grade 4-6 classrooms in computer science instruction. Prior to school visits, I reviewed lesson plans. During school visits, I offered guidance to teachers and assisted children with their MIT Scratch projects (which included working through problems to encourage computational thinking and how to debug).",
    link: "https://www.thelearningpartnership.ca/programs/coding-quest",
    projectType: "education",
  },
  {
    image: "images/bricks4kidz.png",
    title: "Coding/Robotics Instructor",
    tags: ["Hands-on", "Coding"],
    duration: "July - August 2019",
    description:
      "Led groups of 4-12 children (aged 6-12) in learning foundational engineering concepts with LEGO Robotics kits.",
    link: "https://www.bricks4kidz.com/about/",
    projectType: "education",
  },
];

const cardContainer = document.querySelector(".card-container");
const projectTypeButtons = document.querySelectorAll(".project-type");

// Display all projects on page load
let filteredProjects = projects.filter(
  (project) => project.projectType === "software-engineering"
);
const projectCardContainer = document.querySelector(".projects-container");
projectCardContainer.innerHTML = "";
filteredProjects.forEach((project) => {
  const cardMarkup = `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${project.image}" alt="${project.title}">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${project.title}</p>
            ${
              project.tags.length > 0
                ? project.tags
                    .map(
                      (tag) =>
                        `<span class="tag custom-tag-class">${tag}</span>`
                    )
                    .join("")
                : `<br>`
            }
            <p class="subtitle is-6">${project.duration}</p>
          </div>
        </div>
        <div class="content">
          <p id="description">${project.description}</p>
          ${
            project.link
              ? `<a href="${project.link}" target="_blank">Learn more</a>
              `
              : ""
          }
        </div>
      </div>
    </div>
  `;
  projectCardContainer.insertAdjacentHTML("beforeend", cardMarkup);
});

projectTypeButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // Set active class for selected button
    projectTypeButtons.forEach((btn) =>
      btn.parentNode.classList.remove("is-active")
    );
    e.target.parentNode.classList.add("is-active");

    // Get project type to filter by
    const projectType = e.target.dataset.projectType;

    // Filter projects based on selected project type
    if (projectType === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(
        (project) => project.projectType === projectType
      );
    }

    // Generate project cards for selected project type
    projectCardContainer.innerHTML = "";
    filteredProjects.forEach((project) => {
      const cardMarkup = `
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${project.image}" alt="${project.title}">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${project.title}</p>
                ${
                  project.tags.length > 0
                    ? project.tags
                        .map(
                          (tag) =>
                            `<span class="tag custom-tag-class">${tag}</span>`
                        )
                        .join("")
                    : `<br>`
                }
                <p class="subtitle is-6">${project.duration}</p>
              </div>
            </div>
            <div class="content">
              <p id="description">${project.description}</p>
              ${
                project.link
                  ? `<a href="${project.link}" target="_blank">Learn more</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      `;
      projectCardContainer.insertAdjacentHTML("beforeend", cardMarkup);
    });
  })
);
