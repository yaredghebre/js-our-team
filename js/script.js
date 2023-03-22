// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


// Creo ARRAY con MEMBRI TEAM e al suo interno gli OGGETTI
const teamMembers = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carroll",
        position: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
];

// STAMPO IN CONSOLE i dati dei TEAM MEMBERS
// CREO CICLO FOR
// for(let i = 0; i < teamMembers.length; i++) {
//     let teamArray = teamMembers[i];
//     console.log(teamArray.name, teamArray.position, teamArray.picture);
// }


// STAMPO nel DOM i dati dei TEAM MEMBERS
// CREO CICLO FOR
const cardsRow = document.querySelector(".row");

let cards = "";
for(let i = 0; i < teamMembers.length; i++) {
    const currentMember = teamMembers[i];
    cards += `
    <div class="col"> 
            <div class="card">
                <img src="img/${currentMember.picture} " class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${currentMember.name} </h5>
                  <p class="card-text">${currentMember.position} </p>
                </div>
            </div>
        </div>`;
}
console.log(cards);
cardsRow.innerHTML = cards;

