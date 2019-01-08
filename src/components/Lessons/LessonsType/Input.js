import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isEmptyStr} from '../../../lib/str';
import {
  incrementCountRightAnswers,
  initCountRightAnswers,
} from '../../../actions';
import TemplateInput from './TemplateInput';
import jss from 'jss';
import preset from 'jss-preset-default';
class LessonInput extends PureComponent {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    arrTemplate: PropTypes.array.isRequired,
    incrementCountRightAnswers: PropTypes.func.isRequired,
    initCountRightAnswers: PropTypes.func.isRequired,
  };

  handleConfirm = event => {
    const {incrementCountRightAnswers, initCountRightAnswers} = this.props;
    // показать ошибку
    let errorTag = document.getElementById ('textError');
    let iRightAnswer = 0;
    errorTag.innerHTML = '';
    errorTag.className = '';

    if (
      event.target &&
      event.target.id &&
      event.target.className == 'InputAnswer'
    ) {
      this.props.arrTemplate.forEach ((item, i) => {
        const idTag = 'IDAnswer' + i;
        let tagInput = document.getElementById (idTag);

        if (tagInput)
          if (isNaN (tagInput.value)) {
            // введено не число
            tagInput.value = '';

            jss.setup (preset ());

            // Create your style.
            const style = {
              error: {
                width: 350,
                height: 50,
                margin: 'auto',
                border: '4px ridge Orange',
                padding: '10px 0 10px',
                textAlign: 'center',
                fontSize: 14,
                backgroundColor: '#FFBABA',
                color: 'Black',
                transition: 'border 1s ease, color 1.5s ease, font 1.5s ease, background-color 2s ease',
                '&:hover': {
                  backgroundColor: '#D0D941',
                  color: 'Red',
                  font: 'italic 16px COMIC SANS MS',
                  border: '4px ridge rgb(255, 0, 0)',
                },
              },
            };

            // Compile styles, apply plugins.
            let sheet = jss.createStyleSheet (style);

            // If you want to render on the client, insert it into DOM.
            const {classes} = sheet.attach ();

            // показать ошибку
            errorTag.className = classes.error;
            errorTag.innerHTML =
              'Вы ввели не число. Введите число, пожалуйста.';
          } else if (tagInput.value == this.props.answers[i - 1])
            iRightAnswer++;
      });
    }

    if (iRightAnswer == this.props.answers.length && iRightAnswer > 0)
      incrementCountRightAnswers ();
    else initCountRightAnswers ();
  }; //~handleConfirm

  render () {
    return (
      <div>

        <TemplateInput
          arrTemplate={this.props.arrTemplate}
          answers={[]}
          prefixIdInput="IDAnswer"
          idForm="formLessonInput"
          inputClass="InputAnswer"
        />

        <p id="textError" class="small space45 colorRed" />
      </div>
    );
  } //~render

  componentDidMount () {
    formLessonInput.addEventListener ('blur', this.handleConfirm, true);
  } //~componentDidMount
}

let mapStateToProps = state => {
  let answers = [];
  let template = '';
  let questions = [];
  let currentTask = state.currentTask;
  let lesson = getNameLesson (location.hash);
  let arrTemplate = [];

  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    answers = questions[currentTask].answers;
    template = questions[currentTask].template;

    if (!isEmptyStr (template)) arrTemplate = template.split (':?');
  }

  if (!Array.isArray (answers)) answers = [];

  return {
    answers: answers,
    arrTemplate: arrTemplate,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  incrementCountRightAnswers: incrementCountRightAnswers,
  initCountRightAnswers: initCountRightAnswers,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonInput);
