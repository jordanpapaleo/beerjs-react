var DateService = {};

DateService.getDate = function () {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if(dd < 10){
        dd = `0${dd}`;
    }

    if(mm < 10){
        mm = `0${mm}`;
    }

    return `${mm}/${dd}/${yyyy}`;
};

DateService.getTime = function() {
    let date = new Date();
    let isAm = true;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours > 12) {
        hours = hours - 12;
        isAm = false;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}:${seconds} ${(isAm) ? 'am': 'pm'}`;
};

export default DateService;
