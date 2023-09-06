const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// 今年の値を取得
const currentYear = new Date().getFullYear();
// 未来の値を取得
const nextYear = currentYear + 1;
// 未来の1月1日00:00:00のDataオブジェクトを取得
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

// カウントダウンの関数
function countdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60) % 24;
    const mins = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
countdown();

// 時間・分・秒を2桁にする
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
formatTime();

setInterval(countdown, 1000);
