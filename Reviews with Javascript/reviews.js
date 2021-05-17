const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartuese before they sold out chambray pop-up. Shaman humbleberg picked coloring book sativa hoodie, cold pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anan Johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur asperiores unde dolorem dolores tempore odit inventore? Beatae placeat hic autem natus eveniet nesciunt earum velit!",
  },
  {
    id: 3,
    name: "Ron Johnston",
    job: "back-end designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur asperiores unde dolorem dolores tempore odit inventore? Beatae placeat hic autem natus eveniet nesciunt earum velit!",
  },
  {
    id: 4,
    name: "Fred Smith",
    job: "game developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur asperiores unde dolorem dolores tempore odit inventore? Beatae placeat hic autem natus eveniet nesciunt earum velit!",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
