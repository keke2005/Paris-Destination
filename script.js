// ===== HOME PAGE =====

// Welcome Message with Date/Time
function showWelcome() {
  let now = new Date();
  let message = "Welcome! Today is " + now.toDateString() + " " + now.toLocaleTimeString();
  if (document.getElementById("welcome")) {
    document.getElementById("welcome").innerText = message;
  }
}
showWelcome();

// Change Background Color
function changeColor() {
  let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray"];
  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}

// ===== Slideshow =====
let slides = [
  {src: "images/river.jpg", alt: "River"},
  {src: "images/louvre_museum2.jpeg", alt: "Louvre Museum"},
  {src: "images/eiffel_tower_at_night.jpeg", alt: "Eiffel Tower at night"}
];
let index = 0;

function showSlide() {
  const slideImg = document.getElementById("slide");
  if (slideImg) {
    slideImg.src = slides[index].src;
    slideImg.alt = slides[index].alt;
  }
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
}

// Initialize first slide
showSlide();

// ===== ABOUT PAGE =====
let destination = {
  name: "Paris",
  history: [
    "Paris has been the cultural and political capital of France for centuries. Known as the city of enlightenment, it was home to great philosophers, writers, and revolutionaries who changed the course of history.",
    "Walking through Paris is like walking through a living museum. Its history is reflected in its grand palaces, cobblestone streets, and historic neighborhoods."
  ],
  culture: [
    "Paris is widely recognized as the cultural heart of France and often called the cultural capital of the world.",
    "The city is home to world-class institutions such as the Louvre, the Musée d'Orsay, and the Centre Pompidou."
  ],
  attractions: [
    "The Eiffel Tower, originally built as a temporary structure, has become the symbol of the city.",
    "The narrow artistic streets of Montmartre and the Latin Quarter reflect the intimate Parisian life."
  ]
};

// Render Content Dynamically
if (document.getElementById("info")) {
  document.getElementById("info").innerHTML = `
    <h2>${destination.name}</h2>
    <h3>History & Culture</h3>
    <p>${destination.history[0]}</p>
    <p>${destination.history[1]}</p>
    <p>${destination.culture[0]}</p>
    <p>${destination.culture[1]}</p>
    <h3>Must-See Attractions</h3>
    <p>${destination.attractions[0]}</p>
    <p>${destination.attractions[1]}</p>
  `;
}

// Show More / Show Less Toggle
function toggleExtra(event) {
  let extra = document.getElementById("extra");
  let btn = event.target;
  if (extra.style.display === "none") {
    extra.style.display = "block";
    btn.innerText = "Show Less";
  } else {
    extra.style.display = "none";
    btn.innerText = "Show More";
  }
}

// Expanded Random Fun Facts
let facts = [
  "Paris has over 1,800 bakeries, making it the city with the highest number of bakeries in the world.",
  "The Eiffel Tower was originally meant to be temporary but became a symbol of the city.",
  "The Louvre Museum is the largest and most visited art museum in the world.",
  "Paris was the first city to introduce gas-powered street lighting, earning the nickname 'The City of Light'."
];

// Display Random Fun Fact
if (document.getElementById("fact")) {
  let random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = "Fun Fact: " + facts[random];
}

// ===== GALLERY PAGE =====
let galleryFigures = document.querySelectorAll("#gallery figure");
let lightbox = document.getElementById("lightbox");
let big = document.getElementById("big");
let bigCaption = document.getElementById("bigCaption");
let closeBtn = document.getElementById("closeBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

// Open Lightbox on Click
if (galleryFigures.length > 0) {
  galleryFigures.forEach((figure, index) => {
    let img = figure.querySelector("img");
    img.onclick = () => {
      currentIndex = index;
      showLightbox(currentIndex);
    };
  });
}

// Show Selected Image + Caption
function showLightbox(index) {
  let figure = galleryFigures[index];
  let img = figure.querySelector("img");
  let caption = figure.querySelector("figcaption");

  big.src = img.src;
  big.alt = img.alt;
  bigCaption.innerText = caption ? caption.innerText : img.alt;
  lightbox.style.display = "block";
}

// Close Lightbox
if (closeBtn) closeBtn.onclick = () => lightbox.style.display = "none";

// Next / Prev Buttons
if (nextBtn) nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % galleryFigures.length;
  showLightbox(currentIndex);
};
if (prevBtn) prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + galleryFigures.length) % galleryFigures.length;
  showLightbox(currentIndex);
};

// Close when clicking background
lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
};

// Filter Gallery
function filterGallery(category) {
  galleryFigures.forEach(fig => {
    if (category === "all" || fig.classList.contains(category)) {
      fig.style.display = "";
    } else {
      fig.style.display = "none";
    }
  });
}

// ===== WEATHER API =====
const apiKey = "fee4a525cef8dd0de6e0f334f111e8a0"; 
const city = "Paris";         

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("Failed to fetch weather data");
    const data = await response.json();
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    if (document.getElementById("temp")) document.getElementById("temp").textContent = `Temperature: ${temperature} °C`;
    if (document.getElementById("condition")) document.getElementById("condition").textContent = `Condition: ${condition}`;
  } catch (error) {
    console.error(error);
    if (document.getElementById("weather")) document.getElementById("weather").textContent = "Unable to fetch weather data.";
  }
}

getWeather();
