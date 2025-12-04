// Array of phrases to be displayed
const phrases = [
  "a computer engineering student with a strong focus on web development, aiming to build innovative and user-friendly websites.",
  "a full-stack developer specializing in the MERN stack.",
  "a problem-solver ready to take on new challenges.",
];

const staticIntro = "I'm "; // The static part of the sentence

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Configuration
const typingSpeed = 70; // Speed in milliseconds
const deletingSpeed = 40; // Speed in milliseconds
const pauseBeforeDelete = 1500; // Pause after typing, before deleting (in ms)
const pauseBeforeType = 500; // Pause after deleting, before typing the next phrase (in ms)

function typeWriterLogic(typewriterElement) {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // DELETING MODE
    if (charIndex > 0) {
      typewriterElement.textContent =
        staticIntro + currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(() => typeWriterLogic(typewriterElement), deletingSpeed);
    } else {
      // Done deleting, switch to typing the next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Loop to the next phrase
      setTimeout(() => typeWriterLogic(typewriterElement), pauseBeforeType);
    }
  } else {
    // TYPING MODE
    if (charIndex < currentPhrase.length) {
      typewriterElement.textContent =
        staticIntro + currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(() => typeWriterLogic(typewriterElement), typingSpeed);
    } else {
      // Done typing, switch to deleting
      isDeleting = true;
      setTimeout(() => typeWriterLogic(typewriterElement), pauseBeforeDelete);
    }
  }
}

function initTypeWriter() {
  // 1. Find the element. This runs only after the DOM is ready.
  const typewriterElement = document.getElementById("typewriter-text");

  // Safety check
  if (!typewriterElement) {
    console.error("Typewriter element with ID 'typewriter-text' not found.");
    return;
  }

  // 2. Set the static part and add the cursor class
  typewriterElement.textContent = staticIntro;
  typewriterElement.classList.add("cursor");

  // 3. Start the dynamic writing
  typeWriterLogic(typewriterElement);
}

// Ensure the code runs only when the HTML structure is fully loaded
document.addEventListener("DOMContentLoaded", initTypeWriter);
