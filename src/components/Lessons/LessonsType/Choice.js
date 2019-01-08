import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isTrue} from '../../../lib/str';
import {
  incrementCountRightAnswers,
  initCountRightAnswers,
} from '../../../actions';

class LessonChoice extends PureComponent {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    answers: PropTypes.shape ({
      image: PropTypes.string.isRequired,
      right: PropTypes.string.isRequired,
    }).isRequired,
    incrementCountRightAnswers: PropTypes.func.isRequired,
    initCountRightAnswers: PropTypes.func.isRequired,
  };

  handleIMG = id => {
    const {incrementCountRightAnswers, initCountRightAnswers} = this.props;

    let oldTagActiveCollections = document.getElementsByClassName (
      'tipDroppableImg ActiveTipDroppableImg'
    );

    if (oldTagActiveCollections) {
      for (let i = 0; i < oldTagActiveCollections.length; i++) {
        oldTagActiveCollections[i].className = 'tipDroppableImg';
      }
    }

    let trueAnswer = false;

    let tagActive = document.getElementById (id);
    tagActive.className = 'tipDroppableImg ActiveTipDroppableImg';

    if (tagActive.hasAttribute ('trueAnswer')) {
      trueAnswer = tagActive.getAttribute ('trueAnswer');

      if (isTrue (trueAnswer)) incrementCountRightAnswers ();
    }

    if (!isTrue (trueAnswer)) initCountRightAnswers ();
  }; //~handleIMG

  render () {
    return (
      <div class="row space45 Width170Pr">
        {this.props.answers.map (answer => {
          return (
            <div key={answer.image} class="col-lg-3 col-md-4 col-6 thumb">
              <a key={answer.image} data-fancybox="gallery">
                <img
                  key={answer.image}
                  src={`./src/images/${answer.image}`}
                  id={answer.image}
                  alt="изображение"
                  class="tipDroppableImg"
                  height="100px"
                  trueAnswer={answer.right}
                  onClick={() => this.handleIMG (answer.image)}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } //~render
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

export default connect (mapStateToProps, mapDispatchToProps) (LessonChoice);
