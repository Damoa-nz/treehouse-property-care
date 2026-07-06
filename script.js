const reviews = [
  {
    text: "“Highly recommend Tree House Property Care. Professional, reliable and the results are excellent.”",
    name: "— Sarah K."
  },
  {
    text: "“Clear communication and great attention to detail. The property looked beautifully maintained.”",
    name: "— James L."
  },
  {
    text: "“Friendly, careful and easy to deal with. We will definitely use them again.”",
    name: "— Olivia R."
  }
];

let currentReview = 0;
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const prevReview = document.getElementById("prevReview");
const nextReview = document.getElementById("nextReview");

function showReview(index) {
  currentReview = (index + reviews.length) % reviews.length;
  reviewText.textContent = reviews[currentReview].text;
  reviewName.textContent = reviews[currentReview].name;
}

if (prevReview && nextReview) {
  prevReview.addEventListener("click", () => showReview(currentReview - 1));
  nextReview.addEventListener("click", () => showReview(currentReview + 1));
}
