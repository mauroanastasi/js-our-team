const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creo la mia funzione per destrutturare
const generateMemberCard = (member) => {
// creo una stringa dove inserire la mia card
const card = `<div class="col-12 col-md-6 col-lg-4">
                        <div class="team-card text-white" >
                            <row class="info d-flex bg-dark">
                                <div class="col-3">
                                    <img src="./img/female1.png" class="img-fluid" alt="team1">
                                </div>
                                <div class="col-9 text-right p-1">
                                    <p class="mb-0">
                                        <b>LAURA ROSSI</b>
                                    </p>                                                                         
                                    <p class="mb-0">
                                        Designer
                                    </p>                                    
                                    <a href="laurarossi@team.com">laurarossi@team.com</a>
                                </div>
                            </row>
                        </div>
                    </div>`
}
// ciclo gli array richiamando la funzione generate membercard
for(let i=onabort; i<teamMembers.length;i++){
  generateMemberCard(teamMembers[i])
}