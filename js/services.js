const button = document.getElementById("sub");
const hidden = document.getElementById("hidden");
const hiddenService = document.getElementById("hidden-service");
const closes = document.getElementById("close");
const closeService = document.getElementById("close-service");
const arr = document.querySelectorAll("button");
const head = document.getElementById("head");
const middle = document.getElementById("middle");
const under = document.getElementById("under");

const arrDesk = [
    {
        head: "Замена направляющих клапанов и самих клапанов",
        middle: "Производится частичная или полная замена направляющий клапанов и/или самих клапанов при необходимости. <br>Замена осуществляется за счёт заказчика(покупка деталей и последующая их установка).",
        under: "Стоимость услуги: много денег(1). <br>Приблизительное время работ: много минут(1). <br>Всё будет сделано качественно и без проблем.",
    },
    {
        head: "Расточка блока ГБЦ",
        middle: "Ну расточка блока ГБЦ есть расточка блока ГБЦ. Зачем это, что это, я не знаю, но оно есть. <br>Если вдруг сломается напильник, мы с вам взимаем больше монет.",
        under: "Стоимость услуги: много денег(2). <br>Приблизительное время работ: много минут(2). <br>Всё будет сделано качественно и без проблем.",
    },
    {
        head: "Шлифовка коленчатого вала",
        middle: "Не высотники мы, не плотники. Мы шлефовщики коленчатых валов. Шлефуем так, шо он аж крутится от удовольствия. <br>Если вдруг мы перестараемся и слишком перешлифуем, то попросим у вас монет на новый, не переживайте.",
        under: "Стоимость услуги: много денег(3). <br>Приблизительное время работ: много минут(3). <br>Всё будет сделано качественно и без проблем.",
    },
    {
        head: "Замена коренных и шатунных вкладышей",
        middle: "В то время пока у вас заменяются зубы с молочных на коренные, мы меняем коренные и шатунные вкладыши. <br>Что это за вкладыши, я без понятия, даже не спрашивайте.",
        under: "Стоимость услуги: много денег(4). <br>Приблизительное время работ: много минут(4). <br>Всё будет сделано качественно и без проблем.",
    },
    {
        head: "Замена сальников распределительного и коленчатого вала",
        middle: "Да да. Даже в моторе есть сало. Слава Украине! <br>На деле я не знаю что это за сальники и с чем их едят, но мы их тут тоже меняем. <br>За ваши деньги же конечно.",
        under: "Стоимость услуги: много денег(5). <br>Приблизительное время работ: много минут(5). <br>Всё будет сделано качественно и без проблем.",
    },
    {
        head: "Список будет пополняться...",
        middle: "Я не знать что сюда можно добавить, так что не стукайте. Если бы были какие то источники, то тут что то находилось.",
        under: "Тут тоже пустота, так как я не знаю сколько может стоить ничего.",
    }
]

button.onclick = function() {
    hiddenService.style.display = "none";
    hidden.style.display = "block";
}

closes.onclick = function() {
    hiddenService.style.display = "block";
    hidden.style.display = "none";
}

closeService.onclick = function() {
    hiddenService.style.display = "none";
}

for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        hiddenService.style.display = "block";
        if(i > 5) {
            head.innerHTML = arrDesk[5].head;
            middle.innerHTML = arrDesk[5].middle;
            under.innerHTML = arrDesk[5].under;
        } else {
        head.innerHTML = arrDesk[i].head;
        middle.innerHTML = arrDesk[i].middle;
        under.innerHTML = arrDesk[i].under;
        }
    }
}
