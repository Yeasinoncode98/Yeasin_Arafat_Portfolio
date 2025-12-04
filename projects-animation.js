// // Enhanced Projects Animation Script
// document.addEventListener("DOMContentLoaded", function () {
//   // Intersection Observer for scroll animations
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const projectObserver = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Animate project cards
//         const cards = entry.target.querySelectorAll(
//           "#project-grid > div, #expanded-projects-container > div"
//         );
//         cards.forEach((card, index) => {
//           setTimeout(() => {
//             card.classList.add("project-card-animate");
//           }, index * 100);
//         });

//         // Unobserve after animation
//         projectObserver.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   // Observe projects section
//   const projectsSection = document.getElementById("projects");
//   if (projectsSection) {
//     projectObserver.observe(projectsSection);
//   }

//   // Re-animate when "View All" is clicked
//   const viewAllButton = document.getElementById("view-all-button");
//   const expandedContainer = document.getElementById(
//     "expanded-projects-container"
//   );

//   if (viewAllButton) {
//     viewAllButton.addEventListener("click", function () {
//       setTimeout(() => {
//         const expandedCards = expandedContainer.querySelectorAll("div");
//         expandedCards.forEach((card, index) => {
//           setTimeout(() => {
//             card.classList.add("project-card-animate");
//           }, index * 100);
//         });
//       }, 100);
//     });
//   }

//   // Parallax effect on scroll
//   window.addEventListener("scroll", function () {
//     if (projectsSection) {
//       const scrolled = window.pageYOffset;
//       const sectionTop = projectsSection.offsetTop;
//       const parallaxSpeed = 0.5;

//       if (scrolled > sectionTop - window.innerHeight) {
//         const cards = projectsSection.querySelectorAll(
//           "#project-grid > div, #expanded-projects-container > div"
//         );
//         cards.forEach((card, index) => {
//           const speed = parallaxSpeed + index * 0.1;
//           const yPos = (scrolled - sectionTop) * speed;
//           card.style.transform = `translateY(${yPos * 0.1}px)`;
//         });
//       }
//     }
//   });

//   // Add hover sound effect (optional - can be removed)
//   const projectCards = document.querySelectorAll(
//     "#project-grid > div, #expanded-projects-container > div"
//   );
//   projectCards.forEach((card) => {
//     card.addEventListener("mouseenter", function () {
//       this.style.transition =
//         "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
//     });
//   });
// });

// Projects data
// const projects = [
//   // Initial 3 Featured Projects
//   {
//     title: "Event - Hub",
//     description:
//       "A modern and fully functional Event Management platform where users can explore events, view detailed schedules, and purchase tickets securely.",
//     tech: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     image: "https://i.ibb.co.com/mrjPczrZ/Screenshot-2025-12-05-013924.png",
//     live: "https://event-management-website-taupe.vercel.app/",
//     client: "https://github.com/Yeasinoncode98/event-management-website.git",
//     server: "https://github.com/Yeasinoncode98/event-management-server.git",
//   },
//   {
//     title: "Event - Sphere",
//     description:
//       "Event_Spheere is a modern personal event management platform designed to help users create, update, and host events efficiently.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
//     image: "https://i.ibb.co.com/gZdPpPc9/Screenshot-2025-12-05-014435.png",
//     live: "https://social-development-event-website.netlify.app/",
//     client:
//       "https://github.com/Yeasinoncode98/social-development-event-client.git",
//     server: "https://github.com/Yeasinoncode98/social-development-server.git",
//   },
//   {
//     title: "Green Nest",
//     description:
//       "Green Nest is a modern Single Page e-commerce platform that allows users to browse plants, choice flowers and book orders securely. It feature user authentication goodly.",
//     tech: ["React.js", "Tailwind CSS", "Vanila CSS", "swiperJs"],
//     image: "https://i.ibb.co.com/XfvtCMmF/Screenshot-2025-12-05-015041.png",
//     live: "https://b12-a09-green-nest.vercel.app/",
//     client: "https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git",
//     server: "https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git",
//   },
//   // Additional Projects (For expansion)
//   {
//     title: "Hero Apps",
//     description:
//       "Discover and download the latest apps on Hero Apps, where you can explore innovative tools and interact with powerful APIs.",
//     tech: ["React.js", "Tailwind CSS", "Vanila CSS", "swiperJs"],
//     image: "https://i.ibb.co.com/6c2J7NGB/Screenshot-2025-12-05-015444.png",
//     live: "https://b12-a08-hero-app.netlify.app/",
//     client: "https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git",
//     server: "https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git",
//   },
// ];

