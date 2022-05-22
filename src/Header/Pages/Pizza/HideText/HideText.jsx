import React, { useState } from "react";
import "./HideText.css";

function HideText() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(true);

  const toggle = () => {
    setOpen(!open);
    setText(!text);
  };

  return (
    <div className="hide-contaner">
      <div className="hideText">
        <div className="img-left">
          <img
            src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/bg-city-vectro-1.png"
            alt=""
          />
        </div>
        <div className="img-right">
          <img
            src="https://la.ua/wp-content/themes/lapiec/assets/frontend/img/bg-city-vectro-2.png"
            alt=""
          />
        </div>
        <p className="header-title1">Піца на дровах LA П’ЄЦ</p>
        <div className={open ? "contentText open" : "contentText"}>
          <p className="boldText">
            Ми відновлюємо роботу і працюємо для клієнтів!
          </p>
          <p className="boldText">Графік роботи: з 10:00 до 20:00</p>
          <p className="boldText">
            А також не припиняємо допомогати у цей складний час: годуємо піцою
            волонтерів, військових та переселенців. Також приймаємо гуманітарну
            допомогу для тих, хто потребує.
          </p>
          <p>
            *Фотографії продуктів несуть ознайомчий характер і можуть
            відрізнятися від оригіналу
          </p>
          <p>
            **Замовлення вважається прийнятим з моменту опрацювання його
            оператором колл-центру дзвінком до клієнта.
          </p>
          <p>
            У нас зручний і простий сервіс доставки піци. Виберіть улюблену піцу
            та зробіть замовлення, підтвердіть його у нашого менеджера та
            очікуйте на доставку найсмачнішої піци на дровах.
          </p>
          <p>
            Піца “La П’єц” готується спеціально під кожне замовлення, тож Ви
            можете бути спокійними за якість приготовленої страви.
          </p>
          <p>
            Ми – це найшвидша доставка піци. Ми дбаємо про те, щоб Ви могли
            швидко та вчасно отримати своє замовлення піци на дровах. Зовнішній
            вигляд страв може відрізнятися від представленого на фотографіях.
          </p>
          <p>
            Відомості, зазначені в нашому меню, носять інформаційний характер.
          </p>
          <p>
            Піцу абсолютно сміливо можна назвати однією з улюблених страв людей
            по всьому світу. Адже хто ж зможе відмовитись від цієї хрумкої
            скоринки, плавленого сиру та надзвичайного аромату? Це страва, яку
            люблять всі: і дорослі, і малі. Тож, якщо Ви хочете насолодитись
            найсмачнішою піцою на дровах, замовляйте доставку піци у Львові “LA
            П’ЄЦ”.
          </p>
          <p>
            Наша піца на дровах – це частинка Італії у Вас вдома, це особливий і
            неповторний смак традиційної піци, який не залишить вас байдужими.
            Ароматна піца на тоненькій скоринці приготована за кращими
            класичними рецептами професійними піцайоло – ось що вирізняє нас
            серед інших сервісів доставки піци. Ми взяли найкраще з глибини
            століть і створили ідеальну піцу, доступну для Всіх!
          </p>
          <p className="header-title2">Безкоштовна доставка піци</p>
          <p>
            Для того, щоб піца приготована нашими піцайоло, була гарячою і
            смачною, так, ніби її щойно витягнули з печі, ми поділили Львів на
            дві зони доставки і для кожної чітко визначили час, протягом якого
            кур’єр нашої компанії повинен доставити Вам Ваше замовлення. Так,
            наприклад, якщо Ви проживаєте в центрі, то отримаєте своє замовлення
            вже за 29 хвилин. Гаряча смачна піца всього за 29 хв, шикарно,
            правда ж?
          </p>
          <p>
            Ми любимо своїх клієнтів і цінуємо Ваш час, тож якщо з якихось
            непередбачених причин Ви не отримаєте свою піцу вчасно, Ви отримаєте
            приємний бонус від нас.
          </p>
          <p>
            Ми сучасна компанія, що завжди дбає про комфорт клієнтів. Ви можете
            розрахуватись за доставку піци у зручний для Вас спосіб – як
            готівкою, так і карткою безпосередньо при отриманні.
          </p>
          <p className="header-title2">Замовити піцу у Львові недорого</p>
          <p>
            У нас великий вибір піц, тож кожен зможе знайти щось на свій смак.
            Ви любитель традиційної італійської піци? Тоді Капрічоза, Карбонара
            чи Кватро формаджі – це саме те, що Вам потрібно. Любите трохи
            гостроти в піці? Тоді оберіть Діабола – вдале поєднання перцю чилі
            та фірмового соусу не залишить Вас байдужими. Звісно, не всім
            підходять стандартні набори, але і тут у нас є рішення для Вас –
            зберіть свою піцу на дровах самі, у нас великий вибір інгредієнтів,
            який задовольнить найсміливіші забаганки будь-якого гурмана.
          </p>
          <p>
            Ми використовуємо найсвіжіші інгредієнти, співпрацюємо з різними
            українськими виробниками, поєднуємо професійність та кращі рецепти,
            щоб в кінцевому результаті Ви змогли отримати найсмачнішу піцу на
            дровах. Не вагайтесь, замовляйте доставку піци на дровах “LA П’ЄЦ”!
          </p>
        </div>

        <div className="readMore" onClick={toggle}>
          {text ? "Читати більше" : "Приховати"}
        </div>
      </div>
    </div>
  );
}

export default HideText;