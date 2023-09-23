 function handleSessionStart() {
    let age = prompt("Введите ваш возраст");
    let time = new Date().toLocaleString()
    if (age >= 18) {
        alert("Приветствуем на LifeSpot! " + time);
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
    let userData = new Map();
    userData.set('age', age);
    userData.set('userAgent', window.navigator.userAgent);
    userData.set('sessionStart', time);
    return userData;
}

let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}
function filterContent(inputParceFunc)
{
    //let value = document.getElementsByTagName('input')[0].value.toLowerCase();
    //let value = filterValue.toLowerCase();
    let videoElements = document.getElementsByClassName('video-container');
    for(let i = 0; i<= videoElements.length; i++)
    {
        let description = videoElements[i].  getElementsByTagName('h3')[0].innerText.toLowerCase();
        if(!description.includes(inputParceFunc()))
            videoElements[i].style.display ='none';
        else
            videoElements[i].style.display ='inline-block';
    } 
}