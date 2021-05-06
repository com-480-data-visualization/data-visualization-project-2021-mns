let moviesData;
let countries;

//creating the map
const mappa = new Mappa('Leaflet');
let trainMap;
let canvas;

let data = [];

//centering the map
const options = {
  lat: 30,
  lng: 25,
  zoom: 1.5,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
};

//load moviesData and countries location data
function preload() {
  moviesData = loadTable('new_movies_count_per_country.csv', 'header');
  countries = loadJSON('countries.json');
}

function setup() {
  canvas = createCanvas(800, 600);
  //tileMap is a moving one not static
  trainMap = mappa.tileMap(options);
  trainMap.overlay(canvas);

  let maxSubs = 0;
  let minSubs = Infinity;

//iterating on each row of our data
  for (let row of moviesData.rows) {
    //taking the column
    let country = row.get('country_id').toLowerCase();
    //taking the list of countires
    let latlon = countries[country];
    //if we have the position of the country in our data set
    if (latlon) {
      let lat = latlon[0];
      let lon = latlon[1];
      let count = Number(row.get('Movies count'));
      data.push({
        lat,
        lon,
        count
      });
      if (count > maxSubs) {
        maxSubs = count;
      }
      if (count < minSubs) {
        minSubs = count;
      }
    }
  }

  let minD = sqrt(minSubs);
  let maxD = sqrt(maxSubs);

  for (let country of data) {
    country.diameter = map(sqrt(country.count), minD, maxD, 1, 20);
  }

}

function draw() {
  clear();
  for (let country of data) {
    const pix = trainMap.latLngToPixel(country.lat, country.lon);
    fill(frameCount % 255, 0, 200, 100);
    const zoom = trainMap.zoom();
    const scl = pow(2, zoom);
    ellipse(pix.x, pix.y, country.diameter * scl);
  }
}
