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
    img: 'walter-gordon-office-manager.jpg',
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
]


for (let member of ourTeam) {
  console.log(member.firstName, member.lastName, member.job, member.img);
}