const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // меняем иконку (крестик вместо меню)
  if (burger.innerHTML === "&#9776;") {
    burger.innerHTML = "&times;";
  } else {
    burger.innerHTML = "&#9776;";
  }
});
const testimonials = [
  {
    img: "img/user.svg",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    location: "Lahore, Pakistan"
  },
  {
    img: "img/user2.jpg",
    text: "“Great experience! Booking was easy and my trip was smooth. Highly recommend this service.”",
    name: "ELON MUSK",
    location: "New York, USA"
  },
  {
    img: "img/user3.webp",
    text: "“Very professional team. They made my travel stress-free and enjoyable.”",
    name: "Gitler",
    location: "Sydney, Australia"
  }
];

let current = 0;

// Elements
const userImg = document.getElementById("user-img");
const userText = document.getElementById("user-text");
const userName = document.getElementById("user-name");
const userLocation = document.getElementById("user-location");

function showTestimonial(index) {
  const t = testimonials[index];

  // добавляем fade-эффект
  userImg.classList.add("fade");
  userText.classList.add("fade");
  userName.classList.add("fade");
  userLocation.classList.add("fade");

  setTimeout(() => {
    userImg.src = t.img;
    userText.textContent = t.text;
    userName.textContent = t.name;
    userLocation.textContent = t.location;

    // убираем fade, чтобы плавно проявилось
    userImg.classList.remove("fade");
    userText.classList.remove("fade");
    userName.classList.remove("fade");
    userLocation.classList.remove("fade");
  }, 500); // время должно совпадать с transition в CSS
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});
