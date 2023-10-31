import './Main.scss'
import square from '../../assets/square.png'
import mainLine from '../../assets/mainLine.png'
import mainShip from '../../assets/mainShip.png'
import mainShip2 from '../../assets/mainShip2.png'
import mainShip3 from '../../assets/mainShip3.png'
import mainShip4 from '../../assets/mainShip4.png'
import leftButton from '../../assets/leftButton.png'
import rightButton from '../../assets/rightButton.png'
import guaranteesShip from '../../assets/guaranteesShip.png'
import redSquare from '../../assets/redSquare.png'



function Main() {

  return (
    <>
      <main>
        <div className="main_upper">
          <div className="upper_text">
            <h1>Новости</h1>
            <a href='#'>Все новости</a>
          </div>
          <div className="upper_blocks">
            <div className="upper_block" id='block1'>
              <p className='table_p'>29 декабря 2022 Г.</p>
              <div className="text_block">
                <p>Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.</p>
                <h5>Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.</h5>
              </div>
            </div>
            <div className="upper_block" id='block2'>
              <p className='table_p'>20 декабря 2022 Г.</p>
              <div className="text_block">
                <p>Volutpat vehicula scelerisque consectetur nullam nunc vel. Sagittis enim feugiat maecenas.</p>
                <h5>Facilisis aliquam in velit nibh ipsum quis. Diam nulla fringilla etiam id et egestas dui odio. Lectus nam gravida.</h5>
              </div>
            </div>
            <div className="upper_block" id='block3'>
              <p className='table_p'>14 декабря 2022 Г.</p>
              <div className="text_block">
                <p>Etiam donec fames sed nunc senectus ut eget. Nibh felis eget.</p>
                <h5>Volutpat egestas porttitor duis purus quam est quam. Tempor aliquam vel arcu euismod. Mattis ullamcorper.</h5>
              </div>
            </div>
            <div className="upper_block" id='block4'>
              <p className='table_p'>29 декабря 2022 Г.</p>
              <div className="text_block">
                <p>Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.</p>
                <h5>Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="main_history_block">
          <div className="main-container">
            <div className="main_history_block-left">
              <h1>История компании</h1>
              <p>Congue vel ac parturient placerat vel lectus. Turpis in interdum feugiat enim purus venenatis ornare aliquam nunc. Commodo id ac amet purus tortor suscipit congue facilisis. Tempus bibendum viverra est vel. Ullamcorper dignissim donec feugiat porta. Interdum neque porttitor ultrices feugiat sit nulla ullamcorper nibh amet. Imperdiet risus gravida tempus suspendisse nulla aliquam est. Sed quis in maecenas vestibulum neque malesuada scelerisque mauris. Pharetra ipsum sapien vestibulum fames. Nisl phasellus pellentesque quam risus non orci.</p>
              <p>Risus magna mauris massa gravida turpis vestibulum vulputate libero scelerisque. Proin sed quam amet pellentesque rhoncus semper aenean ultrices gravida. Tristique scelerisque lorem sed eget integer sed sed. Leo donec mi sagittis ac adipiscing diam felis quisque diam. Auctor sed vulputate odio non velit amet. At justo porta gravida elementum mi. Neque tellus tellus sit etiam volutpat aliquam tincidunt semper. Nibh lobortis commodo sapien sollicitudin sagittis. Turpis erat amet volutpat urna quis felis. Lorem mi amet dolor dictum. Facilisis dignissim mauris tristique adipiscing molestie eget consectetur nec non. Id elementum nibh faucibus enim pharetra faucibus ultrices neque magnis. At cursus accumsan blandit tellus nisi tincidunt sit. Lacus mattis mattis nunc tincidunt vitae et.</p>
              <p>Orci augue morbi bibendum ac viverra diam a fermentum. Massa eget porttitor tellus aliquam quisque turpis at nunc. Ut tortor quam urna suscipit. Dictumst neque tincidunt malesuada facilisi cras urna. In nunc sed ultrices eu parturient aliquam. Non lorem facilisis tincidunt est aliquam hac diam. Suspendisse viverra eleifend leo facilisis in. Id purus arcu cursus id. Pretium semper id sit arcu id adipiscing. Neque.</p>
            </div>
            <div className="main_history_block-right">
              <img src={mainLine} alt="" />
              <div className="main_history_block-types">
                <div className="main_history_block-type">
                  <img src={square} alt="" />
                  <p>Etiam hendrerit aliquam mattis mauris at orci.</p>
                </div>
                <div className="main_history_block-type">
                  <img src={square} alt="" />
                  <p>Risus integer ultrices tincidunt massa.</p>
                </div>
                <div className="main_history_block-type">
                  <img src={square} alt="" />
                  <p>Scelerisque lorem semper facilisi auctor metus eros in. Feugiat.</p>
                </div>
                <div className="main_history_block-type">
                  <img src={square} alt="" />
                  <p>Nec id diam varius laoreet volutpat arcu tempus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info_of_ships">
          <div className="info_text">
            <h1>Публикации</h1>
            <a href='#'>Все публикации</a>
          </div>
          <div className="info_blocks">
            <div className="info_blocks-block">
              <img src={mainShip} alt="" />
              <div className="info_blocks_block-text">
                <p>6 сентября 2022 Г.</p>
                <h3>Nibh lacinia venenatis bibendum eget fermentum semper amet. Sed eu quis sed erat aliquam elementum nec. Pellentesque fringilla nunc.</h3>
                <a href="#">Et blandit volutpat sed ullamcorper massa.</a>
              </div>
            </div>
            <div className="info_blocks-block">
              <img src={mainShip2} alt="" />
              <div className="info_blocks_block-text">
                <p>6 сентября 2022 Г.</p>
                <h3>Mattis sem habitant non vitae scelerisque. Sagittis eleifend id convallis posuere feugiat nibh sed risus et. Id aliquam enim ut ac nunc porttitor.</h3>
                <a href="#">Sollicitudin aliquet lorem sed varius a eget quis.</a>
              </div>
            </div>
            <div className="info_blocks-block">
              <img src={mainShip3} alt="" />
              <div className="info_blocks_block-text">
                <p>5 сентября 2022 Г.</p>
                <h3>Sit quis non facilisis posuere. Nec sit auctor nibh integer lacus. Posuere vel amet quam egestas pulvinar dictum nunc tellus vitae. Non amet lacus.</h3>
                <a href="#">In nulla non mattis facilisi sapien. In sodales.</a>
              </div>
            </div>
            <div className="info_blocks-block">
              <img src={mainShip4} alt="" />
              <div className="info_blocks_block-text">
                <p>6 сентября 2022 Г.</p>
                <h3>Lobortis vitae in tellus ac fames amet. Magna et in nunc suspendisse eget. Massa ultrices velit turpis orci non gravida praesent in nibh quis.</h3>
                <a href="#">Sagittis consequat placerat egestas nunc.</a>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications_of_ship">
          <div className="specifications_of_ship-container">
            <div className="specifications_of_ship-upper">
              <h1>Проекты</h1>
              <div className="specifications_of_ship-upper-block">
                <p>все проекты</p>
                <div className="specifications_of_ship-buttons">
                  <button><img src={leftButton} alt="" /></button>
                  <button><img src={rightButton} alt="" /></button>
                </div>
              </div>
            </div>
            <div className="specifications_of_ship-down">
              <div className="specifications_of_ship-left">
                <h1>Diam nulla vulputate id cum</h1>
                <p>Fringilla eget auctor non sed viverra mattis. Lectus est est ullamcorper eu natoque vitae mi consequat. Eget ac elit viverra nec donec cras. Nec nunc nisi augue imperdiet blandit facilisis. Massa in purus ultricies libero vitae.</p>
              </div>
              <div className="specifications_of_ship-right">
                <div className="specifications_of_ship-blocks">
                  <div className="specifications_of_ship-block">
                    <p><span>130 000 </span>тонн</p>
                    <p>вес бетонного основания платформы</p>
                  </div>
                  <div className="specifications_of_ship-block">
                    <p><span>3,3 </span>узла</p>
                    <p>составила скорость буксировки платформы </p>
                  </div>
                  <div className="specifications_of_ship-block">
                    <p><span>15 </span>судов</p>
                    <p>проектная команда</p>
                  </div>
                  <div className="specifications_of_ship-block">
                    <p><span>41 </span>метр</p>
                    <p>высота каждой колонны</p>
                  </div>
                </div>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
        <div className="guarantees_block">
          <div className="guarantees-container">
            <button><img src={leftButton} alt="" /></button>
            <div className="guarantees_information">
              <div className="guarantees-texts">
                <button>Устойчивое развитие</button>
                <h2>Безопасность и качество</h2>
                <div className="guarantees-text">
                  <img src={redSquare} alt="" />
                  <p>Tincidunt fames porta pretium congue orci cursus. Ut nisl ultrices elit euismod tincidunt. Vitae accumsan tellus lectus viverra id scelerisque. Pellentesque viverra in nibh a gravida vulputate mauris. Proin nibh fusce faucibus a est sit sit in.</p>
                </div>
                <div className="guarantees-text">
                  <img src={redSquare} alt="" />
                  <p>Lobortis imperdiet adipiscing commodo ipsum vulputate in at nibh. Diam velit neque nisl pellentesque nunc. Elementum lacus commodo eu sed id massa scelerisque.</p>
                </div>
                <div className="guarantees-text">
                  <img src={redSquare} alt="" />
                  <p>Lacinia nunc sagittis arcu lobortis sed arcu suspendisse imperdiet nunc. Eu nunc tempor ultrices sollicitudin orci diam</p>
                </div>
                <div className="guarantees-text">
                  <img src={redSquare} alt="" />
                  <p>Quisque hac molestie mauris nunc mus nunc. Consequat sed ac integer sed nunc ut curabitur tincidunt. Urna eget sed at tristique in scelerisque cras.</p>
                </div>
              </div>
              <img src={guaranteesShip} alt="" />
            </div>
            <button><img src={rightButton} alt="" /></button>
          </div>
        </div>
      </main >
    </>
  )
}

export default Main
