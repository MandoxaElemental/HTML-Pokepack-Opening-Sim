const allCards = [
    { name: 'Bulbasaur', number: 1, type: ['Grass', 'Poison'], audio: 'bulbasaur', rarity: 'Uncommon', move: 'Vine Whip' },
  { name: 'Ivysaur', number: 2, type: ['Grass', 'Poison'], audio: 'ivysaur', rarity: 'Rare', move: 'Razor Leaf' },
  { name: 'Venusaur', number: 3, type: ['Grass', 'Poison'], audio: 'venusaur', rarity: 'Epic', move: 'Solar Beam' },
  { name: 'Charmander', number: 4, type: ['Fire'], audio: 'charamander', rarity: 'Uncommon', move: 'Ember' },
  { name: 'Charmeleon', number: 5, type: ['Fire'], audio: 'charmeleon', rarity: 'Rare', move: 'Flamethrower' },
  { name: 'Charizard', number: 6, type: ['Fire', 'Flying'], audio: 'charizard', rarity: 'Epic', move: 'Fire Blast' },
  { name: 'Squirtle', number: 7, type: ['Water'], audio: 'squirtle', rarity: 'Uncommon', move: 'Water Gun' },
  { name: 'Wartortle', number: 8, type: ['Water'], audio: 'wartortle', rarity: 'Rare', move: 'Water Pulse' },
  { name: 'Blastoise', number: 9, type: ['Water'], audio: 'blastoise', rarity: 'Epic', move: 'Hydro Pump' },
  { name: 'Caterpie', number: 10, type: ['Bug'], audio: 'caterpie', rarity: 'Common', move: 'Tackle' },
  { name: 'Metapod', number: 11, type: ['Bug'], audio: 'metapod', rarity: 'Common', move: 'Harden' },
  { name: 'Butterfree', number: 12, type: ['Bug', 'Flying'], audio: 'butterfree', rarity: 'Rare', move: 'Gust' },
  { name: 'Weedle', number: 13, type: ['Bug', 'Poison'], audio: 'weedle', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Kakuna', number: 14, type: ['Bug', 'Poison'], audio: 'kakuna', rarity: 'Common', move: 'Harden' },
  { name: 'Beedrill', number: 15, type: ['Bug', 'Poison'], audio: 'beedrill', rarity: 'Rare', move: 'Twineedle' },
  { name: 'Pidgey', number: 16, type: ['Normal', 'Flying'], audio: 'pidgey', rarity: 'Common', move: 'Tackle' },
  { name: 'Pidgeotto', number: 17, type: ['Normal', 'Flying'], audio: 'pidgeotto', rarity: 'Uncommon', move: 'Wing Attack' },
  { name: 'Pidgeot', number: 18, type: ['Normal', 'Flying'], audio: 'pidgeot', rarity: 'Rare', move: 'Hurricane' },
  { name: 'Rattata', number: 19, type: ['Normal'], audio: 'rattata', rarity: 'Common', move: 'Bite' },
  { name: 'Raticate', number: 20, type: ['Normal'], audio: 'raticate', rarity: 'Uncommon', move: 'Hyper Fang' },
  { name: 'Spearow', number: 21, type: ['Normal', 'Flying'], audio: 'spearow', rarity: 'Common', move: 'Peck' },
  { name: 'Fearow', number: 22, type: ['Normal', 'Flying'], audio: 'fearow', rarity: 'Uncommon', move: 'Drill Peck' },
  { name: 'Ekans', number: 23, type: ['Poison'], audio: 'ekans', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Arbok', number: 24, type: ['Poison'], audio: 'arbok', rarity: 'Rare', move: 'Gunk Shot' },
  { name: 'Pikachu', number: 25, type: ['Electric'], audio: 'pikachu', rarity: 'Uncommon', move: 'Volt Tackle' },
  { name: 'Raichu', number: 26, type: ['Electric'], audio: 'raichu', rarity: 'Rare', move: 'Thunder' },
  { name: 'Sandshrew', number: 27, type: ['Ground'], audio: 'sandshrew', rarity: 'Common', move: 'Dig' },
  { name: 'Sandslash', number: 28, type: ['Ground'], audio: 'sandslash', rarity: 'Rare', move: 'Earthquake' },
  { name: 'Nidoran♀', number: 29, type: ['Poison'], audio: 'nidoranf', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Nidorina', number: 30, type: ['Poison'], audio: 'nidorina', rarity: 'Uncommon', move: 'Double Kick' },
  { name: 'Nidoqueen', number: 31, type: ['Poison', 'Ground'], audio: 'nidoqueen', rarity: 'Epic', move: 'Earth Power' },
  { name: 'Nidoran♂', number: 32, type: ['Poison'], audio: 'nidoranm', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Nidorino', number: 33, type: ['Poison'], audio: 'nidorino', rarity: 'Uncommon', move: 'Horn Attack' },
  { name: 'Nidoking', number: 34, type: ['Poison', 'Ground'], audio: 'nidoking', rarity: 'Epic', move: 'Megahorn' },
  { name: 'Clefairy', number: 35, type: ['Fairy'], audio: 'clefairy', rarity: 'Uncommon', move: 'Moonblast' },
  { name: 'Clefable', number: 36, type: ['Fairy'], audio: 'clefable', rarity: 'Rare', move: 'Meteor Mash' },
  { name: 'Vulpix', number: 37, type: ['Fire'], audio: 'vulpix', rarity: 'Uncommon', move: 'Flamethrower' },
  { name: 'Ninetales', number: 38, type: ['Fire'], audio: 'ninetales', rarity: 'Rare', move: 'Fire Spin' },
  { name: 'Jigglypuff', number: 39, type: ['Normal', 'Fairy'], audio: 'jigglypuff', rarity: 'Common', move: 'Sing' },
  { name: 'Wigglytuff', number: 40, type: ['Normal', 'Fairy'], audio: 'wigglytuff', rarity: 'Rare', move: 'Hyper Voice' },
  { name: 'Zubat', number: 41, type: ['Poison', 'Flying'], audio: 'zubat', rarity: 'Common', move: 'Leech Life' },
  { name: 'Golbat', number: 42, type: ['Poison', 'Flying'], audio: 'golbat', rarity: 'Uncommon', move: 'Air Slash' },
  { name: 'Oddish', number: 43, type: ['Grass', 'Poison'], audio: 'oddish', rarity: 'Common', move: 'Absorb' },
  { name: 'Gloom', number: 44, type: ['Grass', 'Poison'], audio: 'gloom', rarity: 'Uncommon', move: 'Acid' },
  { name: 'Vileplume', number: 45, type: ['Grass', 'Poison'], audio: 'vileplume', rarity: 'Rare', move: 'Petal Dance' },
  { name: 'Paras', number: 46, type: ['Bug', 'Grass'], audio: 'paras', rarity: 'Common', move: 'Spore' },
  { name: 'Parasect', number: 47, type: ['Bug', 'Grass'], audio: 'parasect', rarity: 'Uncommon', move: 'X-Scissor' },
  { name: 'Venonat', number: 48, type: ['Bug', 'Poison'], audio: 'venonat', rarity: 'Common', move: 'Bug Bite' },
  { name: 'Venomoth', number: 49, type: ['Bug', 'Poison'], audio: 'venomoth', rarity: 'Rare', move: 'Psybeam' },
  { name: 'Diglett', number: 50, type: ['Ground'], audio: 'diglett', rarity: 'Common', move: 'Dig' },
  { name: 'Dugtrio', number: 51, type: ['Ground'], audio: 'dugtrio', rarity: 'Rare', move: 'Earthquake' },
  { name: 'Meowth', number: 52, type: ['Normal'], audio: 'meowth', rarity: 'Common', move: 'Pay Day' },
  { name: 'Persian', number: 53, type: ['Normal'], audio: 'persian', rarity: 'Rare', move: 'Slash' },
  { name: 'Psyduck', number: 54, type: ['Water'], audio: 'psyduck', rarity: 'Common', move: 'Water Gun' },
  { name: 'Golduck', number: 55, type: ['Water'], audio: 'golduck', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Mankey', number: 56, type: ['Fighting'], audio: 'mankey', rarity: 'Common', move: 'Karate Chop' },
  { name: 'Primeape', number: 57, type: ['Fighting'], audio: 'primeape', rarity: 'Rare', move: 'Cross Chop' },
  { name: 'Growlithe', number: 58, type: ['Fire'], audio: 'growlithe', rarity: 'Uncommon', move: 'Flame Wheel' },
  { name: 'Arcanine', number: 59, type: ['Fire'], audio: 'arcanine', rarity: 'Epic', move: 'Flare Blitz' },
  { name: 'Poliwag', number: 60, type: ['Water'], audio: 'poliwag', rarity: 'Common', move: 'Bubble' },
  { name: 'Poliwhirl', number: 61, type: ['Water'], audio: 'poliwhirl', rarity: 'Uncommon', move: 'Bubble Beam' },
  { name: 'Poliwrath', number: 62, type: ['Water', 'Fighting'], audio: 'poliwrath', rarity: 'Rare', move: 'Dynamic Punch' },
  { name: 'Abra', number: 63, type: ['Psychic'], audio: 'abra', rarity: 'Uncommon', move: 'Teleport' },
  { name: 'Kadabra', number: 64, type: ['Psychic'], audio: 'kadabra', rarity: 'Rare', move: 'Psybeam' },
  { name: 'Alakazam', number: 65, type: ['Psychic'], audio: 'alakazam', rarity: 'Epic', move: 'Kinesis' },
  { name: 'Machop', number: 66, type: ['Fighting'], audio: 'machop', rarity: 'Uncommon', move: 'Low Kick' },
  { name: 'Machoke', number: 67, type: ['Fighting'], audio: 'machoke', rarity: 'Rare', move: 'Karate Chop' },
  { name: 'Machamp', number: 68, type: ['Fighting'], audio: 'machamp', rarity: 'Epic', move: 'Dynamic Punch' },
  { name: 'Bellsprout', number: 69, type: ['Grass', 'Poison'], audio: 'bellsprout', rarity: 'Common', move: 'Vine Whip' },
  { name: 'Weepinbell', number: 70, type: ['Grass', 'Poison'], audio: 'weepinbell', rarity: 'Uncommon', move: 'Razor Leaf' },
  { name: 'Victreebel', number: 71, type: ['Grass', 'Poison'], audio: 'victreebel', rarity: 'Rare', move: 'Leaf Blade' },
  { name: 'Tentacool', number: 72, type: ['Water', 'Poison'], audio: 'tentacool', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Tentacruel', number: 73, type: ['Water', 'Poison'], audio: 'tentacruel', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Geodude', number: 74, type: ['Rock', 'Ground'], audio: 'geodude', rarity: 'Uncommon', move: 'Rock Throw' },
  { name: 'Graveler', number: 75, type: ['Rock', 'Ground'], audio: 'graveler', rarity: 'Rare', move: 'Rollout' },
  { name: 'Golem', number: 76, type: ['Rock', 'Ground'], audio: 'golem', rarity: 'Epic', move: 'Stone Edge' },
  { name: 'Ponyta', number: 77, type: ['Fire'], audio: 'ponyta', rarity: 'Uncommon', move: 'Flame Wheel' },
  { name: 'Rapidash', number: 78, type: ['Fire'], audio: 'rapidash', rarity: 'Rare', move: 'Flare Blitz' },
  { name: 'Slowpoke', number: 79, type: ['Water', 'Psychic'], audio: 'slowpoke', rarity: 'Common', move: 'Water Gun' },
  { name: 'Slowbro', number: 80, type: ['Water', 'Psychic'], audio: 'slowbro', rarity: 'Rare', move: 'Psychic' },
  { name: 'Magnemite', number: 81, type: ['Electric', 'Steel'], audio: 'magnemite', rarity: 'Common', move: 'Thunder Shock' },
  { name: 'Magneton', number: 82, type: ['Electric', 'Steel'], audio: 'magneton', rarity: 'Rare', move: 'Discharge' },
  { name: "Farfetch'd", number: 83, type: ['Normal', 'Flying'], audio: 'farfetchd', rarity: 'Uncommon', move: 'Aerial Ace' },
  { name: 'Doduo', number: 84, type: ['Normal', 'Flying'], audio: 'doduo', rarity: 'Common', move: 'Peck' },
  { name: 'Dodrio', number: 85, type: ['Normal', 'Flying'], audio: 'dodrio', rarity: 'Rare', move: 'Drill Peck' },
  { name: 'Seel', number: 86, type: ['Water'], audio: 'seel', rarity: 'Common', move: 'Aqua Jet' },
  { name: 'Dewgong', number: 87, type: ['Water', 'Ice'], audio: 'dewgong', rarity: 'Uncommon', move: 'Ice Beam' },
  { name: 'Grimer', number: 88, type: ['Poison'], audio: 'grimer', rarity: 'Common', move: 'Sludge' },
  { name: 'Muk', number: 89, type: ['Poison'], audio: 'muk', rarity: 'Rare', move: 'Sludge Bomb' },
  { name: 'Shellder', number: 90, type: ['Water'], audio: 'shellder', rarity: 'Common', move: 'Tackle' },
  { name: 'Cloyster', number: 91, type: ['Water', 'Ice'], audio: 'cloyster', rarity: 'Rare', move: 'Icicle Spear' },
  { name: 'Gastly', number: 92, type: ['Ghost', 'Poison'], audio: 'gastly', rarity: 'Uncommon', move: 'Lick' },
  { name: 'Haunter', number: 93, type: ['Ghost', 'Poison'], audio: 'haunter', rarity: 'Rare', move: 'Shadow Ball' },
  { name: 'Gengar', number: 94, type: ['Ghost', 'Poison'], audio: 'gengar', rarity: 'Epic', move: 'Destiny Bond' },
  { name: 'Onix', number: 95, type: ['Rock', 'Ground'], audio: 'onix', rarity: 'Uncommon', move: 'Rock Slide' },
  { name: 'Drowzee', number: 96, type: ['Psychic'], audio: 'drowzee', rarity: 'Common', move: 'Hypnosis' },
  { name: 'Hypno', number: 97, type: ['Psychic'], audio: 'hypno', rarity: 'Rare', move: 'Dream Eater' },
  { name: 'Krabby', number: 98, type: ['Water'], audio: 'krabby', rarity: 'Common', move: 'Bubble' },
  { name: 'Kingler', number: 99, type: ['Water'], audio: 'kingler', rarity: 'Rare', move: 'Crabhammer' },
  { name: 'Voltorb', number: 100, type: ['Electric'], audio: 'voltorb', rarity: 'Common', move: 'Spark' },
  { name: 'Electrode', number: 101, type: ['Electric'], audio: 'electrode', rarity: 'Rare', move: 'Thunderbolt' },
  { name: 'Exeggcute', number: 102, type: ['Grass', 'Psychic'], audio: 'exeggcute', rarity: 'Common', move: 'Bullet Seed' },
  { name: 'Exeggutor', number: 103, type: ['Grass', 'Psychic'], audio: 'exeggutor', rarity: 'Epic', move: 'Solar Beam' },
  { name: 'Cubone', number: 104, type: ['Ground'], audio: 'cubone', rarity: 'Uncommon', move: 'Bone Club' },
  { name: 'Marowak', number: 105, type: ['Ground'], audio: 'marowak', rarity: 'Rare', move: 'Bonemerang' },
  { name: 'Hitmonlee', number: 106, type: ['Fighting'], audio: 'hitmonlee', rarity: 'Rare', move: 'High Jump Kick' },
  { name: 'Hitmonchan', number: 107, type: ['Fighting'], audio: 'hitmonchan', rarity: 'Rare', move: 'Mach Punch' },
  { name: 'Lickitung', number: 108, type: ['Normal'], audio: 'lickitung', rarity: 'Uncommon', move: 'Lick' },
  { name: 'Koffing', number: 109, type: ['Poison'], audio: 'koffing', rarity: 'Common', move: 'Smog' },
  { name: 'Weezing', number: 110, type: ['Poison'], audio: 'weezing', rarity: 'Rare', move: 'Sludge Bomb' },
  { name: 'Rhyhorn', number: 111, type: ['Ground', 'Rock'], audio: 'rhyhorn', rarity: 'Uncommon', move: 'Rock Blast' },
  { name: 'Rhydon', number: 112, type: ['Ground', 'Rock'], audio: 'rhydon', rarity: 'Epic', move: 'Stone Edge' },
  { name: 'Chansey', number: 113, type: ['Normal'], audio: 'chansey', rarity: 'Rare', move: 'Soft-Boiled' },
  { name: 'Tangela', number: 114, type: ['Grass'], audio: 'tangela', rarity: 'Uncommon', move: 'Vine Whip' },
  { name: 'Kangaskhan', number: 115, type: ['Normal'], audio: 'kangaskhan', rarity: 'Rare', move: 'Mega Punch' },
  { name: 'Horsea', number: 116, type: ['Water'], audio: 'horsea', rarity: 'Common', move: 'Bubble' },
  { name: 'Seadra', number: 117, type: ['Water'], audio: 'seadra', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Goldeen', number: 118, type: ['Water'], audio: 'goldeen', rarity: 'Common', move: 'Water Pulse' },
  { name: 'Seaking', number: 119, type: ['Water'], audio: 'seaking', rarity: 'Uncommon', move: 'Waterfall' },
  { name: 'Staryu', number: 120, type: ['Water'], audio: 'staryu', rarity: 'Common', move: 'Water Gun' },
  { name: 'Starmie', number: 121, type: ['Water', 'Psychic'], audio: 'starmie', rarity: 'Rare', move: 'Psychic' },
  { name: 'Mr. Mime', number: 122, type: ['Psychic', 'Fairy'], audio: 'mrmime', rarity: 'Rare', move: 'Barrier' },
  { name: 'Scyther', number: 123, type: ['Bug', 'Flying'], audio: 'scyther', rarity: 'Rare', move: 'X-Scissor' },
  { name: 'Jynx', number: 124, type: ['Ice', 'Psychic'], audio: 'jynx', rarity: 'Rare', move: 'Lovely Kiss' },
  { name: 'Electabuzz', number: 125, type: ['Electric'], audio: 'electabuzz', rarity: 'Rare', move: 'Thunder Punch' },
  { name: 'Magmar', number: 126, type: ['Fire'], audio: 'magmar', rarity: 'Rare', move: 'Fire Punch' },
  { name: 'Pinsir', number: 127, type: ['Bug'], audio: 'pinsir', rarity: 'Rare', move: 'Vice Grip' },
  { name: 'Tauros', number: 128, type: ['Normal'], audio: 'tauros', rarity: 'Rare', move: 'Take Down' },
  { name: 'Magikarp', number: 129, type: ['Water'], audio: 'magikarp', rarity: 'Common', move: 'Splash' },
  { name: 'Gyarados', number: 130, type: ['Water', 'Flying'], audio: 'gyarados', rarity: 'Epic', move: 'Hydro Pump' },
  { name: 'Lapras', number: 131, type: ['Water', 'Ice'], audio: 'lapras', rarity: 'Rare', move: 'Ice Beam' },
  { name: 'Ditto', number: 132, type: ['Normal'], audio: 'ditto', rarity: 'Uncommon', move: 'Transform' },
  { name: 'Eevee', number: 133, type: ['Normal'], audio: 'eevee', rarity: 'Uncommon', move: 'Tackle' },
  { name: 'Vaporeon', number: 134, type: ['Water'], audio: 'vaporeon', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Jolteon', number: 135, type: ['Electric'], audio: 'jolteon', rarity: 'Rare', move: 'Thunderbolt' },
  { name: 'Flareon', number: 136, type: ['Fire'], audio: 'flareon', rarity: 'Rare', move: 'Flamethrower' },
  { name: 'Porygon', number: 137, type: ['Normal'], audio: 'porygon', rarity: 'Uncommon', move: 'Tri Attack' },
  { name: 'Omanyte', number: 138, type: ['Rock', 'Water'], audio: 'omanyte', rarity: 'Uncommon', move: 'Water Gun' },
  { name: 'Omastar', number: 139, type: ['Rock', 'Water'], audio: 'omastar', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Kabuto', number: 140, type: ['Rock', 'Water'], audio: 'kabuto', rarity: 'Uncommon', move: 'Rock Throw' },
  { name: 'Kabutops', number: 141, type: ['Rock', 'Water'], audio: 'kabutops', rarity: 'Rare', move: 'Stone Edge' },
  { name: 'Aerodactyl', number: 142, type: ['Rock', 'Flying'], audio: 'aerodactyl', rarity: 'Epic', move: 'Hyper Beam' },
  { name: 'Snorlax', number: 143, type: ['Normal'], audio: 'snorlax', rarity: 'Epic', move: 'Giga Impact' },
  { name: 'Articuno', number: 144, type: ['Ice', 'Flying'], audio: 'articuno', rarity: 'Legendary', move: 'Blizzard' },
  { name: 'Zapdos', number: 145, type: ['Electric', 'Flying'], audio: 'zapdos', rarity: 'Legendary', move: 'Thunder' },
  { name: 'Moltres', number: 146, type: ['Fire', 'Flying'], audio: 'moltres', rarity: 'Legendary', move: 'Flamethrower' },
  { name: 'Dratini', number: 147, type: ['Dragon'], audio: 'dratini', rarity: 'Uncommon', move: 'Dragon Tail' },
  { name: 'Dragonair', number: 148, type: ['Dragon'], audio: 'dragonair', rarity: 'Rare', move: 'Dragon Pulse' },
  { name: 'Dragonite', number: 149, type: ['Dragon', 'Flying'], audio: 'dragonite', rarity: 'Epic', move: 'Draco Meteor' },
  { name: 'Mewtwo', number: 150, type: ['Psychic'], audio: 'mewtwo', rarity: 'Legendary', move: 'Psystrike' },
  { name: 'Mew', number: 151, type: ['Psychic'], audio: 'mew', rarity: 'Mythical', move: 'Psychic' },

];

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

    if (cardData.type && cardData.type.length > 1) {
    const color1 = typeColors[cardData.type[0]];
    const color2 = typeColors[cardData.type[1]];
    front.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    } else if (cardData.type && cardData.type.length === 1) {
    front.style.background = typeColors[cardData.type[0]];
    }

    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${cardData.number}.svg`;
    img.alt = cardData.name;
    img.className = "card-img";

    const info = document.createElement("div");
    info.className = "card-info";
    info.innerHTML = `
    <strong>#${cardData.number}</strong><br>
    ${cardData.name}<br>
    ${cardData.rarity}
    `;

    front.appendChild(img);
    front.appendChild(info);


    const back = document.createElement("div");
    back.className = "card-back";

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    cardEl.appendChild(cardInner);
    container.appendChild(cardEl);

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
