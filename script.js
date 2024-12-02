// Constantes
const galerieBlock = document.querySelector(".galerie__block");
const linkPicasso = document.querySelector(".linkPicasso");
const linkCaillebotte = document.querySelector(".linkCaillebotte");
const linkKandinsky = document.querySelector(".linkKandinsky");
const linkVermeer = document.querySelector(".linkVermeer");
const linkmonet = document.querySelector(".linkMonet");
const linkVangogh = document.querySelector(".linkVangogh");
const clickBurger = document.querySelector(".burger__picture");
const navList = document.querySelector(".nav__list");

// Variables

let pictureMain = [];
pictureMain = document.querySelectorAll(".img__galerie");
let blockgalerie = document.querySelector(".galerie__picture");
let titleGalerie = document.querySelector(".title__galerie");
let figCaption = [];
figCaption = document.querySelectorAll(".legend__picture");

// Déclaration des tableaux de peintures
let artistePeintres = [
  {
    nom: "Picasso",
    peintures: [
      {
        nom: "Demoiselle Avignon",
        image: "/assets/img/Demoiselles_Avignon_picasso.png",
      },
      {
        nom: "Femme qui pleure",
        image: "/assets/img/Femme_qui_pleure_picasso.png",
      },
      { nom: "Guernica", image: "/assets/img/guernica_picasso.png" },
      {
        nom: "Le Peintre et son modèle",
        image: "/assets/img/Le_Peintre_et_son_Modele_picasso.png",
      },
      { nom: "Marie-Therese", image: "/assets/img/Marie_Therese_picasso.png" },

      { nom: "Autoportrait", image: "/assets/img/Autoportrait_Picasso.png" },
    ],
  },
  {
    nom: "Vermeer",
    peintures: [
      {
        nom: "Fille à la perle",
        image: "/assets/img/fille_a_la-perle_verm.png",
      },
      { nom: "La Laitière", image: "/assets/img/La_Laitière_verm.png" },
      {
        nom: "la Liseuse à la fenêtre",
        image: "/assets/img/La_Liseuse_à_la_fenêtre_verm.png",
      },
    ],
  },
  {
    nom: "Kandinsky",
    peintures: [
      {
        nom: "Composition 1939",
        image: "/assets/img/Composition-1939_kdy.png",
      },
      {
        nom: "Composiiton VI 1913",
        image: "/assets/img/Composition-VI-1913_kdy.png",
      },
      {
        nom: "Jaune Rouge Bleu",
        image: "/assets/img/Jaune_rouge_bleu_kdy.png",
      },
      {
        nom: "Noir et Violet",
        image: "/assets/img/Noir-et-violet-1923_kdy.png",
      },
      { nom: "Moscou 1916", image: "/assets/img/Moscou-1916_kdy.png" },
      {
        nom: "Tableau en Bleu 1925",
        image: "/assets/img/tableau-en-bleu-1925-_kdy.png",
      },
    ],
  },

  {
    nom: "Monet",
    peintures: [
      {
        nom: "Impression Soleil Levant 1872",
        image: "/assets/img/Impression_soleil_levant-1872_monet.png",
      },
      { nom: "La Promenade", image: "/assets/img/La_Promenade.monet.png" },
      {
        nom: "Le Déjeuner 1873",
        image: "/assets/img/Le_déjeuner-1873_monet.png",
      },
      {
        nom: "Les Coquelicots",
        image: "/assets/img/Les_Coquelicots_monet.png",
      },
      {
        nom: "MMe Monet et enfant 1875",
        image: "/assets/img/Madame_Monet_et_Enfant-1875.png",
      },
      { nom: "Nymphéas", image: "/assets/img/Nymphéas-1916_monet.png" },
    ],
  },

  {
    nom: "Caillebotte",
    peintures: [
      {
        nom: "Jour de pluie à Paris (1877)",
        image: "/assets/img/Jour_de_pluie_à_Paris.png",
      },
      {
        nom: "Les Peintres en bâtiment (1877)",
        image: "/assets/img/Peintres_en_batiment.png",
      },
      {
        nom: "Les Raboteurs de parquet (1877)",
        image: "/assets/img/Raboteurs_de_parquet.png",
      },
      {
        nom: "Périssoires sur l'Yerres (1877)",
        image: "/assets/img/Périssoires_sur_l’Yerres.png",
      },
      {
        nom: "Autoportrait (1877)",
        image: "/assets/img/Autoportrait_Caillebotte.png",
      },
    ],
  },
  {
    nom: "Van Gogh",
    peintures: [
      {
        nom: "Campagne Montagneuse 1889",
        image: "/assets/img/Campagne_Montagneuse-1889_vg.jpg",
      },
      {
        nom: "La Chambre de Van Gogh 1889",
        image: "/assets/img/La_Chambre_de_van_gogh-1889-.png",
      },
      {
        nom: "La Nuit Etoilée 1889",
        image: "/assets/img/La_nuit_étoilée-1889_vg.png",
      },
      { nom: "La Sieste", image: "/assets/img/La_Sieste_vg.png" },
      { nom: "les Iris", image: "/assets/img/Les_Iris-1889_vg.png" },
      { nom: "La Terasse de Café", image: "/assets/img/Terrasse_café_vg.png" },
    ],
  },
];



