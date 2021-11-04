// Creo un array di oggetti
// creo ciclo for per scorrere dentro l'array 

var classi = [

    {   
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "nome personaggio":"Wayne Bernett",
        "ruolo":"Founder e CEO"
    },

    {
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "nome personaggio":"Angela Carol",
        "ruolo":"Chief Editor"
    },

    {
        "immagine": "img/walter-gordon-office-manager.jpg",
        "nome personaggio":"Walter Gordon",
        "ruolo":"Officer Manager"
    },

    {
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "nome personaggio":"Angela Lopez",
        "ruolo":"Social Media Manager"
    },

    {
        "immagine": "img/scott-estrada-developer.jpg",
        "nome personaggio":"Scott Estrada",
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

    document.querySelector('.team-container').innerHTML += `<div class="team-card">
        <div class="card-image">
            <img
            src="img/wayne-barnett-founder-ceo.jpg"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${classi[i].ruolo}</h3>
            <p>Founder & CEO</p>
        </div>
    </div>`

    document.querySelector('.team-container').innerHTML += `<div class="team-card">
    <div class="card-image">
        <img
        src="img/wayne-barnett-founder-ceo.jpg"
        alt="Wayne Barnett"
        />
    </div>
    <div class="card-text">
        <h3>${classi[i].ruolo}</h3>
        <p>Founder & CEO</p>
    </div>
</div>`

document.querySelector('.team-container').innerHTML += `<div class="team-card">
<div class="card-image">
    <img
    src="img/wayne-barnett-founder-ceo.jpg"
    alt="Wayne Barnett"
    />
</div>
<div class="card-text">
    <h3>${classi[i].ruolo}</h3>
    <p>Founder & CEO</p>
</div>
</div>`

document.querySelector('.team-container').innerHTML += `<div class="team-card">
<div class="card-image">
    <img
    src="img/wayne-barnett-founder-ceo.jpg"
    alt="Wayne Barnett"
    />
</div>
<div class="card-text">
    <h3>${classi[i].ruolo}</h3>
    <p>Founder & CEO</p>
</div>
</div>`

document.querySelector('.team-container').innerHTML += `<div class="team-card">
<div class="card-image">
    <img
    src="img/wayne-barnett-founder-ceo.jpg"
    alt="Wayne Barnett"
    />
</div>
<div class="card-text">
    <h3>${classi[i].ruolo}</h3>
    <p>Founder & CEO</p>
</div>
</div>`

document.querySelector('.team-container').innerHTML += `<div class="team-card">
<div class="card-image">
    <img
    src="img/wayne-barnett-founder-ceo.jpg"
    alt="Wayne Barnett"
    />
</div>
<div class="card-text">
    <h3>${classi[i].ruolo}</h3>
    <p>Founder & CEO</p>
</div>
</div>`


}

