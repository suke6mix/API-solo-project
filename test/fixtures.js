const waters = [
    {
      id: 1,
      name: 'Perrier',
      manufacturer: 'Nestlé',
      hardness: 417,
      carbonated: true,
      rating: 'mild & standard'
    },
    {
      id: 2,
      name: 'San Pellegrino',
      manufacturer: 'Nestlé',
      hardness: 714,
      carbonated: true,
      rating: 'finely carbonated'
    },
    {
      id: 3,
      name: 'Wilkinson',
      manufacturer: 'Asahi',
      hardness: 10,
      carbonated: true,
      rating: 'strongly carbonated'
    },
    {
      id: 4,
      name: 'Evian',
      manufacturer: 'Danone',
      hardness: 304,
      carbonated: false,
      rating: 'good for coffee brewing'
    },
    {
      id: 5,
      name: 'い・ろ・は・す',
      manufacturer: 'Coca-Cola Japan',
      hardness: 32,
      carbonated: false,
      rating: 'just plane'
    }
];

const exampleWater = {
    "name": "XXのおいしい水",
    "manufacturer": "XX",
    "hardness": 50,
    "carbonated": false,
    "rating": "great"
};


module.exports = { waters, exampleWater }