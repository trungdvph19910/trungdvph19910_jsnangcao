const game = {
    team1: 'bayern munich',
    team2: 'borrussia dortmund',
    players: [
        [
            'neuer',
            'oavard',
            'martinez',
            'alaba',
            'davies',
            'kimmich',
            'goretzka',
            'coman',
            'muller',
            'gnarby'
        ],
        ['burki',
            'schulz',
            'hummels',
            'ajabji',
            'hakimi',
            'weigl',
            'witsel',
            'hazard']
    ],
    score: '4:0',
    scored: ['gnaby', 'hakimi', 'muler', 'coman'],
    date: 'nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
for(const [i,player] of game.scored.entries()){
    console.log(`goal ${i+1}: ${player}`);}



//2
const odds= Object.values(game.odds);
let average = 0;
for(const odd of Object.values(game.odds))
    average += odd;
    average/=odds.length;
    console.log(average);
//3
for(const [team,odd] of  Object.entries(game.odds)){
    const teamStr = team==='x' ? 'draw': `victory ${game[team]}`;
    console.log (`odd of ${teamStr}  ${odd}`)
}