// declaration des onglets navigations peintres
let artistesNav = document.querySelectorAll(".li__content");

// nettoyage du contenu
galerieBlock.innerHTML = "";

//  fonction Galerie dynamique
function afficherGalerie(artiste) {
  let titlePeintre = document.createElement("h2");
  titlePeintre.setAttribute("class", "title__galerie");
  titlePeintre.innerText = artiste.nom;
  galerieBlock.appendChild(titlePeintre);
  console.log(titlePeintre);

  let galeriePicture = document.createElement("div");
  galeriePicture.setAttribute("class", "galerie__picture");
  console.log(galeriePicture);

  //ajout de peintures
  artiste.peintures.forEach((peinture) => {
    let figure = document.createElement("figure");
    figure.className = "pict__galerie";

    let image = document.createElement("img");
    image.src = peinture.image;
    image.alt = peinture.nom;
    image.className = "img__galerie";

    let figcaption = document.createElement("figcaption");
    figcaption.className = "legend__picture";
    figcaption.textContent = peinture.nom;

    figure.appendChild(image);
    figure.appendChild(figcaption);
    galeriePicture.appendChild(figure);

    //liveBox

    let liveBox = document.querySelector(".livebox__block");
    const chevronLeft = document.querySelector(".chevronLeft");
    const chevronRight = document.querySelector(".chevronRight");
    const imgLivebox = document.querySelector(".imgLivebox");
    const cross = document.querySelector(".cross");

    image.addEventListener("click", function (event) {
      event.preventDefault();
      liveBox.style.display = "flex";
      imgLivebox.innerHTML = figure.innerHTML;
    });

    cross.addEventListener("click", function (event) {
      event.preventDefault();
      liveBox.style.display = "none";
    });

    chevronLeft.addEventListener("click", function (event) {
      event.preventDefault();

      artiste.peintures.forEach((peinture) => {
        imgLivebox.innerHTML = figure.innerHTML;

        console.log(figure.innerHTML);
      });
    });

    chevronRight.addEventListener("click", function (event) {
      event.preventDefault();

      artiste.peintures.forEach((peinture) => {
        imgLivebox.innerHTML = figure.innerHTML;

        console.log(figure.innerHTML);
      });
    });

    // animations

    galeriePicture.classList.add("animation");
    titlePeintre.classList.add("animation");
  });
  galerieBlock.appendChild(galeriePicture);
}

artistesNav.forEach((onglets) => {
  onglets.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(onglets.innerHTML); // verif nom artiste

    //trouver l'artiste

    let artisteNom = onglets.dataset.artiste;
    let artisteSelectionne = artistePeintres.find(
      (artiste) => artiste.nom === artisteNom
    );

    //vider et afficher la nouvelle galerie

    if (artisteSelectionne) {
      galerieBlock.innerHTML = "";
      afficherGalerie(artisteSelectionne);
    }

  });
});
clickBurger.addEventListener("click", function () {
  navList.classList.toggle("hidden");
});

//---version initiale
// ---Genération des balises

// artistePeintres.forEach(function (item, index, array) {
//   let pictGalerie = document.createElement("figure");
//   pictGalerie.setAttribute("class", "pict__galerie");
//   galerieBlock.append(pictGalerie);
//   console.log(pictGalerie);

//   let imageItem = document.createElement("img");
//   imageItem.setAttribute("class", "img__galerie");

//   imageItem.innerText = artistePeintres.image;
//   galerieBlock.append(imageItem);
//   console.log(imageItem);

//   let figCaption = document.createElement("figcaption");
//   figCaption.setAttribute("class", "legend__picture");
//   galerieBlock.append(figCaption);
//   console.log(figCaption);
// });

//---------------onglet Picasso---//

// linkPicasso.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Picasso";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[3].style.display = "block";
//   figCaption[3].style.display = "block";

//   pictureMain[4].style.display = "block";
//   figCaption[4].style.display = "block";

//   pictureMain[0].src = picturePicasso[0].image;
//   figCaption[0].innerText = picturePicasso[0].nom;

//   pictureMain[1].src = picturePicasso[1].image;
//   figCaption[1].innerText = picturePicasso[1].nom;

//   pictureMain[2].src = picturePicasso[2].image;
//   figCaption[2].innerText = picturePicasso[2].nom;

//   pictureMain[3].src = picturePicasso[3].image;
//   figCaption[3].innerText = picturePicasso[3].nom;

