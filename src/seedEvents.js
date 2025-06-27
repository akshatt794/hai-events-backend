const mongoose = require('mongoose');
const Event = require('./models/Event');
require('dotenv').config();

const events = [
  {
    title: "Vancouver fashion week",
    dateDay: "15",
    dateMonth: "December",
    dateYear: "2018",
    category: "classical rock Sufi",
    location: "Vancouver Canada",
    image: "img/movies/movie1.jpg",
    description: "Boston Harbor Now in partnership with the Friends of Christopher Columbus Park...",
    extraInfo: [
      "Christopher Columbus Park, North End",
      "Fan Pier, Seaport District",
      "East Boston Harborwalk"
    ]
  },
  // Add more events here, one per object, matching your frontend's event cards!
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Event.deleteMany({});
  await Event.insertMany(events);
  console.log("Seeded events!");
  mongoose.disconnect();
}

seed();
