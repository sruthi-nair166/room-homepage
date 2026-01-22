const heroImg = document.getElementById("hero-img");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");
const sliderBtnLeft = document.getElementById("slide-left");
const sliderBtnRight = document.getElementById("slide-right");

let hero = [
  {
    id: 1,
    image: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    image: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    image: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let currentSlide = 0;

function showSlide(index) {
  const slide = hero[index];
  heroImg.src = slide.image;
  heroTitle.textContent = slide.title;
  heroDesc.textContent = slide.desc;
}

showSlide(currentSlide);

sliderBtnLeft.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = hero.length - 1;
  }
  showSlide(currentSlide);
});

sliderBtnRight.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= hero.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});
