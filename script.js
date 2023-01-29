// Journey===============================================================
const journeyArr = [
  {
    image: "./assets/journey/developer-team.svg",
    period: "Jul'21 - Continue",
    designation: "Fullstack Developer at Daydreamsoft LLP",
    description: [
      "With a focus on providing a seamless user experience, I am currently working collaboratively with clients and in-house agency teams to deliver rapid and robust web development solutions. My commitment to delivering high-quality results has been recognized and praised, making me a sought-after web developer.",
    ],
  },
  {
    image: "./assets/journey/developer.svg",
    period: "Jun'20 - Jul'21",
    designation: "Freelancer Web Developer",
    description: [
      "Starting out as a freelancer, I connected with local businesses and provided them with the resources they needed to establish an online presence. My work included creating custom web applications that were tailored to meet the unique needs of each business.",
    ],
  },
  {
    image: "./assets/journey/learning.svg",
    period: "Jan'20 - Jun'21",
    designation: "Learner",
    description: [
      "However, my passion for computers led me to explore the world of web development. Through self-learning and exploration, I developed a strong understanding of the technologies and tools used in web development.",
    ],
  },
  {
    image: "./assets/journey/construction.svg",
    period: "Sep'14 - Jan'20",
    designation: "Civil Engineer",
    description: [
      "After obtaining my Bachelor's degree in Civil Engineering, I have spent nearly 6 years honing my skills in the field.",
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

  // Display technology label on hover
  const technologies = document.querySelectorAll('.technologies')

  technologies.forEach(technology => {
    const techDivs = technology.getElementsByTagName('div') 
    
    for(let i = 0; i < techDivs.length; i++) {
      const currentTech = techDivs[i]
      const currentImage = currentTech.getElementsByTagName('img')[0]
      const currentLabel = currentTech.getElementsByTagName('label')[0]
      
      currentImage.addEventListener('mouseover', () => {
        currentLabel.classList.add('show-tooltip')
      })
      currentImage.addEventListener('mouseleave', () => {
        currentLabel.classList.remove('show-tooltip')
      })
    }
  })
 
