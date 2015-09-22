var MoodService = {};

MoodService.getMood = function () {
    let moods = [
        'happy that Fifty Fifty gives us beer',
        'sad you have not been coming to beerjs longer',
        'bored with you current knowledge of JS; good thing you are here',
        'excited to be at beerjs'
    ];
    return moods[Math.floor(Math.random() * moods.length)];
};

export default MoodService;
