let allCards = [];
let currentSet = "unova";

function loadSet(setName, buttonEl) {
  fetch(`./${setName}.json`)
    .then(res => res.json())
    .then(data => {
      allCards = data;
      currentSet = setName;
      console.log(`Loaded ${setName} set with ${allCards.length} cards`);
      document.getElementById("cardContainer").innerHTML = "";

      document.querySelectorAll(".pack-btn, .pack-btn-active").forEach(btn => {
        btn.classList.remove("pack-btn-active");
        btn.classList.add("pack-btn");
      });

      buttonEl.classList.remove("pack-btn");
      buttonEl.classList.add("pack-btn-active");
    })
    .catch(err => console.error(`Error loading ${setName} cards:`, err));
}

loadSet(currentSet, document.getElementById("unovaBtn"));

document.getElementById("unovaBtn").addEventListener("click", function() {
  loadSet("unova", this);
});
document.getElementById("galarBtn").addEventListener("click", function() {
  loadSet("galar", this);
});
document.getElementById("alolaBtn").addEventListener("click", function() {
  loadSet("alola", this);
});

const typeColors = {
  Normal: '#c1c2c1',
  Fighting: '#ffac58',
  Flying: '#acd2f4',
  Poison: '#b885dc',
  Ground: '#b98e6e',
  Rock: '#cac6ae',
  Bug: '#b8c36b',
  Ghost: '#a384a2',
  Steel: '#98c2d2',
  Fire: '#ee7375',
  Water: '#74acf6',
  Grass: '#82c375',
  Electric: '#fdd75a',
  Psychic: '#f584a8',
  Ice: '#81dff7',
  Dragon: '#8f99ec',
  Dark: '#9b8a8c',
  Fairy: '#f4a3f5'
};

const defaultRarityWeights = {
  Common: 40,
  Uncommon: 25,
  Rare: 15,
  Epic: 10,
  Legendary: 7,
  Mythical: 3,
};

function getRarityIcon(rarity) {
  const diamondIconPath = '/assets/diamond.png';
  const starIconPath = '/assets/star.png';
  const crownIconPath = '/assets/crown.png';

  function renderRepeatedImage(src, count) {
    const span = document.createElement("span");
    span.style.display = "inline-flex";
    span.style.gap = "2px";
    span.style.alignItems = "center";
    span.style.justifyContent = "center";
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "rarity";
      img.width = 15;
      img.height = 15;
      span.appendChild(img);
    }
    return span;
  }

  switch (rarity) {
    case 'Common':
      return renderRepeatedImage(diamondIconPath, 1);
    case 'Uncommon':
      return renderRepeatedImage(diamondIconPath, 2);
    case 'Rare':
      return renderRepeatedImage(diamondIconPath, 3);
    case 'Epic':
      return renderRepeatedImage(diamondIconPath, 4);
    case 'Legendary': {
      const img = document.createElement("img");
      img.src = starIconPath;
      img.alt = "Legendary";
      img.width = 16;
      img.height = 16;
      return img;
    }
    case 'Mythical': {
      const img = document.createElement("img");
      img.src = crownIconPath;
      img.alt = "Mythical";
      img.width = 16;
      img.height = 16;
      return img;
    }
    default:
      return document.createTextNode("");
  }
}

function getRandomCard() {
  const pool = [];
  allCards.forEach(card => {
    const weight = defaultRarityWeights[card.rarity] || 1;
    for (let i = 0; i < weight; i++) {
      pool.push(card);
    }
  });
  return pool[Math.floor(Math.random() * pool.length)];
}

