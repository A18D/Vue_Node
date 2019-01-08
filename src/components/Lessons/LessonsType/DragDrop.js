import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson} from '../../../lib/str';
import {getParentDiv} from '../../../lib/DOM';
import {incrementCountRightAnswers, initCountRightAnswers} from '../../../actions';

class LessonDragDrop extends PureComponent {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    answers: PropTypes.shape ({
      image: PropTypes.string.isRequired,
      sign: PropTypes.string.isRequired,
    }).isRequired,
    incrementCountRightAnswers: PropTypes.func.isRequired,
    initCountRightAnswers: PropTypes.func.isRequired,
  };

  constructor (props) {
    super (props);
    this.dragObject = {};
  }

  render () {
    return (
      <div class="HorizontalContainer space45">
        <div class="row">
          {this.props.answers.map (answer => {
            return (
              <div key={answer.sign} class="col-lg-3 col-md-4 col-6 thumb">
                <div
                  key={answer.sign}
                  class="VerticalContainer"
                  trueAnswer={answer.sign}
                >
                  <a
                    key={answer.sign}
                    data-fancybox="gallery"
                    href={`./src/images/${answer.image}`}
                    target="_blank"
                  >
                    <img
                      key={answer.sign}
                      class="droppable"
                      src={`./src/images/${answer.image}`}
                      alt="изображение"
                      height="100px"
                    />
                  </a>
                  <input
                    key={answer.sign}
                    type="text"
                    class="droppable"
                    name="inputDroppable"
                    disabled
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div class="draggableBlock">
          {this.props.answers.map (answer => {
            return <p key={answer.sign} class="draggable">{answer.sign}</p>;
          })}
        </div>
      </div>
    );
  }

  componentDidMount () {
    const {incrementCountRightAnswers, initCountRightAnswers} = this.props;

    initCountRightAnswers ();
    document.onmousemove = this.onMouseMove;
    document.onmouseup = this.onMouseUp;
    document.onmousedown = this.onMouseDown;

    this.onDragEnd = function (dragObject, dropElem) {
      dragObject.elem.style.display = 'none';
      dropElem.classList.add ('computer-smile');

      let parentDiv = getParentDiv (dropElem);

      if (parentDiv) {
        let CtagsDroppable = parentDiv.getElementsByClassName ('droppable');
        let tagInputDroppable = CtagsDroppable.namedItem ('inputDroppable');

        if (tagInputDroppable && dragObject.elem) {
          tagInputDroppable.value = dragObject.elem.textContent;

          if (parentDiv.hasAttribute ('trueAnswer')) {
            let trueAnswer = parentDiv.getAttribute ('trueAnswer');

            if (trueAnswer == tagInputDroppable.value) incrementCountRightAnswers ();
          }
        }
      }

      setTimeout (function () {
        dropElem.classList.remove ('computer-smile');
      }, 200);
    };

    this.onDragCancel = function (dragObject) {
      dragObject.avatar.rollback ();
    };
  }

  componentWillUnmount () {
    document.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null;
  }

  onMouseDown = e => {
    if (e.which != 1) return;

    var elem = e.target.closest ('.draggable');
    if (!elem) return;

    this.dragObject.elem = elem;

    // запомним, что элемент нажат на текущих координатах pageX/pageY
    this.dragObject.downX = e.pageX;
    this.dragObject.downY = e.pageY;

    return false;
  };

  onMouseMove = e => {
    if (!this.dragObject.elem) return; // элемент не зажат

    if (!this.dragObject.avatar) {
      // если перенос не начат...
      var moveX = e.pageX - this.dragObject.downX;
      var moveY = e.pageY - this.dragObject.downY;

      // если мышь передвинулась в нажатом состоянии недостаточно далеко
      if (Math.abs (moveX) < 3 && Math.abs (moveY) < 3) {
        return;
      }

      // начинаем перенос
      this.dragObject.avatar = this.createAvatar (e); // создать аватар
      if (!this.dragObject.avatar) {
        // отмена переноса, нельзя "захватить" за эту часть элемента
        this.dragObject = {};
        return;
      }

      // аватар создан успешно
      // создать вспомогательные свойства shiftX/shiftY
      var coords = this.getCoords (this.dragObject.avatar);
      this.dragObject.shiftX = this.dragObject.downX - coords.left;
      this.dragObject.shiftY = this.dragObject.downY - coords.top;

      this.startDrag (e); // отобразить начало переноса
    }

    // отобразить перенос объекта при каждом движении мыши
    this.dragObject.avatar.style.left = e.pageX - this.dragObject.shiftX + 'px';
    this.dragObject.avatar.style.top = e.pageY - this.dragObject.shiftY + 'px';

    return false;
  };

  onMouseUp = e => {
    if (this.dragObject.avatar) {
      // если перенос идет
      this.finishDrag (e);
    }

    // перенос либо не начинался, либо завершился
    // в любом случае очистим "состояние переноса" dragObject
    this.dragObject = {};
  };

  finishDrag = e => {
    var dropElem = this.findDroppable (e);

    if (!dropElem) {
      this.onDragCancel (this.dragObject);
    } else {
      this.onDragEnd (this.dragObject, dropElem);
    }
  };

  findDroppable = event => {
    // спрячем переносимый элемент
    this.dragObject.avatar.hidden = true;

    // получить самый вложенный элемент под курсором мыши
    var elem = document.elementFromPoint (event.clientX, event.clientY);

    // показать переносимый элемент обратно
    this.dragObject.avatar.hidden = false;

    if (elem == null) {
      // такое возможно, если курсор мыши "вылетел" за границу окна
      return null;
    }

    return elem.closest ('.droppable');
  };

  createAvatar = e => {
    // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
    var avatar = this.dragObject.elem;
    var old = {
      parent: avatar.parentNode,
      nextSibling: avatar.nextSibling,
      position: avatar.position || '',
      left: avatar.left || '',
      top: avatar.top || '',
      zIndex: avatar.zIndex || '',
    };

    // функция для отмены переноса
    avatar.rollback = function () {
      old.parent.insertBefore (avatar, old.nextSibling);
      avatar.style.position = old.position;
      avatar.style.left = old.left;
      avatar.style.top = old.top;
      avatar.style.zIndex = old.zIndex;
    };

    return avatar;
  };

  startDrag = e => {
    var avatar = this.dragObject.avatar;

    // инициировать начало переноса
    document.body.appendChild (avatar);
    avatar.style.zIndex = 9999;
    avatar.style.position = 'absolute';
  };

  getCoords = elem => {
    // кроме IE8-
    var box = elem.getBoundingClientRect ();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  };
}

let mapStateToProps = state => {
  let answers = [];
  let questions = [];
  let currentTask = state.currentTask;
  let lesson = getNameLesson (location.hash);

  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    answers = questions[currentTask].answers;
  }

  if (!Array.isArray (answers)) answers = [];

  return {
    answers: answers,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  incrementCountRightAnswers: incrementCountRightAnswers,
  initCountRightAnswers: initCountRightAnswers,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonDragDrop);
