import React, {PureComponent} from 'react';
import history from '../history';
import iSmartPNG from 'img/iSmart.png'; 
import imgInstagramJPG from 'img/imgInstagram.jpg'; 

export class FooterPage extends PureComponent {
  pushTrainingToPath (e) {
    history.push ('./#/Training');
    history.go ();
  }

  pushAboutProjecToPath (e) {
    history.push ('./#/AboutProject');
    history.go ();
  }

  pushBlogToPath (e) {
    history.push ('./#/Blog');
    history.go ();
  }

  pushWebinarToPath (e) {
    history.push ('./#/Webinar');
    history.go ();
  }

  pushRewardsToPath (e) {
    history.push ('./#/Training/rewards');
    history.go ();
  }

  pushBeginToPath (e) {
    history.push ('./#/Training/begin');
    history.go ();
  }

  render () {
    //Такой синтаксис гарантирует, что "this" привязан к onLog
    return (
      <footer class="page-footer font-small pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-3 mt-md-0 mt-3 text-left">
              <p class="SpaceContainer">
                <a href="/" target="_blank">
                  <img
                    src={iSmartPNG}
                    alt="логотип"
                    width="40"
                    height="40"
                  />
                </a>
                <b>Ай Смарт, ООО</b>
              </p>
              <p>
                E-learning platform
              </p>
              <p>
                тел: +7 495 123 45 67
              </p>
              <div class="form-inline SpaceContainer">
                <form
                  class="form-group"
                  action="https://www.vk.com"
                  target="_blank"
                >
                  <button class=" btn btn-default VKBtn" type="submit">
                    <i class=" fa fa-vk" />
                  </button>
                </form>
                <span />
                <form
                  class="form-group"
                  action="https://twitter.com"
                  target="_blank"
                >
                  <button class=" btn btn-default TBtn" type="submit">
                    <i class="fa fa-twitter" />
                  </button>
                </form>
                <span />
                <form
                  class="form-group"
                  action="https://ru-ru.facebook.com/"
                  target="_blank"
                >
                  <button class=" btn btn-default FBtn">
                    <i class="fa fa-facebook" />
                  </button>
                </form>
                <span />
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    src={imgInstagramJPG}
                    alt="логотип"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <h5>Содержание:</h5>
              <ul class="list-unstyled">
                <li>
                  <a onClick={e => this.pushTrainingToPath (e)}>Обучение</a>
                </li>
                <li>
                  <a onClick={e => this.pushAboutProjecToPath (e)}>О проекте</a>
                </li>
                <li>
                  <a onClick={e => this.pushBlogToPath (e)}>Блог</a>
                </li>
                <li>
                  <a onClick={e => this.pushWebinarToPath (e)}>Вебинары</a>
                </li>
                <li>
                  <a>Аналитика</a>
                </li>
                <li>
                  <a>Подписка</a>
                </li>
                <li>
                  <a onClick={e => this.pushRewardsToPath (e)}>Награды</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 TopSpaceContainer">
              <ul class="list-unstyled">
                <li>
                  <a>Диагностика</a>
                </li>
                <li>
                  <a onClick={e => this.pushBeginToPath (e)}>С чего начать?</a>
                </li>
                <li>
                  <a>Математика</a>
                </li>
                <li>
                  <a>Русский язык</a>
                </li>
                <li>
                  <a>Английский язык</a>
                </li>
                <li>
                  <a>Окружающий мир</a>
                </li>
                <li>
                  <a href="http://www.google.com" target="_blank">Поиск</a>
                </li>
              </ul>
            </div>

            <div class="col-md-2">
              <h5>Помощь:</h5>
              <ul class="list-unstyled">
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Составление расписания</a>
                </li>
                <li>
                  <a>Использование аналитики</a>
                </li>
                <li>
                  <a>Регистрация на сайте</a>
                </li>
                <li>
                  <a>Добавление ученика</a>
                </li>
                <li>
                  <a>Использование наград</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          iSmart, LTD 2017 (c) копирование запрещено
        </div>
      </footer>
    );
  }
}
