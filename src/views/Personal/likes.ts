const likesList = [
  "sri lanka",
  "jamaica",
  "ghana",
  "croatia",
  "italy",
  "greece",
  "my boyfriend",
  "redux",
  "react",
  "garlic",
  "coriander",
  "cyprus",
  "edinburgh",
  "prague",
  "morocco",
  "belgium",
  "driving",
  "indie rock",
  "the killers",
  "coldplay",
  "kid bloom",
  "buffalo hot sauce",
  "the phoenix project",
  "marvel movies",
  "deliveroo",
  "oxford",
  "longchamp",
  "tk maxx",
  "flares",
  "github",
  "reddit",
  "collecting things",
  "mexican food",
  "all asian food",
  "sting rays",
  "aquariums",
  "nachos",
  "gin",
  "bali",
  "intelliJ",
  "family",
  "memes",
  "macbook",
  "golden spaniels",
  "retrievers",
  "old english sheepdogs",
  "south africa",
  "finland",
  "skiing",
  "paris",
  "seaside towns",
  "oysters",
  "white bait",
  "crisps",
  "studio ghibli",
  "spotify",
  "sudoku",
  "google drive",
  "citymapper",
  "waterparks",
  "wine tasting",
  "snorkelling",
  "scrapbooking",
  "nights out in brixton",
  "ducksoup soho",
  "ottolenghi",
  "the school of life",
  "sprite",
  "lime soda",
  "chile",
  "pebre",
  "houmous",
  "taramasalata",
  "peanut butter",
  "silicon valley",
  "the it crowd",
  "rick and morty",
  "white oleander",
  "pukka nighttime tea",
  "capers",
  "tapas",
  "tacos",
  "peonies",
  "marks and spencer",
  "sainsburys",
  "candles",
  "bristol",
  "national trust houses",
  "cookbooks",
  "aerosmith",
  "marion cotillard",
  "the good wife",
  "josh charles",
  "blue cheese",
  "mercato metropolitano",
  "killing eve",
  "dirtbag",
  "deadpool",
  "taron egerton",
  "somerset",
  "lemons",
  "empanadas",
  "champagne coupes",
  "hamilton",
  "vance joy",
  "arctic monkeys",
  "kasabian",
  "rainbow kitten surprise",
  "the flight club",
  "meetups",
  "doritos",
  "laptop stickers",
  "sashimi",
  "archer",
  "dairylea cheese triangles",
  "prawns",
  "scallops",
  "mazzy star",
  "frightened rabbit",
  "coding",
  "palmers lip balm",
  "kindle",
  "terrarium",
  "solitaire",
  "retro 80s synths",
  "countryside walks",
  "holland and barrett",
  "american kingpin",
  "netflix",
  "sriracha",
  "kimchi",
  "satay",
  "baths",
  "yo sushi",
  "book of mormon",
  "secret hitler",
  "ice cold water",
  "steak tartare",
  "beef carpaccio",
  "chives",
  "giving presents",
  "silver jewellery",
  "flying over cities at night",
  "late night snacks",
  "curry",
  "converse",
  "trashy magazines",
  "selena gomez",
  "asmr",
  "almost famous",
  "tennis",
  "badminton",
  "gyozas",
  "no 7",
  "dr organic",
  "dribble emoji",
  "london",
  "james mcavoy",
  "grey",
  "midnight blue",
  "forest green",
  "navy blue",
  "natural makeup",
  "brown mascara",
  "st elmo's fire",
  "efficiency",
  "havaianas",
  "gaimo",
  "maroon 5",
  "hampstead heath"
];

export const sortLikes = (likes: string[]): string[] => {
  return likes
    .sort()
    .map((el, i) => (i % 2 === 0 ? `${el.toUpperCase()} ` : `${el} `));
};

export const likes = sortLikes(likesList);