function openPack() {
  const btn = document.getElementById("openPackBtn");
  btn.disabled = true;
  btn.textContent = "Opening...";

  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const cardData = getRandomCard();

    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "card-front";
    front.classList.add(`rarity-${cardData.rarity.toLowerCase()}`);

    if (cardData.name === 'Zekrom'){
        front.style.background = `url('/assets/white.jpg') center/cover`;
    } else if (cardData.name === 'Reshiram'){
        front.style.background = `url('/assets/black.jpg') center/cover`;
    } else if (cardData.name === 'Kyurem' || cardData.name === 'Kyurem (White)' || cardData.name === 'Kyurem (Black)'){
        front.style.background = `url('/assets/b2w2.jpg') center/cover`;
    } else if (cardData.name === 'Tornadus' || cardData.name === 'Tornadus (Therian)' || cardData.name === 'Thundurus' || cardData.name === 'Thundurus (Therian)' || cardData.name === 'Landorus' || cardData.name === 'Landorus (Therian)' || cardData.name === 'Terrakion' || cardData.name === 'Virizion' || cardData.name === 'Cobalion' || cardData.name === 'Victini' || cardData.name === 'Meloetta' || cardData.name === 'Meloetta (Pirouette)' || cardData.name === 'Keldeo' || cardData.name === 'Keldeo (Resolute)' || cardData.name === 'Genesect'){
    front.style.background = `url('/assets/bw.jpg') center/cover`;
    } else if (cardData.name === 'Solgaleo'){
        front.style.background = `url('/assets/radiance.jpg') center/cover`;
    } else if (cardData.name === 'Lunala'){
        front.style.background = `url('/assets/umbra.jpg') center/cover`;
    } else if (cardData.name === 'Nihilego' || cardData.name === 'Buzzwole' || cardData.name === 'Pheromosa' || cardData.name === 'Xurkitree' || cardData.name === 'Celesteela' || cardData.name === 'Kartana' || cardData.name === 'Guzzlord' || cardData.name === 'Poipole' || cardData.name === 'Naganadel' || cardData.name === 'Stakataka' || cardData.name === 'Blacephalon' || cardData.name === 'Necrozma' || cardData.name === 'Ultra Necrozma'){
        front.style.background = `url('/assets/ultra.jpg') center/cover`;
    } else if (cardData.name === 'Dusk Mane Necrozma'){
        front.style.background = `url('/assets/wormholeradiance.jpg') center/cover`;
    } else if (cardData.name === 'Dawn Wings Necrozma'){
        front.style.background = `url('/assets/wormholeumbra.jpg') center/cover`;
    } else if (cardData.name.includes("Zacian")){
        front.style.background = `url('/assets/Sword.jpg') center/cover`;
    } else if (cardData.name.includes("Zamazenta")){
        front.style.background = `url('/assets/Shield.jpg') center/cover`;
    } else if (cardData.name.includes("Eternatus") || cardData.name.includes("GMax")){
        front.style.background = `url('/assets/GMax.jpg') center/cover`;
    } else if (cardData.name.includes("Urshifu") || cardData.name === "Kubfu"){
        front.style.background = `url('/assets/Urshifu.jpg') center/cover`;
    } else if (cardData.type && cardData.type.length > 1) {
    const color1 = typeColors[cardData.type[0]];
    const color2 = typeColors[cardData.type[1]];
    front.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    } else if (cardData.type && cardData.type.length === 1) {
    front.style.background = typeColors[cardData.type[0]];
    }

    const cardBox = document.createElement("div");
    cardBox.className = "card-box";

    const isShiny = Math.random() < 0.05; 

    const img = document.createElement("img");
    img.src = isShiny
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${cardData.number}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${cardData.number}.png`;

    img.alt = cardData.name + (isShiny ? " (Shiny)" : "");
    img.className = "card-img" + (isShiny ? " shiny" : "");

    if (isShiny) {
    img.style.filter = "drop-shadow(0 0 8px gold)";
    }

    cardBox.appendChild(img);

    front.appendChild(cardBox);

    const info = document.createElement("div");
    info.className = "card-info";
    info.innerHTML = `
    <strong>
    ${cardData.name}${isShiny ? " ✦" : ""}<br>
    </strong>
    `;

    front.appendChild(info);

      const rarityEl = document.createElement("div");
        rarityEl.className = "card-rarity";
        rarityEl.appendChild(getRarityIcon(cardData.rarity));

  front.appendChild(rarityEl);



    const back = document.createElement("div");
    back.className = "card-back";

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    cardEl.appendChild(cardInner);
    container.appendChild(cardEl);

    cardEl.addEventListener("click", () => {
      const audio = new Audio(`https://play.pokemonshowdown.com/audio/cries/${cardData.audio}.mp3`);
      audio.volume = 0.5;
      audio.play();
    });

    setTimeout(() => {
      cardEl.classList.add("show");
      setTimeout(() => {
        cardEl.classList.add("flipped");
      }, 400);
    }, i * 400);
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Open Pack";
  }, 3000);
}

document.getElementById("openPackBtn").addEventListener("click", openPack);
