const allCards = [
   { name: 'Victini', number: 494, type: ['Psychic', 'Fire'], isShiny: false, audio: 'victini', rarity: 'Mythical', move: 'V-create' },
  { name: 'Snivy', number: 495, type: ['Grass'], isShiny: false, audio: 'snivy', rarity: 'Uncommon', move: 'Leaf Blade' },
  { name: 'Servine', number: 496, type: ['Grass'], isShiny: false, audio: 'servine', rarity: 'Rare', move: 'Leaf Tornado' },
  { name: 'Serperior', number: 497, type: ['Grass'], isShiny: false, audio: 'serperior', rarity: 'Epic', move: 'Frenzy Plant' },
  { name: 'Tepig', number: 498, type: ['Fire'], isShiny: false, audio: 'tepig', rarity: 'Uncommon', move: 'Ember' },
  { name: 'Pignite', number: 499, type: ['Fire', 'Fighting'], isShiny: false, audio: 'pignite', rarity: 'Rare', move: 'Flame Charge' },
  { name: 'Emboar', number: 500, type: ['Fire', 'Fighting'], isShiny: false, audio: 'emboar', rarity: 'Epic', move: 'Heat Crash' },
  { name: 'Oshawott', number: 501, type: ['Water'], isShiny: false, audio: 'oshawott', rarity: 'Uncommon', move: 'Water Gun' },
  { name: 'Dewott', number: 502, type: ['Water'], isShiny: false, audio: 'dewott', rarity: 'Rare', move: 'Razor Shell' },
  { name: 'Samurott', number: 503, type: ['Water'], isShiny: false, audio: 'samurott', rarity: 'Epic', move: 'Hydro Cannon' },
  { name: 'Patrat', number: 504, type: ['Normal'], isShiny: false, audio: 'patrat', rarity: 'Common', move: 'Tackle' },
  { name: 'Watchog', number: 505, type: ['Normal'], isShiny: false, audio: 'watchog', rarity: 'Uncommon', move: 'Hyper Fang' },
  { name: 'Lillipup', number: 506, type: ['Normal'], isShiny: false, audio: 'lillipup', rarity: 'Common', move: 'Bite' },
  { name: 'Herdier', number: 507, type: ['Normal'], isShiny: false, audio: 'herdier', rarity: 'Uncommon', move: 'Take Down' },
  { name: 'Stoutland', number: 508, type: ['Normal'], isShiny: false, audio: 'stoutland', rarity: 'Rare', move: 'Giga Impact' },
  { name: 'Purrloin', number: 509, type: ['Dark'], isShiny: false, audio: 'purrloin', rarity: 'Common', move: 'Scratch' },
  { name: 'Liepard', number: 510, type: ['Dark'], isShiny: false, audio: 'liepard', rarity: 'Uncommon', move: 'Night Slash' },
  { name: 'Pansage', number: 511, type: ['Grass'], isShiny: false, audio: 'pansage', rarity: 'Common', move: 'Vine Whip' },
  { name: 'Simisage', number: 512, type: ['Grass'], isShiny: false, audio: 'simisage', rarity: 'Uncommon', move: 'Seed Bomb' },
  { name: 'Pansear', number: 513, type: ['Fire'], isShiny: false, audio: 'pansear', rarity: 'Common', move: 'Incinerate' },
  { name: 'Simisear', number: 514, type: ['Fire'], isShiny: false, audio: 'simisear', rarity: 'Uncommon', move: 'Flamethrower' },
  { name: 'Panpour', number: 515, type: ['Water'], isShiny: false, audio: 'panpour', rarity: 'Common', move: 'Water Gun' },
  { name: 'Simipour', number: 516, type: ['Water'], isShiny: false, audio: 'simipour', rarity: 'Uncommon', move: 'Scald' },
  { name: 'Munna', number: 517, type: ['Psychic'], isShiny: false, audio: 'munna', rarity: 'Common', move: 'Psybeam' },
  { name: 'Musharna', number: 518, type: ['Psychic'], isShiny: false, audio: 'musharna', rarity: 'Uncommon', move: 'Psychic' },
  { name: 'Pidove', number: 519, type: ['Normal', 'Flying'], isShiny: false, audio: 'pidove', rarity: 'Common', move: 'Gust' },
  { name: 'Tranquill', number: 520, type: ['Normal', 'Flying'], isShiny: false, audio: 'tranquill', rarity: 'Uncommon', move: 'Air Slash' },
  { name: 'Unfezant', number: 521, type: ['Normal', 'Flying'], isShiny: false, audio: 'unfezant', rarity: 'Rare', move: 'Sky Attack' },
//   { name: 'Unfezant♀', number: 521, type: ['Normal', 'Flying'], isShiny: false, audio: 'unfezant', rarity: 'Rare', move: 'Sky Attack' , variant: 'female'},
  { name: 'Blitzle', number: 522, type: ['Electric'], isShiny: false, audio: 'blitzle', rarity: 'Common', move: 'Spark' },
  { name: 'Zebstrika', number: 523, type: ['Electric'], isShiny: false, audio: 'zebstrika', rarity: 'Uncommon', move: 'Thunderbolt' },
  { name: 'Roggenrola', number: 524, type: ['Rock'], isShiny: false, audio: 'roggenrola', rarity: 'Uncommon', move: 'Rock Throw' },
  { name: 'Boldore', number: 525, type: ['Rock'], isShiny: false, audio: 'boldore', rarity: 'Rare', move: 'Rock Slide' },
  { name: 'Gigalith', number: 526, type: ['Rock'], isShiny: false, audio: 'gigalith', rarity: 'Epic', move: 'Stone Edge' },
  { name: 'Woobat', number: 527, type: ['Psychic', 'Flying'], isShiny: false, audio: 'woobat', rarity: 'Common', move: 'Confusion' },
  { name: 'Swoobat', number: 528, type: ['Psychic', 'Flying'], isShiny: false, audio: 'swoobat', rarity: 'Uncommon', move: 'Air Cutter' },
  { name: 'Drilbur', number: 529, type: ['Ground'], isShiny: false, audio: 'drilbur', rarity: 'Common', move: 'Mud-Slap' },
  { name: 'Excadrill', number: 530, type: ['Ground', 'Steel'], isShiny: false, audio: 'excadrill', rarity: 'Rare', move: 'Drill Run' },
  { name: 'Audino', number: 531, type: ['Normal'], isShiny: false, audio: 'audino', rarity: 'Uncommon', move: 'Pound' },
  { name: 'Timburr', number: 532, type: ['Fighting'], isShiny: false, audio: 'timburr', rarity: 'Uncommon', move: 'Low Kick' },
  { name: 'Gurdurr', number: 533, type: ['Fighting'], isShiny: false, audio: 'gurdurr', rarity: 'Rare', move: 'Dynamic Punch' },
  { name: 'Conkeldurr', number: 534, type: ['Fighting'], isShiny: false, audio: 'conkeldurr', rarity: 'Epic', move: 'Hammer Arm' },
  { name: 'Tympole', number: 535, type: ['Water'], isShiny: false, audio: 'tympole', rarity: 'Common', move: 'Bubble' },
  { name: 'Palpitoad', number: 536, type: ['Water', 'Ground'], isShiny: false, audio: 'palpitoad', rarity: 'Uncommon', move: 'Mud Shot' },
  { name: 'Seismitoad', number: 537, type: ['Water', 'Ground'], isShiny: false, audio: 'seismitoad', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Throh', number: 538, type: ['Fighting'], isShiny: false, audio: 'throh', rarity: 'Uncommon', move: 'Vital Throw' },
  { name: 'Sawk', number: 539, type: ['Fighting'], isShiny: false, audio: 'sawk', rarity: 'Uncommon', move: 'Karate Chop' },
  { name: 'Sewaddle', number: 540, type: ['Bug', 'Grass'], isShiny: false, audio: 'sewaddle', rarity: 'Common', move: 'Bug Bite' },
  { name: 'Swadloon', number: 541, type: ['Bug', 'Grass'], isShiny: false, audio: 'swadloon', rarity: 'Uncommon', move: 'Razor Leaf' },
  { name: 'Leavanny', number: 542, type: ['Bug', 'Grass'], isShiny: false, audio: 'leavanny', rarity: 'Rare', move: 'X-Scissor' },
  { name: 'Venipede', number: 543, type: ['Bug', 'Poison'], isShiny: false, audio: 'venipede', rarity: 'Common', move: 'Poison Sting' },
  { name: 'Whirlipede', number: 544, type: ['Bug', 'Poison'], isShiny: false, audio: 'whirliplede', rarity: 'Uncommon', move: 'Rollout' },
  { name: 'Scolipede', number: 545, type: ['Bug', 'Poison'], isShiny: false, audio: 'scolipede', rarity: 'Rare', move: 'Poison Tail' },
  { name: 'Cottonee', number: 546, type: ['Grass', 'Fairy'], isShiny: false, audio: 'cottonee', rarity: 'Common', move: 'Absorb' },
  { name: 'Whimsicott', number: 547, type: ['Grass', 'Fairy'], isShiny: false, audio: 'whimsicott', rarity: 'Uncommon', move: 'Hurricane' },
  { name: 'Petilil', number: 548, type: ['Grass'], isShiny: false, audio: 'petilil', rarity: 'Common', move: 'Mega Drain' },
  { name: 'Lilligant', number: 549, type: ['Grass'], isShiny: false, audio: 'lilligant', rarity: 'Uncommon', move: 'Petal Dance' },
  { name: 'Basculin (Red-Stripe)', number: 550, type: ['Water'], isShiny: false, audio: 'basculin', rarity: 'Uncommon', move: 'Aqua Jet' },
  { name: "Basculin (Blue-Stripe)", number: '10016', variant: "Blue", type: ["Water"], isShiny: false, audio: 'basculin', rarity: "Uncommon", move: "Aqua Jet" },
  { name: 'Sandile', number: 551, type: ['Ground', 'Dark'], isShiny: false, audio: 'sandile', rarity: 'Uncommon', move: 'Bite' },
  { name: 'Krokorok', number: 552, type: ['Ground', 'Dark'], isShiny: false, audio: 'krokorok', rarity: 'Rare', move: 'Crunch' },
  { name: 'Krookodile', number: 553, type: ['Ground', 'Dark'], isShiny: false, audio: 'krookodile', rarity: 'Epic', move: 'Earthquake' },
  { name: 'Darumaka', number: 554, type: ['Fire'], isShiny: false, audio: 'darumaka', rarity: 'Common', move: 'Fire Punch' },
  { name: 'Darmanitan', number: 555, type: ['Fire'], isShiny: false, audio: 'darmanitan', rarity: 'Rare', move: 'Flare Blitz' },
  { name: "Darmanitan Zen", number: 10017, variant: "Zen", type: ["Fire", "Psychic"], isShiny: false, audio: 'darmanitan', rarity: "Rare", move: "Psychic" },
  { name: 'Maractus', number: 556, type: ['Grass'], isShiny: false, audio: 'maractus', rarity: 'Uncommon', move: 'Needle Arm' },
  { name: 'Dwebble', number: 557, type: ['Bug', 'Rock'], isShiny: false, audio: 'dwebble', rarity: 'Common', move: 'Rock Blast' },
  { name: 'Crustle', number: 558, type: ['Bug', 'Rock'], isShiny: false, audio: 'crustle', rarity: 'Uncommon', move: 'X-Scissor' },
  { name: 'Scraggy', number: 559, type: ['Dark', 'Fighting'], isShiny: false, audio: 'scraggy', rarity: 'Common', move: 'Low Kick' },
  { name: 'Scrafty', number: 560, type: ['Dark', 'Fighting'], isShiny: false, audio: 'scrafty', rarity: 'Uncommon', move: 'High Jump Kick' },
  { name: 'Sigilyph', number: 561, type: ['Psychic', 'Flying'], isShiny: false, audio: 'sigilyph', rarity: 'Uncommon', move: 'Psybeam' },
  { name: 'Yamask', number: 562, type: ['Ghost'], isShiny: false, audio: 'yamask', rarity: 'Common', move: 'Night Shade' },
  { name: 'Cofagrigus', number: 563, type: ['Ghost'], isShiny: false, audio: 'cofagrigus', rarity: 'Uncommon', move: 'Shadow Ball' },
  { name: 'Tirtouga', number: 564, type: ['Water', 'Rock'], isShiny: false, audio: 'tirtouga', rarity: 'Uncommon', move: 'Aqua Jet' },
  { name: 'Carracosta', number: 565, type: ['Water', 'Rock'], isShiny: false, audio: 'carracosta', rarity: 'Rare', move: 'Hydro Pump' },
  { name: 'Archen', number: 566, type: ['Rock', 'Flying'], isShiny: false, audio: 'archen', rarity: 'Uncommon', move: 'Wing Attack' },
  { name: 'Archeops', number: 567, type: ['Rock', 'Flying'], isShiny: false, audio: 'archeops', rarity: 'Rare', move: 'Stone Edge' },
  { name: 'Trubbish', number: 568, type: ['Poison'], isShiny: false, audio: 'trubbish', rarity: 'Common', move: 'Sludge' },
  { name: 'Garbodor', number: 569, type: ['Poison'], isShiny: false, audio: 'garbodor', rarity: 'Uncommon', move: 'Sludge Bomb' },
  { name: 'Zorua', number: 570, type: ['Dark'], isShiny: false, audio: 'zorua', rarity: 'Uncommon', move: 'Feint Attack' },
  { name: 'Zoroark', number: 571, type: ['Dark'], isShiny: false, audio: 'zoroark', rarity: 'Rare', move: 'Night Daze' },
  { name: 'Minccino', number: 572, type: ['Normal'], isShiny: false, audio: 'minccino', rarity: 'Common', move: 'Pound' },
  { name: 'Cinccino', number: 573, type: ['Normal'], isShiny: false, audio: 'cinccino', rarity: 'Uncommon', move: 'Tail Slap' },
  { name: 'Gothita', number: 574, type: ['Psychic'], isShiny: false, audio: 'gothita', rarity: 'Common', move: 'Confusion' },
  { name: 'Gothorita', number: 575, type: ['Psychic'], isShiny: false, audio: 'gothorita', rarity: 'Uncommon', move: 'Psybeam' },
  { name: 'Gothitelle', number: 576, type: ['Psychic'], isShiny: false, audio: 'gothitelle', rarity: 'Rare', move: 'Psychic' },
  { name: 'Solosis', number: 577, type: ['Psychic'], isShiny: false, audio: 'solosis', rarity: 'Common', move: 'Psywave' },
  { name: 'Duosion', number: 578, type: ['Psychic'], isShiny: false, audio: 'duosion', rarity: 'Uncommon', move: 'Psybeam' },
  { name: 'Reuniclus', number: 579, type: ['Psychic'], isShiny: false, audio: 'reuniclus', rarity: 'Rare', move: 'Psychic' },
  { name: 'Ducklett', number: 580, type: ['Water', 'Flying'], isShiny: false, audio: 'ducklett', rarity: 'Common', move: 'Water Pulse' },
  { name: 'Swanna', number: 581, type: ['Water', 'Flying'], isShiny: false, audio: 'swanna', rarity: 'Uncommon', move: 'Hurricane' },
  { name: 'Vanillite', number: 582, type: ['Ice'], isShiny: false, audio: 'vanillite', rarity: 'Common', move: 'Icy Wind' },
  { name: 'Vanillish', number: 583, type: ['Ice'], isShiny: false, audio: 'vanillish', rarity: 'Uncommon', move: 'Ice Beam' },
  { name: 'Vanilluxe', number: 584, type: ['Ice'], isShiny: false, audio: 'vanilluxe', rarity: 'Rare', move: 'Blizzard' },
  { name: 'Deerling', number: 585, type: ['Normal', 'Grass'], isShiny: false, audio: 'deerling', rarity: 'Common', move: 'Tackle', variant: 'spring' },
//   { name: 'Deerling (Summer)', number: '585-summer', type: ['Normal', 'Grass'], isShiny: false, audio: 'deerling', rarity: 'Common', move: 'Tackle', variant: 'summer' },
//   { name: 'Deerling (Autumn)', number: '585-autumn', type: ['Normal', 'Grass'], isShiny: false, audio: 'deerling', rarity: 'Common', move: 'Tackle', variant: 'autumn' },
//   { name: 'Deerling (Winter)', number: '585-winter', type: ['Normal', 'Grass'], isShiny: false, audio: 'deerling', rarity: 'Common', move: 'Tackle', variant: 'winter' },
  { name: 'Sawsbuck', number: 586, type: ['Normal', 'Grass'], isShiny: false, audio: 'sawsbuck', rarity: 'Uncommon', move: 'Horn Leech', variant: 'spring' },
//   { name: 'Sawsbuck (Summer)', number: '586-summer', type: ['Normal', 'Grass'], isShiny: false, audio: 'sawsbuck', rarity: 'Uncommon', move: 'Horn Leech', variant: 'summer' },
//   { name: 'Sawsbuck (Autumn)', number: '586-autumn', type: ['Normal', 'Grass'], isShiny: false, audio: 'sawsbuck', rarity: 'Uncommon', move: 'Horn Leech', variant: 'autumn' },
//   { name: 'Sawsbuck (Winter)', number: '586-winter', type: ['Normal', 'Grass'], isShiny: false, audio: 'sawsbuck', rarity: 'Uncommon', move: 'Horn Leech', variant: 'winter' },
  { name: 'Emolga', number: 587, type: ['Electric', 'Flying'], isShiny: false, audio: 'emolga', rarity: 'Uncommon', move: 'Thunder Shock' },
  { name: 'Karrablast', number: 588, type: ['Bug'], isShiny: false, audio: 'karrablast', rarity: 'Uncommon', move: 'Bug Bite' },
  { name: 'Escavalier', number: 589, type: ['Bug', 'Steel'], isShiny: false, audio: 'escavalier', rarity: 'Rare', move: 'X-Scissor' },
  { name: 'Foongus', number: 590, type: ['Grass', 'Poison'], isShiny: false, audio: 'foongus', rarity: 'Common', move: 'Absorb' },
  { name: 'Amoonguss', number: 591, type: ['Grass', 'Poison'], isShiny: false, audio: 'amoonguss', rarity: 'Uncommon', move: 'Giga Drain' },
  { name: 'Frillish', number: 592, type: ['Water', 'Ghost'], isShiny: false, audio: 'frillish', rarity: 'Common', move: 'Bubble Beam' },
//   { name: 'Frillish♀', number: '592-female', type: ['Water', 'Ghost'], isShiny: false, audio: 'frillish', rarity: 'Common', move: 'Bubble Beam' , variant: 'female'},
  { name: 'Jellicent', number: 593, type: ['Water', 'Ghost'], isShiny: false, audio: 'jellicent', rarity: 'Uncommon', move: 'Shadow Ball' },
//   { name: 'Jellicent♀', number: '593-female', type: ['Water', 'Ghost'], isShiny: false, audio: 'jellicent', rarity: 'Uncommon', move: 'Shadow Ball', variant: 'female'},
  { name: 'Alomomola', number: 594, type: ['Water'], isShiny: false, audio: 'alomomola', rarity: 'Uncommon', move: 'Aqua Jet' },
  { name: 'Joltik', number: 595, type: ['Bug', 'Electric'], isShiny: false, audio: 'joltik', rarity: 'Common', move: 'Electroweb' },
  { name: 'Galvantula', number: 596, type: ['Bug', 'Electric'], isShiny: false, audio: 'galvantula', rarity: 'Uncommon', move: 'Thunderbolt' },
  { name: 'Ferroseed', number: 597, type: ['Grass', 'Steel'], isShiny: false, audio: 'ferroseed', rarity: 'Common', move: 'Bullet Seed' },
  { name: 'Ferrothorn', number: 598, type: ['Grass', 'Steel'], isShiny: false, audio: 'ferrothorn', rarity: 'Rare', move: 'Power Whip' },
  { name: 'Klink', number: 599, type: ['Steel'], isShiny: false, audio: 'klink', rarity: 'Common', move: 'Gear Grind' },
  { name: 'Klang', number: 600, type: ['Steel'], isShiny: false, audio: 'klang', rarity: 'Uncommon', move: 'Gear Grind' },
  { name: 'Klinklang', number: 601, type: ['Steel'], isShiny: false, audio: 'klinklang', rarity: 'Rare', move: 'Shift Gear' },
  { name: 'Tynamo', number: 602, type: ['Electric'], isShiny: false, audio: 'tynamo', rarity: 'Common', move: 'Spark' },
  { name: 'Eelektrik', number: 603, type: ['Electric'], isShiny: false, audio: 'eelektrik', rarity: 'Uncommon', move: 'Thunderbolt' },
  { name: 'Eelektross', number: 604, type: ['Electric'], isShiny: false, audio: 'eelektross', rarity: 'Rare', move: 'Thunder' },
  { name: 'Elgyem', number: 605, type: ['Psychic'], isShiny: false, audio: 'elgyem', rarity: 'Common', move: 'Confusion' },
  { name: 'Beheeyem', number: 606, type: ['Psychic'], isShiny: false, audio: 'beheeyem', rarity: 'Uncommon', move: 'Psychic' },
  { name: 'Litwick', number: 607, type: ['Ghost', 'Fire'], isShiny: false, audio: 'litwick', rarity: 'Common', move: 'Ember' },
  { name: 'Lampent', number: 608, type: ['Ghost', 'Fire'], isShiny: false, audio: 'lampent', rarity: 'Uncommon', move: 'Will-O-Wisp' },
  { name: 'Chandelure', number: 609, type: ['Ghost', 'Fire'], isShiny: false, audio: 'chandelure', rarity: 'Rare', move: 'Shadow Ball' },
  { name: 'Axew', number: 610, type: ['Dragon'], isShiny: false, audio: 'axew', rarity: 'Uncommon', move: 'Dragon Claw' },
  { name: 'Fraxure', number: 611, type: ['Dragon'], isShiny: false, audio: 'fraxure', rarity: 'Rare', move: 'Dragon Pulse' },
  { name: 'Haxorus', number: 612, type: ['Dragon'], isShiny: false, audio: 'haxorus', rarity: 'Epic', move: 'Outrage' },
  { name: 'Cubchoo', number: 613, type: ['Ice'], isShiny: false, audio: 'cubchoo', rarity: 'Common', move: 'Powder Snow' },
  { name: 'Beartic', number: 614, type: ['Ice'], isShiny: false, audio: 'beartic', rarity: 'Uncommon', move: 'Icicle Crash' },
  { name: 'Cryogonal', number: 615, type: ['Ice'], isShiny: false, audio: 'cryogonal', rarity: 'Uncommon', move: 'Ice Beam' },
  { name: 'Shelmet', number: 616, type: ['Bug'], isShiny: false, audio: 'shelmet', rarity: 'Uncommon', move: 'Bug Bite' },
  { name: 'Accelgor', number: 617, type: ['Bug'], isShiny: false, audio: 'accelgor', rarity: 'Rare', move: 'Bug Buzz' },
  { name: 'Stunfisk', number: 618, type: ['Ground', 'Electric'], isShiny: false, audio: 'stunfisk', rarity: 'Uncommon', move: 'Mud Bomb' },
  { name: 'Mienfoo', number: 619, type: ['Fighting'], isShiny: false, audio: 'mienfoo', rarity: 'Common', move: 'Low Kick' },
  { name: 'Mienshao', number: 620, type: ['Fighting'], isShiny: false, audio: 'mienshao', rarity: 'Uncommon', move: 'High Jump Kick' },
  { name: 'Druddigon', number: 621, type: ['Dragon'], isShiny: false, audio: 'druddigon', rarity: 'Rare', move: 'Dragon Claw' },
  { name: 'Golett', number: 622, type: ['Ground', 'Ghost'], isShiny: false, audio: 'golett', rarity: 'Uncommon', move: 'Shadow Punch' },
  { name: 'Golurk', number: 623, type: ['Ground', 'Ghost'], isShiny: false, audio: 'golurk', rarity: 'Rare', move: 'Earthquake' },
  { name: 'Pawniard', number: 624, type: ['Dark', 'Steel'], isShiny: false, audio: 'pawniard', rarity: 'Uncommon', move: 'Metal Claw' },
  { name: 'Bisharp', number: 625, type: ['Dark', 'Steel'], isShiny: false, audio: 'bisharp', rarity: 'Rare', move: 'Night Slash' },
  { name: 'Bouffalant', number: 626, type: ['Normal'], isShiny: false, audio: 'bouffalant', rarity: 'Rare', move: 'Head Charge' },
  { name: 'Rufflet', number: 627, type: ['Normal', 'Flying'], isShiny: false, audio: 'rufflet', rarity: 'Uncommon', move: 'Peck' },
  { name: 'Braviary', number: 628, type: ['Normal', 'Flying'], isShiny: false, audio: 'braviary', rarity: 'Rare', move: 'Sky Drop' },
  { name: 'Vullaby', number: 629, type: ['Dark', 'Flying'], isShiny: false, audio: 'vullaby', rarity: 'Uncommon', move: 'Gust' },
  { name: 'Mandibuzz', number: 630, type: ['Dark', 'Flying'], isShiny: false, audio: 'mandibuzz', rarity: 'Rare', move: 'Dark Pulse' },
  { name: 'Heatmor', number: 631, type: ['Fire'], isShiny: false, audio: 'heatmor', rarity: 'Uncommon', move: 'Fire Lash' },
  { name: 'Durant', number: 632, type: ['Bug', 'Steel'], isShiny: false, audio: 'durant', rarity: 'Uncommon', move: 'X-Scissor' },
  { name: 'Deino', number: 633, type: ['Dark', 'Dragon'], isShiny: false, audio: 'deino', rarity: 'Uncommon', move: 'Dragon Breath' },
  { name: 'Zweilous', number: 634, type: ['Dark', 'Dragon'], isShiny: false, audio: 'zweilous', rarity: 'Rare', move: 'Dragon Pulse' },
  { name: 'Hydreigon', number: 635, type: ['Dark', 'Dragon'], isShiny: false, audio: 'hydreigon', rarity: 'Epic', move: 'Draco Meteor' },
  { name: 'Larvesta', number: 636, type: ['Bug', 'Fire'], isShiny: false, audio: 'larvesta', rarity: 'Uncommon', move: 'Ember' },
  { name: 'Volcarona', number: 637, type: ['Bug', 'Fire'], isShiny: false, audio: 'volcarona', rarity: 'Epic', move: 'Fiery Dance' },
  { name: 'Cobalion', number: 638, type: ['Steel', 'Fighting'], isShiny: false, audio: 'cobalion', rarity: 'Legendary', move: 'Sacred Sword' },
  { name: 'Terrakion', number: 639, type: ['Rock', 'Fighting'], isShiny: false, audio: 'terrakion', rarity: 'Legendary', move: 'Sacred Sword' },
  { name: 'Virizion', number: 640, type: ['Grass', 'Fighting'], isShiny: false, audio: 'virizion', rarity: 'Legendary', move: 'Sacred Sword' },
  { name: 'Tornadus', number: 641, type: ['Flying'], isShiny: false, audio: 'tornadus', rarity: 'Legendary', move: 'Bleakwind Storm' },
  { name: "Tornadus (Therian)", number: 10019, variant: "Therian", type: ["Flying"], isShiny: false, audio: 'tornadus-therian', rarity: "Legendary", move: "Bleakwind Storm" },
  { name: 'Thundurus', number: 642, type: ['Electric', 'Flying'], isShiny: false, audio: 'thundurus', rarity: 'Legendary', move: 'Wildbolt Storm' },
  { name: "Thundurus (Therian)", number: 10020, variant: "Therian", type: ["Electric", "Flying"], isShiny: false, audio: 'thundurus-therian', rarity: "Legendary", move: "Wildbolt Storm" },
  { name: 'Reshiram', number: 643, type: ['Dragon', 'Fire'], isShiny: false, audio: 'reshiram', rarity: 'Legendary', move: 'Blue Flare' },
  { name: 'Zekrom', number: 644, type: ['Dragon', 'Electric'], isShiny: false, audio: 'zekrom', rarity: 'Legendary', move: 'Bolt Strike' },
  { name: 'Landorus', number: 645, type: ['Ground', 'Flying'], isShiny: false, audio: 'landorus', rarity: 'Legendary', move: 'Sandsear Storm' },
  { name: "Landorus (Therian)", number: 10021, variant: "Therian", type: ["Ground", "Flying"], isShiny: false, audio: 'landorus-therian', rarity: "Legendary", move: "Sandsear Storm" },
  { name: 'Kyurem', number: 646, type: ['Dragon', 'Ice'], isShiny: false, audio: 'kyurem', rarity: 'Legendary', move: 'Glaciate' },
  { name: "Kyurem (Black)", number: 10022, variant: "Black", type: ["Dragon", "Ice"], isShiny: false, audio: 'kyurem-black', rarity: "Legendary", move: "Freeze Shock" },
  { name: "Kyurem (White)", number: 10023, variant: "White", type: ["Dragon", "Ice"], isShiny: false, audio: 'kyurem-white', rarity: "Legendary", move: "Ice Burn" },
  { name: 'Keldeo', number: 647, type: ['Water', 'Fighting'], isShiny: false, audio: 'keldeo', rarity: 'Mythical', move: 'Sacred Sword' },
  { name: "Keldeo (Resolute)", number: 10024, variant: "Resolute", type: ["Water", "Fighting"], isShiny: false, audio: 'keldeo', rarity: "Mythical", move: "Secret Sword" },
  { name: 'Meloetta', number: 648, type: ['Normal', 'Psychic'], isShiny: false, audio: 'meloetta', rarity: 'Mythical', move: 'Relic Song' },
  { name: "Meloetta (Pirouette)", number: '10018', variant: "Pirouette", type: ["Normal", "Fighting"], isShiny: false, audio: 'meloetta', rarity: "Mythical", move: "Relic Song" },
  { name: 'Genesect', number: 649, type: ['Bug', 'Steel'], isShiny: false, audio: 'genesect', rarity: 'Mythical', move: 'Techno Blast' },

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
    } else if (cardData.type && cardData.type.length > 1) {
    const color1 = typeColors[cardData.type[0]];
    const color2 = typeColors[cardData.type[1]];
    front.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    } else if (cardData.type && cardData.type.length === 1) {
    front.style.background = typeColors[cardData.type[0]];
    }

    const cardBox = document.createElement("div");
    cardBox.className = "card-box";

        const isShiny = Math.random() < 0.01; 

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
    ${cardData.name}<br>
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
