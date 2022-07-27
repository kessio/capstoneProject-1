/* ==============================================   Testimonials Start Here   ============================================== */
const testimonials = [
    {
      id: 1,
      image: "images/tutor-1.fw.png",
      name: 'Celestine Ndinda',
      title: 'Developer at Safaricom',
      description: 'I did Software Development in Yuawei school and specialized in Fullstack, the learning experience has made job hunting somehow easy cause now I have the skills required in the market.'
  },
  {
    id: 2,
    image: "images/tutor-2.fw.png",
    name: 'Gregory Too',
    title: 'Developer at I&M Bank',
    description: 'The professional development period was for me the most beneficial time  at Yuaweia school I got exposed to learning how to learn and adapt to new technologies within a  short period of time.'
  },
  {
    id: 3,
    image: "images/tutor-3.fw.png",
    name: 'Mark Areti',
    title: 'Developer at Microsoft',
    description: 'My life has changed drastically since Yuawei school, my current salary has tripled and  I am more marketble in the job industry.' 
  },
  {
    id: 4,
    image: "images/tutor-4.fw.png",
    name: 'Lavendar Njambi',
    title: 'Developer at DotSavvy',
    description: 'Before Yuawei School I was a computer science student but then I decided to join a coding boot camp to gain practical skills. Life for me has never been the same since them. I love  coding and would definitely encourage more girls to join the program.' 
  },
  {
    id: 5,
    image: "images/tutor-5.fw.png",
    name: 'Sarah Bosibori',
    title: 'Developer at Payways',
    description: 'Thanks to Yuaweia School career coaches, I was well prepared and confident during job interviews and that made it easy for me to get my current job.' 
  },
  {
    id: 6,
    image: "images/tutor-6.fw.png",
    name: 'Isaac Atuta',
    title: 'Developer at Turing',
    description: 'Yuawei school prepared me for the job market by being disciplined, organised, and beating deadlines.' 
  }
  ]
  
  
  const testimonialContainer = document.querySelector('.grid-container');
  
  function createCards () {
    testimonials.forEach((item) => {
      testimonialContainer.innerHTML +=`
      <div class="col-tutor">
                      <img src="${item.image}" alt="tutor-image" class="tutor-img">
                       <div class="speaker-text">
                          <div class="tutor-title">${item.name}</div>
                           <div class="tutor-quote">${item.title}</div>
                           <p class="tutor-details">
                           ${item.description}
                           </p>
                       </div>  
                  </div>`
    }) 
  }
  createCards();