// /**
//  * Renders a single project card HTML structure.
//  * @param {Object} project - The project data object.
//  * @returns {string} The HTML string for the project card.
//  */
// const createProjectCard = (project) => {
//   // Mapping tech tags to HTML spans
//   const techTags = project.tech
//     .map(
//       (tag) => `
//         <span class="text-xs font-medium text-slate-700 dark:text-primary bg-slate-200 dark:bg-transparent border border-slate-400 dark:border-primary rounded-full px-3 py-1">
//             ${tag}
//         </span>
//     `
//     )
//     .join("");

//   // Card HTML with gradient-styled buttons (Live, Client, Server)
//   return `
//         <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 relative">
//             <div class="project-img-border border-4 border-gray-200 dark:border-gray-600 rounded-lg m-2 transition-all duration-300">
//                 <img alt="Screenshot of ${project.title}"
//                     class="w-full h-48 object-cover rounded-md object-center"
//                     src="${project.image}"
//                     onerror="this.onerror=null; this.src='https://placehold.co/400x200/f59e0b/ffffff?text=Image+Unavailable';"
//                 />
//             </div>

//             <div class="p-6 flex-grow flex flex-col">
//                 <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">${project.title}</h3>
//                 <p class="text-text-light dark:text-text-dark text-sm leading-relaxed flex-grow mb-4">
//                     ${project.description}
//                 </p>

//                 <div class="flex flex-wrap gap-2 mb-6">
//                     ${techTags}
//                 </div>

//                 <div class="mt-auto flex justify-around items-center space-x-2">
//                     <!-- Live Button -->
//                     <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
//                         href="${project.live}" target="_blank" rel="noopener noreferrer">
//                         Live
//                     </a>
//                     <!-- Client Button -->
//                     <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
//                         href="${project.client}" target="_blank" rel="noopener noreferrer">
//                         Client
//                     </a>
//                     <!-- Server Button -->
//                     <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
//                         href="${project.server}" target="_blank" rel="noopener noreferrer">
//                         Server
//                     </a>
//                 </div>
//             </div>
//         </div>
//     `;
// };

// /**
//  * Renders the initial set of projects.
//  */
// const renderInitialProjects = () => {
//   const initialHtml = projects.slice(0, 3).map(createProjectCard).join("");
//   document.getElementById("project-grid").innerHTML = initialHtml;
// };

// /**
//  * Handles the click event for the 'View All Projects' button.
//  */
// const handleViewAllClick = () => {
//   const button = document.getElementById("view-all-button");
//   const buttonText = document.getElementById("button-text");
//   const spinner = document.getElementById("loading-spinner");
//   const expandedContainer = document.getElementById(
//     "expanded-projects-container"
//   );

//   // Check if projects are already loaded
//   if (
//     expandedContainer.style.maxHeight !== "0px" &&
//     expandedContainer.style.maxHeight !== ""
//   ) {
//     return;
//   }

//   // 1. Disable button and show spinner
//   button.disabled = true;
//   buttonText.textContent = "Loading More...";
//   spinner.classList.remove("hidden");

//   // Simulate an API call delay (2 seconds)
//   setTimeout(() => {
//     // 2. Hide spinner and restore button state
//     spinner.classList.add("hidden");
//     buttonText.textContent = "View All Projects";
//     button.classList.add("hidden"); // Hide the button once expanded

//     // 3. Render and show additional projects
//     const expandedProjects = projects.slice(3);
//     const expandedHtml = expandedProjects.map(createProjectCard).join("");
//     expandedContainer.innerHTML = expandedHtml;

//     // 4. Smoothly open the "dropdown" section
//     expandedContainer.style.maxHeight =
//       expandedContainer.scrollHeight + 32 + "px";
//     expandedContainer.style.opacity = "1";

//     // 5. Trigger animation for expanded cards
//     const expandedCards = expandedContainer.querySelectorAll("div");
//     expandedCards.forEach((card, index) => {
//       setTimeout(() => {
//         card.classList.add("project-card-animate");
//       }, index * 150);
//     });
//   }, 2000);
// };

