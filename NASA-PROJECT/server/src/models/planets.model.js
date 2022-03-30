const { parse } = require('csv-parse');
const path = require('path');
const fs = require('fs');
const habitablePlanet = [];

//Filteration of the planet
function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}


function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        //Reading the CSV data in to stream
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanet.push(data);
                }

            })
            .on('error', (error) => {
                console.log(error);
                reject(err);
            })
            .on('end', () => {
                // console.log(habitablePlanet.map((planet) => {
                //     return planet['kepler_name'];
                // }));
                console.log(`${habitablePlanet.length} Habitable planets found.`);
                resolve();
            });
    });
}


module.exports = {
    loadPlanetsData,
    planets: habitablePlanet,
};