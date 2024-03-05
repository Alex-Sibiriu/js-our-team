const teamWrapper = document.getElementById('team-wrapper');
const ourTeam = [
  {
    firstName: 'Wayne',
    lastName: 'Barnett',
    job: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    firstName: 'Angela',
    lastName: 'Caroll',
    job: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg',
  },
  {
    firstName: 'Walter',
    lastName: 'Gordon',
    job: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg',
  },
  {
    firstName: 'Angela',
    lastName: 'Lopez',
    job: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg',
  },
  {
    firstName: 'Scott',
    lastName: 'Estrada',
    job: 'Developer',
    img: 'scott-estrada-developer.jpg',
  },
  {
    firstName: 'Barbara',
    lastName: 'Ramos',
    job: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg',
  }
];


for (let member of ourTeam) {
  teamWrapper.innerHTML += 
  `
  <div class="col my-4">
      <div class="card rounded-0">
        <img src="assets/img/${member.img}" class="card-img-top rounded-0" alt="${member.firstName} ${member.lastName}">
        <div class="card-body text-secondary py-4">
          <h5 class="card-title font_vollkorn fs-4 fw-bold m-0">${member.firstName} ${member.lastName}</h5>
          <p class="card-text fs-5">${member.job}</p>
        </div>
      </div>
    </div>
  `
}