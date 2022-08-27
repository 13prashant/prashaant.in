// Journey===============================================================
const journeyArr = [
  {
    image: "./assets/journey/developer-team.svg",
    period: "Jul'21 - Continue",
    designation: "Fullstack Developer at Daydreamsoft LLP",
    description: [
      "Working collaboratively with clients and in-house agency teams to provide rapid, robust and client-acclaimed front-end and back-end web development optimizing user experience.",
    ],
  },
  {
    image: "./assets/journey/developer.svg",
    period: "Jun'20 - Jul'21",
    designation: "Freelancer Web Developer",
    description: [
      "Continuing the journey of learning, I started out as a Freelancer, tied up with local businesses & helped them out to get their businesses online.",
    ],
  },
  {
    image: "./assets/journey/learning.svg",
    period: "Jan'20 - Jun'21",
    designation: "Learner",
    description: [
      "As I have been always passionated about computers, I started exploring & learning web development.",
    ],
  },
  {
    image: "./assets/journey/construction.svg",
    period: "Sep'14 - Jan'20",
    designation: "Civil Engineer",
    description: [
      "After completing my bachelor degree in Civil Engineering, I almost worked for 6 years in the field!",
    ],
  },
];

document.getElementById("journey-single").innerHTML = journeyArr
  .map(
    ({ image, period, designation, description }) =>
      `
        <div class="journey">
            <div class="journey-left">
                <img src=${image} alt="" >
            </div>
            <div class="journey-right">
              <div class="journey-title">
                <div>
                  <h4>${period}</h4>
                  <h3>${designation}</h3>
                </div>
                <img src=${image} alt="" >
              </div>
              ${description
                .map(
                  (desc) => `
                  <p style="margin-bottom: 20px">${desc}</p>
                `
                )
                .join("")}
            </div>
        </div>
    `
  )
  .join("");
