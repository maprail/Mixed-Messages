// Create object to describe planets, sattelites and gravity
const solarSystem = {
    planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    satellites: [0, 0, 1, 2, 79, 82, 27, 14],
    gravity: [0.4, 0.9, 1, 0.4, 2.6, 1.1, 0.9, 1.2],
    randomIndex(num){
        return Math.floor(Math.random() * num);
    },
    populatePlanetaryData(){
        let data = [];
        for(let prop in solarSystem){
            switch(prop){
                case 'planets':
                case 'satellites':
                case 'gravity':
                    data.push(this[prop][this.randomIndex(this[prop].length)]);
                    break;
               default:
                    break;
            }
        }

        return data;
    }  
};

let result = solarSystem.populatePlanetaryData();
console.log(`TRUE or FALSE: ${result[0]} has ${result[1]} moons with a gravity of ${result[2]} g`);



