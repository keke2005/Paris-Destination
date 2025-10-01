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

// Slideshow
let slides = ["river.jpg", "Louvre Museum2.jpeg", "Eiffel Tower at night.jpeg"];
let index = 0;
const slides=[
  {src:"river.jpg", alt:"River"},
   {src:"Louvre Museum2.jpeg", alt:"Louvre Museum2"},
   {src:"Eiffel Tower at night.jpeg", alt:"Eiffel Tower at night"},
  ];
  
  
function showSlide() {
  if (document.getElementById("slide")) {
    document.getElementById("slide").src = slides[index];
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


// ===== ABOUT PAGE =====

// Destination Info with Full Paragraphs
let destination = {
  name: "Paris",
  history: [
    "Paris has been the cultural and political capital of France for centuries. Known as the city of enlightenment, it was home to great philosophers, writers, and revolutionaries who changed the course of history. The French Revolution and many key events that shaped Europe began in Paris, making it a city that represents freedom and social change.",
    "Walking through Paris is like walking through a living museum. Its history is reflected in its grand palaces, cobblestone streets, and historic neighborhoods. Every monument tells a story, from the Gothic majesty of Notre-Dame Cathedral to the elegant architecture of the Champs-Élysées. Paris carries a legacy that is both national and global in its importance."
  ],
  culture: [
    "Paris is widely recognized as the cultural heart of France and often called the cultural capital of the world. The city is a hub of art, fashion, music, and literature, inspiring countless generations of artists and thinkers. Cafés, theaters, and bookshops remain central to Parisian life, providing spaces where people gather to exchange ideas and creativity flourishes.",
    "The city is also home to world-class institutions such as the Louvre, the Musée d'Orsay, and the Centre Pompidou, each showcasing art from different periods and styles. Beyond the museums, the culture of Paris is alive in its festivals, street performances, and daily traditions. From food markets to music concerts, the spirit of Paris is one of vibrancy and diversity."
  ],
  attractions: [
    "Paris is filled with must-see attractions that draw millions of visitors every year. The Eiffel Tower, originally built as a temporary structure, has become the symbol of the city and one of the most famous landmarks in the world. The Arc de Triomphe, standing proudly at the end of the Champs-Élysées, honors the soldiers who fought for France and offers stunning views of the city.",
    "But Paris is not only about its big landmarks. The narrow artistic streets of Montmartre, once home to Picasso and Van Gogh, provide a more intimate glimpse into Parisian life. The Latin Quarter, with its historic cafés, bookstores, and universities, reflects the intellectual spirit of the city. Together, these attractions create a balance between the grand and the hidden, offering something unique for every traveler."
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
function toggleExtra() {
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
  "Paris has over 1,800 bakeries, making it the city with the highest number of bakeries in the world. From fresh croissants to traditional baguettes, these bakeries are an essential part of Parisian culture, and many families visit them daily to buy bread. This tradition shows how food is not just nourishment in Paris, but also a way of life and community.",
  "The Eiffel Tower, which today is the most famous symbol of Paris, was originally meant to be temporary. Built for the 1889 World’s Fair, it was supposed to stand for only 20 years before being dismantled. However, it became so loved and useful as a radio tower that it was allowed to stay — and now it is visited by millions every year.",
  "The Louvre Museum is not only the largest art museum in the world but also the most visited. It houses over 35,000 works of art, including the Mona Lisa and the Venus de Milo. Every corner of the museum has a story to tell, and its collections span from ancient civilizations to modern masterpieces, making it a true treasure of humanity.",
  "Paris was the first city in the world to introduce gas-powered street lighting in the 19th century, which earned it the nickname 'The City of Light.' The lighting made the streets safer and more inviting, encouraging nightlife and cultural gatherings. This innovation became a symbol of Paris’s role as a leader in progress and modernization."
];

// Display Random Fun Fact
if (document.getElementById("fact")) {
  let random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = "Fun Fact: " + facts[random];
}

// ===== GALLERY PAGE =====

// Lightbox Slideshow with Captions
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
  bigCaption.innerText = caption ? caption.innerText : img.alt;
  lightbox.style.display = "block";
}

// Close Lightbox
if (closeBtn) {
  closeBtn.onclick = () => lightbox.style.display = "none";
}

// Next Button
if (nextBtn) {
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % galleryFigures.length;
    showLightbox(currentIndex);
  };
}

// Prev Button
if (prevBtn) {
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + galleryFigures.length) % galleryFigures.length;
    showLightbox(currentIndex);
  };
}

// Close when clicking background
lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};
function filterGallery(category) {
  let figures = document.querySelectorAll("#gallery figure");
  figures.forEach(fig => {
    if (category === "all" || fig.classList.contains(category)) {
      fig.style.display = "";   // back to grid default
    } else {
      fig.style.display = "none"; // hide
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

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    const temperature = data.main.temp;           // Temperature in °C
    const condition = data.weather[0].description; // Weather description

    // Display in the HTML
    if (document.getElementById("temp")) {
      document.getElementById("temp").textContent = `Temperature: ${temperature} °C`;
    }
    if (document.getElementById("condition")) {
      document.getElementById("condition").textContent = `Condition: ${condition}`;
    }
  } catch (error) {
    console.error(error);
    if (document.getElementById("weather")) {
      document.getElementById("weather").textContent = "Unable to fetch weather data.";
    }
  }
}

// Call the function when page loads
getWeather();