// // --- Scroll Animation Observer ---
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize projects
//   renderInitialProjects();

//   // Add click listener to View All button
//   const viewAllButton = document.getElementById("view-all-button");
//   if (viewAllButton) {
//     viewAllButton.addEventListener("click", handleViewAllClick);
//   }

//   // Scroll animation for initial projects
//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const projectObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Animate initial project cards
//         const cards = document.querySelectorAll("#project-grid > div");
//         cards.forEach((card, index) => {
//           setTimeout(() => {
//             card.classList.add("project-card-animate");
//           }, index * 150);
//         });

//         projectObserver.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   // Observe projects section
//   const projectsSection = document.getElementById("projects");
//   if (projectsSection) {
//     projectObserver.observe(projectsSection);
//   }

//   // General reveal on scroll observer (for other sections)
//   const revealObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   }, observerOptions);

//   const revealElements = document.querySelectorAll(".reveal-on-scroll");
//   revealElements.forEach((el) => revealObserver.observe(el));

//   // Parallax effect on scroll (subtle depth effect)
//   window.addEventListener("scroll", function () {
//     if (projectsSection) {
//       const scrolled = window.pageYOffset;
//       const sectionTop = projectsSection.offsetTop;
//       const parallaxSpeed = 0.5;

//       if (scrolled > sectionTop - window.innerHeight) {
//         const cards = projectsSection.querySelectorAll(
//           "#project-grid > div, #expanded-projects-container > div"
//         );
//         cards.forEach((card, index) => {
//           const speed = parallaxSpeed + index * 0.1;
//           const yPos = (scrolled - sectionTop) * speed;
//           // Only apply subtle parallax, don't override main animations
//           if (card.classList.contains("project-card-animate")) {
//             const currentTransform = card.style.transform || "";
//             if (!currentTransform.includes("translateY")) {
//               card.style.transform = `translateY(${yPos * 0.05}px)`;
//             }
//           }
//         });
//       }
//     }
//   });
// });

// ..................3................

// Projects data
const projects = [
  // Initial 3 Featured Projects
  {
    title: "Event - Hub",
    description:
      "A modern and fully functional Event Management platform where users can explore events, view detailed schedules, and purchase tickets securely.",
    tech: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "https://i.ibb.co.com/mrjPczrZ/Screenshot-2025-12-05-013924.png",
    live: "https://event-management-website-taupe.vercel.app/",
    client: "https://github.com/Yeasinoncode98/event-management-website.git",
    server: "https://github.com/Yeasinoncode98/event-management-server.git",
  },
  {
    title: "Event - Sphere",
    description:
      "Event_Spheere is a modern personal event management platform designed to help users create, update, and host events efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "https://i.ibb.co.com/gZdPpPc9/Screenshot-2025-12-05-014435.png",
    live: "https://social-development-event-website.netlify.app/",
    client:
      "https://github.com/Yeasinoncode98/social-development-event-client.git",
    server: "https://github.com/Yeasinoncode98/social-development-server.git",
  },
  {
    title: "Green Nest",
    description:
      "Green Nest is a modern Single Page e-commerce platform that allows users to browse plants, choice flowers and book orders securely. It feature user authentication goodly.",
    tech: ["React.js", "Tailwind CSS", "Vanila CSS", "swiperJs"],
    image: "https://i.ibb.co.com/XfvtCMmF/Screenshot-2025-12-05-015041.png",
    live: "https://b12-a09-green-nest.vercel.app/",
    client: "https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git",
    server: "https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git",
  },
  // Additional Projects (For expansion)
  {
    title: "Hero Apps",
    description:
      "Discover and download the latest apps on Hero Apps, where you can explore innovative tools and interact with powerful APIs.",
    tech: ["React.js", "Tailwind CSS", "Vanila CSS", "swiperJs"],
    image: "https://i.ibb.co.com/6c2J7NGB/Screenshot-2025-12-05-015444.png",
    live: "https://b12-a08-hero-app.netlify.app/",
    client: "https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git",
    server: "https://github.com/Yeasinoncode98/B12-A08-Hero-Apps.git",
  },
];

/**
 * Renders a single project card HTML structure.
 */
