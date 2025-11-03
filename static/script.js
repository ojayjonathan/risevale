// ==================== MOBILE NAVIGATION TOGGLE ====================

const hamburger = document.getElementById("hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// ==================== FORM VALIDATION ====================

const inquiryForm = document.getElementById("inquiryForm")

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Reset errors
    clearErrors()

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const tour = document.getElementById("tour").value
    const message = document.getElementById("message").value.trim()

    // Validate fields
    let isValid = true

    if (!name) {
      showError("name", "Full name is required")
      isValid = false
    }

    if (!email) {
      showError("email", "Email is required")
      isValid = false
    } else if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address")
      isValid = false
    }

    if (!tour) {
      showError("tour", "Please select a tour")
      isValid = false
    }

    if (!message) {
      showError("message", "Message is required")
      isValid = false
    }

    if (isValid) {
      submitForm()
    }
  })
}

function showError(fieldId, errorMessage) {
  const field = document.getElementById(fieldId)
  const errorElement = document.getElementById(fieldId + "Error")

  field.classList.add("error")
  errorElement.textContent = errorMessage
  errorElement.classList.add("show")
}

function clearErrors() {
  document.querySelectorAll(".form-group input, .form-group select, .form-group textarea").forEach((field) => {
    field.classList.remove("error")
  })

  document.querySelectorAll(".error-message").forEach((error) => {
    error.classList.remove("show")
    error.textContent = ""
  })
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function submitForm() {
  const formMessage = document.getElementById("formMessage")
  const submitButton = document.querySelector(".submit-button")

  // Show success message
  formMessage.textContent = "Thank you! Your inquiry has been sent successfully. We'll get back to you soon!"
  formMessage.classList.remove("error")
  formMessage.classList.add("success")

  // Disable button temporarily
  submitButton.disabled = true
  submitButton.textContent = "Sent!"

  // Reset form
  inquiryForm.reset()

  // Re-enable button after 3 seconds
  setTimeout(() => {
    submitButton.disabled = false
    submitButton.textContent = "Send Inquiry"
    formMessage.classList.remove("success")
  }, 3000)
}

// ==================== SMOOTH SCROLL ANCHOR LINKS ====================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// ==================== HIGHLIGHT ACTIVE NAV LINK ====================

function updateActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active")

    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Update active link on page load
updateActiveNavLink()

// ==================== SCROLL ANIMATIONS ====================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe cards and sections
document.querySelectorAll(".tour-card, .team-member, .sustainability-item").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(element)
})
