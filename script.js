// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Keep it visible for 1.4 seconds, then hide
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1400);
});

// Progress Bar
window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    const icon = mobileMenuToggle.querySelector("i");
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileNav.querySelectorAll("a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !mobileNav.contains(e.target) &&
      !mobileMenuToggle.contains(e.target)
    ) {
      mobileNav.classList.remove("active");
      const icon = mobileMenuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Scroll-triggered animations
const scrollElements = document.querySelectorAll(".animate-on-scroll");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  scrollElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = windowHeight * 0.85; // when element is 85% from top

    if (elementTop < triggerPoint) {
      el.classList.add("visible");
    }
  });
}

// Listen to scroll events
window.addEventListener("scroll", revealOnScroll);

// Run on page load
revealOnScroll();

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 100px
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Profile Image Carousel (if you have multiple images)
const profileImages = [
  "Images/me5.png",
  "Images/me3.png",
  "Images/me4.png",
  "Images/me.png",
];

let currentImageIndex = 0;
const profileImage = document.querySelector(".profile-image");
const prevButton = document.querySelector(".image-nav.prev");
const nextButton = document.querySelector(".image-nav.next");

if (prevButton && nextButton && profileImage) {
  // Check if images exist
  const availableImages = profileImages.filter((img) => {
    // We'll assume they exist, but you can add image existence checking if needed
    return true;
  });

  if (availableImages.length > 1) {
    prevButton.addEventListener("click", () => {
      currentImageIndex =
        (currentImageIndex - 1 + availableImages.length) %
        availableImages.length;
      profileImage.src = availableImages[currentImageIndex];
    });

    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % availableImages.length;
      profileImage.src = availableImages[currentImageIndex];
    });
  } else {
    // Hide navigation buttons if only one image
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }
}