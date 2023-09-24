let session = new Map();
function handleSession(){
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}
function checkAge(){
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if(session.get("age") >= 18){
        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString() );
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

let sessionLog = function logSession() {
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