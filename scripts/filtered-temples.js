// Update the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Hamburger menu functionality for mobile view
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/320x200/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44193,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg",
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 17000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg",
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Quezon City Philippines",
    dedicated: "1984, September, 27",
    area: 26683,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-993617-wallpaper.jpg",
  },
  {
  templeName: "Seoul Korea Temple",
  location: "Seoul-teukbyeolsi Korea",
  dedicated: "1985, December, 15",
  area: 28057 ,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg",
  },

  {
    templeName: "Sapporo Japan Temple",
    location: "Sapporo, Hokkaido Japan",
    dedicated: "2021, August, 21",
    area: 48480,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-day-1744806.jpg",
  }
];

// Function to display all temples
function renderTemples(filteredTemples) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ""; // Clear existing content

  if (filteredTemples.length === 0) {
      container.innerHTML = `<p>No temples match the selected filter.</p>`;
      return;
  }

  filteredTemples.forEach(temple => {
      const card = document.createElement("section");
      card.classList.add("temple-card");

      const name = document.createElement("h3");
      name.textContent = temple.templeName;

      const location = document.createElement("p");
      location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

      const dedication = document.createElement("p");
      dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

      const area = document.createElement("p");
      area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Temple`;
      img.loading = "lazy";

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      container.appendChild(card);
  });
}

// Function to filter temples based on criteria
function filterTemples(criteria) {
  let filteredTemples = temples;

  switch (criteria) {
      case "Old":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() <2000,1900);
          break;
      case "New":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >2000,2024);
          break;
      case "Small":
          filteredTemples = temples.filter(temple => parseInt(temple.area) <30000,10000,)
          break;
      case "Large":
          filteredTemples = temples.filter(temple => parseInt(temple.area) > 90000,30000);
          break;
  }

  renderTemples(filteredTemples);
}

// Attach event listeners to filter buttons
document.getElementById("home").addEventListener("click", () => renderTemples(temples));
document.getElementById("old").addEventListener("click", () => filterTemples("Old"));
document.getElementById("new").addEventListener("click", () => filterTemples("New"));
document.getElementById("small").addEventListener("click", () => filterTemples("Small"));
document.getElementById("large").addEventListener("click", () => filterTemples("Large"));

// Load all temples by default on page load
window.addEventListener("DOMContentLoaded", () => renderTemples(temples));