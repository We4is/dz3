import './Footer.scss'
import logo from '../../assets/logo.png'


function Footer() {

  return (
    <>
      <footer>
        <div className="footer_container">
          <img src={logo} alt="" />
          <div className="footer_texts">
            <div className="footer_text">
              <h2>О компании</h2>
              <a href="#">Профиль компании</a>
              <a href="#">История</a>
              <a href="#">Совет директоров</a>
              <a href="#">Контакты</a>
            </div>
            <div className="footer_text">
              <h2>флот</h2>
              <a href="#">Виды деятельности</a>
              <a href="#">Устойчивое развитие</a>
              <a href="#">Безопасность и качество</a>
              <a href="#">Защита окружающей среды</a>
              <a href="#">Социальная ответственность</a>
            </div>
            <div className="footer_text">
              <h2>Инвесторам</h2>
              <a href="#">Акции</a>
              <a href="#">Отчеты и результаты</a>
              <a href="#">Раскрытие информации</a>
              <a href="#">Корпоративное управление</a>
              <a href="#">Аналитики</a>
              <a href="#">Контакты для инвесторов</a>

            </div>
            <div className="footer_text-info">
              <a href="#">191186, Санкт-Петербург, Невский переулок, д. 3, офис 10-25</a>
              <a href="#">125047, Москва, Покровская площадь, д.3, к. 5,стр 1</a>
              <a href="#">+7 (495) 123-45-67</a>
              <a href="#" className='mail'>info@lead-group.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
