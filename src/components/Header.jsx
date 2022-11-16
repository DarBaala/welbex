import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          src="img/welbex-logo.svg"
          alt="Logo: Welbex"
          className="header__logo"
        />
        <p className="header__description">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
        <div className="header__navbar">
          <a href="/" className="header__items">
            Услуги
          </a>
          <a href="/" className="header__items">
            Виджеты
          </a>
          <a href="/" className="header__items">
            Интеграции
          </a>
          <img
            src="img/red-ball.png"
            alt="red ball"
            className="header__red-ball"
          />
          <a href="/" className="header__items">
            Кейсы
          </a>
          <img
            src="img/purple-light.png"
            alt="purple light"
            className="header__purple-light"
          />
          <img
            src="img/purple-ball.png"
            alt="purple ball"
            className="header__purple-ball"
          />
          <a href="/" className="header__items">
            Сертификаты
          </a>
        </div>
        <div className="header__contacts">
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <a href="/">
            <img src="img/telegram-icon.svg" alt="Icon: Telegram" />
          </a>
          <a href="tel:+75555555555">
            <img src="img/phone-icon.svg" alt="Icon: Phone" />
          </a>
          <a href="/">
            <img src="img/whatsapp-icon.svg" alt="Icon: WhatsApp" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
