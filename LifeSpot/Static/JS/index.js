let age = prompt("Введите ваш возраст");
let time = new Date().toLocaleString()
if(age >= 18){
    alert("Приветствуем на LifeSpot! " + time);
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com";
}
let userData= new Map();
userData.set('age',age);
userData.set('userAgent',window.navigator.userAgent);
userData.set('sessionStart',  time);
for (let result of session){
    console.log(result)
}
