const express = require('express');
const mongoose = require('mongoose'); // Importer le module mongoose
const cors = require('cors');
const app = express();
app.use(cors());
const cityController = require('./controllers/CityController');
const zoneController = require('./controllers/ZoneController');
const restoController = require('./controllers/RestoController');
const specialiteController = require('./controllers/SpecialiteController');
mongoose.connect('mongodb://localhost:27017/location', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());


app.use('/api/cities', cityController);
app.use('/api/zones', zoneController);
app.use('/api/restos', restoController);
app.use('/api/specialities', specialiteController);
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
