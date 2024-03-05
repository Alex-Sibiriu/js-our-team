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
  <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="assets/img/${member.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${member.firstName} ${member.lastName}</h5>
          <p class="card-text">${member.job}</p>
        </div>
      </div>
    </div>
  `
}