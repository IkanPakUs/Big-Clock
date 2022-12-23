const $ = (selector) => {
    return document.querySelector(selector);
}

const displayTime = () => {
    
    setInterval(() => {
        let current_time = new Date();
        
        let hour = current_time.getHours();
        let minute = current_time.getMinutes();

        $("#hour").innerHTML = hour;
        $("#minute").innerHTML = minute;
    }, 1000);
}

const displayDate = () => {
    const current_date = new Date();
    $('#date-year').innerHTML = current_date.toDateString();
}

(function () {
    let current_time = new Date();
    let hour = current_time.getHours();
    let minute = current_time.getMinutes();

    $("#hour").innerHTML = hour;
    $("#minute").innerHTML = minute;

    displayTime();
    displayDate();
})();