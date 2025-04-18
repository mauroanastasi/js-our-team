const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

// creo la mia funzione per destrutturare
const generateMemberCard = (member) => {
// creo una stringa dove inserire la mia card
const card = `<div class="col-12 col-md-6 col-lg-4">
                        <div class="team-card text-white m-2" >
                            <div class=" row info d-flex bg-dark">
                                <div class="col-3 p-0">
                                    <img src="${member.img}" class="img-fluid" alt="team1">
                                </div>
                                <div class="col-9 text-right fw-bold pt-2">
                                    <p class="mb-0">
                                        <b>${member.name}</b>
                                    </p>                                                                         
                                    <p class="mb-0">
                                        ${member.role}
                                    </p>                                    
                                    <a href="email_member" class="p-0" >${member.email}.com</a>
                                </div>
                            </div>
                        </div>
                    </div>`
                    
        return card;
}

// funzione che mi renderizza il contenuto dell'array
const renderTeam = (array) => {
  // dichiaro una variabile con valore stringa nuova concatenando le colonne come stringhe
  let cards = "";
  for(let i=0; i<array.length; i++){
    cards += generateMemberCard(array[i])
  }

  document.getElementById(`team-members`).innerHTML = cards;
}

// chiamo la funzione
renderTeam(teamMembers);