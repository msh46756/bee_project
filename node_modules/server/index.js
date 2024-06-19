const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const https = require('https');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../client/build')));
const agent = new https.Agent({  
  rejectUnauthorized: false
});
app.get('/searchName', async (req, res) => {
  const { genericName } = req.query;
  console.log(genericName);
  const url = `https://api.biodiversitydata.nl/v2/specimen/groupByScientificName/?gatheringEvent.country=Netherlands&collectionType=Botany&identifications.scientificName.genusOrMonomial=${genericName}`;

  try {
    const response = await axios.get(url, { httpsAgent: agent });
    const data = response.data;
    console.log(response.data.resultSet)

    const scientificNames = data.resultSet.map(item => item.item.name);

    const token = '0GRN8GPD1SJoJy9sEE58njMpcpL8Z3ld6jSOId-he7w';
    const treflePromises = scientificNames.map(name => {
    const trefleUrl = `https://trefle.io/api/v1/species/search?token=${token}&q=${name}`;
      return  axios.get(trefleUrl, { httpsAgent: agent });;
    });

    const trefleResponses = await Promise.all(treflePromises);
    const trefleData = trefleResponses.map(response => response.data.data).flat();

    res.render('searchName1', { plants: trefleData });
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});