const createProjectCard = (project) => {
  const techTags = project.tech
    .map(
      (tag) => `
        <span class="text-xs font-medium text-slate-700 dark:text-primary bg-slate-200 dark:bg-transparent border border-slate-400 dark:border-primary rounded-full px-3 py-1">
            ${tag}
        </span>
    `
    )
    .join("");

  return `
        <div class="bg-card-light dark:bg-card-dark rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 relative">
            <div class="project-img-border border-4 border-gray-200 dark:border-gray-600 rounded-lg m-2 transition-all duration-300">
                <img alt="Screenshot of ${project.title}"
                    class="w-full h-48 object-cover rounded-md object-center"
                    src="${project.image}"
                    onerror="this.onerror=null; this.src='https://placehold.co/400x200/f59e0b/ffffff?text=Image+Unavailable';"
                />
            </div>

            <div class="p-6 flex-grow flex flex-col">
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">${project.title}</h3>
                <p class="text-text-light dark:text-text-dark text-sm leading-relaxed flex-grow mb-4">
                    ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
                    ${techTags}
                </div>

                <div class="mt-auto flex justify-around items-center space-x-2">
                    <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                        href="${project.live}" target="_blank" rel="noopener noreferrer">
                        Live
                    </a>
                    <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                        href="${project.client}" target="_blank" rel="noopener noreferrer">
                        Client
                    </a>
                    <a class="flex-1 text-center text-xs sm:text-sm font-semibold text-white px-3 py-2 rounded-full shadow-lg gradient-button"
                        href="${project.server}" target="_blank" rel="noopener noreferrer">
                        Server
                    </a>
                </div>
            </div>
        </div>
    `;
};

/**
 * Renders the initial set of projects.
 */
const renderInitialProjects = () => {
  const initialHtml = projects.slice(0, 3).map(createProjectCard).join("");
  document.getElementById("project-grid").innerHTML = initialHtml;

  // ALWAYS show button (removed hide logic)
  const viewAllButton = document.getElementById("view-all-button");
  viewAllButton.style.display = "inline-flex";
};

/**
 * Handles the click event for the 'View All Projects' button.
 */
const handleViewAllClick = () => {
  const button = document.getElementById("view-all-button");
  const buttonText = document.getElementById("button-text");
  const spinner = document.getElementById("loading-spinner");
  const expandedContainer = document.getElementById(
    "expanded-projects-container"
  );

  // Check if already expanded
  if (
    expandedContainer.style.maxHeight !== "0px" &&
    expandedContainer.style.maxHeight !== ""
  ) {
    // Collapse
    expandedContainer.style.maxHeight = "0";
    expandedContainer.style.opacity = "0";
    buttonText.textContent = "View All Projects";

    // Scroll back to projects section
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // 1. Disable button and show spinner
  button.disabled = true;
  buttonText.textContent = "Loading More...";
  spinner.classList.remove("hidden");

  // Simulate loading delay
  setTimeout(() => {
    // 2. Hide spinner
    spinner.classList.add("hidden");
    button.disabled = false;

    // 3. Render additional projects
    const expandedProjects = projects.slice(3);

    if (expandedProjects.length > 0) {
      const expandedHtml = expandedProjects.map(createProjectCard).join("");
      expandedContainer.innerHTML = expandedHtml;

      // 4. Smoothly expand
      expandedContainer.style.maxHeight =
        expandedContainer.scrollHeight + 32 + "px";
      expandedContainer.style.opacity = "1";

      // 5. Trigger animations
      const expandedCards = expandedContainer.querySelectorAll("div");
      expandedCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("project-card-animate");
        }, index * 150);
      });

      // Change button text to "Show Less"
      buttonText.textContent = "Show Less";
    } else {
      // If no more projects to show
      buttonText.textContent = "No More Projects";
      setTimeout(() => {
        buttonText.textContent = "View All Projects";
        button.disabled = false;
      }, 2000);
    }
  }, 1500);
};

// --- Scroll Animation Observer ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize projects
  renderInitialProjects();

  // Add click listener to View All button
  const viewAllButton = document.getElementById("view-all-button");
  if (viewAllButton) {
    viewAllButton.addEventListener("click", handleViewAllClick);
  }

  // Scroll animation for initial projects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = document.querySelectorAll("#project-grid > div");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("project-card-animate");
          }, index * 150);
        });
        projectObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectObserver.observe(projectsSection);
  }

  // General reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  revealElements.forEach((el) => revealObserver.observe(el));
});
