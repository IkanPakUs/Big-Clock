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
        console.log(minute);
    }, 1000);
}

(function () {
    let current_time = new Date();
    let hour = current_time.getHours();
    let minute = current_time.getMinutes();

    $("#hour").innerHTML = hour;
    $("#minute").innerHTML = minute;

    displayTime();
})();