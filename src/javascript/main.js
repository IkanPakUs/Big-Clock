const $ = (selector) => {
    return document.querySelector(selector);
}

const displayTime = () => {
    let current_time = new Date();

    setInterval(() => {
        let hour = current_time.getHours();
        let minute = current_time.getMinutes();

        $("#hour").innerHTML = hour;
        $("#minute").innerHTML = minute;
    }, 60000);
}

(function () {
    let current_time = new Date();
    let hour = current_time.getHours();
    let minute = current_time.getMinutes();

    $("#hour").innerHTML = hour;
    $("#minute").innerHTML = minute;

    displayTime();
})();