//   pictureMain[4].src = picturePicasso[4].image;
//   figCaption[4].innerText = picturePicasso[4].nom;

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });

//---------------onglet Caillebotte-----//

// linkCaillebotte.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Caillebotte";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[3].style.display = "block";
//   figCaption[3].style.display = "block";

//   pictureMain[4].style.display = "block";
//   figCaption[4].style.display = "block";

//   pictureMain[0].src = pictureCaillebotte[0].image;
//   figCaption[0].innerText = pictureCaillebotte[0].nom;

//   pictureMain[1].src = pictureCaillebotte[1].image;
//   figCaption[1].innerText = pictureCaillebotte[1].nom;

//   pictureMain[2].src = pictureCaillebotte[2].image;
//   figCaption[2].innerText = pictureCaillebotte[2].nom;

//   pictureMain[3].src = pictureCaillebotte[3].image;
//   figCaption[3].innerText = pictureCaillebotte[3].nom;

//   pictureMain[4].src = pictureCaillebotte[4].image;
//   figCaption[4].innerText = pictureCaillebotte[4].nom;

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });

// //---------------onglet Vermeer-----//

// linkVermeer.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Vermeer";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[0].src = pictureVermeer[0].image;
//   figCaption[0].innerText = pictureVermeer[0].nom;

//   pictureMain[1].src = pictureVermeer[1].image;
//   figCaption[1].innerText = pictureVermeer[1].nom;

//   pictureMain[2].src = pictureVermeer[2].image;
//   figCaption[2].innerText = pictureVermeer[2].nom;

//   pictureMain[3].style.display = "none";
//   figCaption[3].style.display = "none";

//   pictureMain[4].style.display = "none";
//   figCaption[4].style.display = "none";

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });

// //---------------onglet Kandinsky-----//

// linkKandinsky.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Kandinsky";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[0].src = pictureKandinsky[0].image;
//   figCaption[0].innerText = pictureKandinsky[0].nom;

//   pictureMain[1].src = pictureKandinsky[1].image;
//   figCaption[1].innerText = pictureKandinsky[1].nom;

//   pictureMain[2].src = pictureKandinsky[2].image;
//   figCaption[2].innerText = pictureKandinsky[2].nom;

//   pictureMain[3].style.display = "block";
//   figCaption[3].style.display = "block";

//   pictureMain[3].src = pictureKandinsky[3].image;
//   figCaption[3].innerText = pictureKandinsky[3].nom;

//   pictureMain[4].style.display = "block";
//   figCaption[4].style.display = "block";

//   pictureMain[4].src = pictureKandinsky[4].image;
//   figCaption[4].innerText = pictureKandinsky[4].nom;

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });

// //---------------onglet Monet-----//

// linkmonet.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Monet";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[0].src = pictureMonet[0].image;
//   figCaption[0].innerText = pictureMonet[0].nom;

//   pictureMain[1].src = pictureMonet[1].image;
//   figCaption[1].innerText = pictureMonet[1].nom;

//   pictureMain[2].src = pictureMonet[2].image;
//   figCaption[2].innerText = pictureMonet[2].nom;

//   pictureMain[3].src = pictureMonet[3].image;
//   figCaption[3].innerText = pictureMonet[3].nom;

//   pictureMain[4].src = pictureMonet[4].image;
//   figCaption[4].innerText = pictureMonet[4].nom;

//   pictureMain[3].style.display = "block";
//   figCaption[3].style.display = "block";

//   pictureMain[4].style.display = "block";
//   figCaption[4].style.display = "block";

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });

// //---------------onglet Van Gogh-----//

// linkVangogh.addEventListener("click", function (event) {
//   event.preventDefault();

//   titleGalerie.textContent = "Galerie Van Gogh";
//   titleGalerie.classList.add("animation");
//   blockgalerie.classList.add("animation");

//   pictureMain[3].style.display = "block";
//   figCaption[3].style.display = "block";

//   pictureMain[4].style.display = "block";
//   figCaption[4].style.display = "block";

//   pictureMain[0].src = pictureVangogh[0].image;
//   figCaption[0].innerText = pictureVangogh[0].nom;

//   pictureMain[1].src = pictureVangogh[1].image;
//   figCaption[1].innerText = pictureVangogh[1].nom;

//   pictureMain[2].src = pictureVangogh[2].image;
//   figCaption[2].innerText = pictureVangogh[2].nom;

//   pictureMain[3].src = pictureVangogh[3].image;
//   figCaption[3].innerText = pictureVangogh[3].nom;

//   pictureMain[4].src = pictureVangogh[4].image;
//   figCaption[4].innerText = pictureVangogh[4].nom;

//   setTimeout(() => {
//     titleGalerie.classList.remove("animation");
//     blockgalerie.classList.remove("animation");

//     console.log("test 0.5 seconde et remove");
//   }, "500");
// });
