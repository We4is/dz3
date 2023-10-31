import './Header.scss'
import search from '../../assets/search.png'
import logo from '../../assets/logo.png'
import leftButton from '../../assets/leftButton.png'
import rightButton from '../../assets/rightButton.png'
import ship from '../../assets/ship.png'





function Header() {

  return (
    <>
      <header>
        <div className="header_container">
          <div className="header_header">
            <img src={logo} alt="" />
            <div className="header_info">
              <p>info@lead-group.ru</p>
              <p>+7 (495) 123-45-67</p>
            </div>
            <img src={search} alt="" />
          </div>
          <div className="header_bottom_info">
            <a href="#">О нас</a>
            <a href="#">Флот</a>
            <a href="#">Инвесторам</a>
            <a href="#">Карьера</a>
            <a href="#">Пресс-центр</a>
            <a href="#">Устойчивое развитие</a>
            <a href="#">Контакты</a>
          </div>
          <div className="header_main">
            <div className="left_part">
              <div className="left_upper">
                <h1>Первый в мире ледокольный газовоз</h1>
                <p>Et elementum penatibus lacinia eget ut amet lorem. Id lectus magna quis odio in. In mi vitae ultrices et luctus eu gravida tincidunt cras. Quisque pellentesque mollis ut sed.</p>
                <button>Подробнее</button>
              </div>
              <div className="left_bottom">
                <p className="left_button"><img src={leftButton} alt="" /></p>
                <p className="right_button"><img src={rightButton} alt="" /></p>
              </div>
            </div>
            <div className="right_part">
              <div className="ship_info">
                <h3>Танкер-газовоз СПГ «КАПИТАН ДАНИЛКИН»</h3>
                <div className="info_of_ship">
                  <div className="info_text">
                    <div className="text_block_p">
                      <p>Грузовместимость:</p>
                      <p>Ледопроходимость:</p>
                      <p>Ледовый класс:</p>
                      <p>Число «Азиподов»:</p>
                    </div>
                    <div className="text_block_span">
                      <p>172 600м3</p>
                      <p>2,1 м</p>
                      <p>Arc7</p>
                      <p>3</p>
                    </div>
                  </div>
                  <img src={ship} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}

export default Header
