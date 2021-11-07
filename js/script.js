// Creo un array di oggetti
// creo ciclo for per scorrere dentro l'array 

var classi = [

    {   
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "nome_personaggio":"Wayne Bernett",
        "ruolo":"Founder e CEO"
    },

    {
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "nome_personaggio":"Angela Carol",
        "ruolo":"Chief Editor"
    },

    {
        "immagine": "img/walter-gordon-office-manager.jpg",
        "nome_personaggio":"Walter Gordon",
        "ruolo":"Officer Manager"
    },

    {
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "nome_personaggio":"Angela Lopez",
        "ruolo":"Social Media Manager"
    },

    {
        "immagine": "img/scott-estrada-developer.jpg",
        "nome_personaggio":"Scott Estrada",
        "ruolo":"Developer"
    },

    {
        "immagine": "img/barbara-ramos-graphic-designer.jpg",
        "nome_personaggio":"Barbara Ramos",
        "ruolo":"Graphic Designer"
    }

];

console.log(classi);

for(let i = 0; i < classi.length; i++) {

    const oggetto = classi[i];
    const nome = classi[i].immagine;

    const peso = classi[i].nome_personaggio;
    const brand = classi[i].ruolo;

    document.querySelector('.team-container').innerHTML += `<div class="team-card">
        <div class="card-image">
            <img src=${nome}/>
        </div>
        <div class="card-text">
            <h3>${peso}</h3>
            <p>${brand}</p>
        </div>
    </div>`

}

