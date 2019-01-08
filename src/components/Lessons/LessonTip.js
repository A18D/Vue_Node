import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isEmptyStr, isTrue} from '../../lib/str';
import TipNoteImage from '../Other/NoteImage';
import TemplateTip from './LessonsType/TemplateTip';
import TipCollectionNoteImage from '../Other/CollectionNoteImage';
import {disableTip, enableTip} from '../../actions';
import TemplateInput from './LessonsType/TemplateInput';

class LessonTip extends PureComponent {
  static propTypes = {
    ABshowTip: PropTypes.bool.isRequired,
    numberTip: PropTypes.number.isRequired,
    disableTip: PropTypes.func.isRequired,
    enableTip: PropTypes.func.isRequired,
    setNoEvaluation: PropTypes.func.isRequired,
    incNumberTip: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    firstTip: PropTypes.string.isRequired,
    secondTipDragAndDrop: PropTypes.array.isRequired,
    thirdTipDragAndDrop: PropTypes.array.isRequired,
    thirdTipChoice: PropTypes.array.isRequired,
    secondTipText: PropTypes.string.isRequired,
    secondTipImage: PropTypes.string.isRequired,
    secondTipInputArrTemplate: PropTypes.array.isRequired,
    secondTipArrAnswerInput: PropTypes.array.isRequired,
    thirdTipInputArrTemplate: PropTypes.array.isRequired,
    thirdTipArrAnswerInput: PropTypes.array.isRequired,
  };

  handleTip = () => {
    if (this.props.numberTip > 0) {
      if (this.props.ABshowTip) this.props.disableTip ();
      else this.props.enableTip ();

      if (this.props.numberTip == 1 && isEmptyStr (this.props.firstTip)) {
        this.props.incNumberTip ();
      } else this.props.setNoEvaluation ();
    }
  };

  render () {
    return (
      <p>
        <div class="HorizontalContainer">
          <button
            class="HorizontalContainer_item_ButtonTip"
            onClick={this.handleTip}
          >
            <i>i</i>
          </button>
          <p id="titleTip" class="HorizontalContainer_item_pTip">
            Подсказка
          </p>
        </div>
        <div>
          {this.props.numberTip == 1 &&
            this.props.ABshowTip &&
            <TemplateTip
              numberTip={this.props.numberTip}
              incNumberTip={this.props.incNumberTip}
              isAnswer={false}
            >
              {this.props.firstTip}
            </TemplateTip>}
          {this.props.numberTip == 2 &&
            this.props.ABshowTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={false}
                >
                  <TipCollectionNoteImage
                    ArrData={this.props.secondTipDragAndDrop}
                  />
                </TemplateTip>}

              {this.props.type == 'choice' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={false}
                >
                  <TipNoteImage
                    numberTip={this.props.numberTip}
                    note={this.props.secondTipText}
                    image={this.props.secondTipImage}
                    addClassTab="BlueBackground"
                  />
                </TemplateTip>}

              {this.props.type == 'input' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={false}
                >
                  <TemplateInput
                    arrTemplate={this.props.secondTipInputArrTemplate}
                    answers={this.props.secondTipArrAnswerInput}
                    prefixIdInput="tipIDAnswer"
                    idForm="tipFormLessonInput"
                    inputClass="InputAnswer backgroundGrey"
                  />
                </TemplateTip>}
            </div>}
          {this.props.numberTip >= 3 &&
            this.props.ABshowTip &&
            <div>
              {this.props.type == 'dragAndDrop' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={true}
                >
                  <TipCollectionNoteImage
                    ArrData={this.props.thirdTipDragAndDrop}
                  />
                </TemplateTip>}

              {this.props.type == 'choice' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={true}
                >
                  <div class="row space45 ">
                    {this.props.thirdTipChoice.map (Element => {
                      return (
                        <div
                          key={Element.image}
                          class="col-lg-3 col-md-4 col-6 thumb"
                        >
                          <a key={Element.image} data-fancybox="gallery">
                            {!isTrue (Element.right) &&
                              <img
                                key={Element.image}
                                src={`./src/images/${Element.image}`}
                                alt="изображение"
                                class="tipDroppableImg"
                                height="100px"
                              />}

                            {isTrue (Element.right) &&
                              <img
                                key={Element.image}
                                src={`./src/images/${Element.image}`}
                                alt="изображение"
                                class="tipDroppableImg RightTipDroppableImg"
                                height="100px"
                              />}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </TemplateTip>}

              {this.props.type == 'input' &&
                <TemplateTip
                  numberTip={this.props.numberTip}
                  incNumberTip={this.props.incNumberTip}
                  isAnswer={true}
                >
                  <TemplateInput
                    arrTemplate={this.props.thirdTipInputArrTemplate}
                    answers={this.props.thirdTipArrAnswerInput}
                    prefixIdInput="tipIDAnswer"
                    idForm="tipFormLessonInput"
                    inputClass="InputAnswer backgroundGrey borderGreenSolid"
                  />
                </TemplateTip>}
            </div>}
        </div>
      </p>
    );
  }
}

let mapStateToProps = state => {
  let questions = [];
  let lesson = getNameLesson (location.hash);
  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  let ABshowTip = state.valueShowTip;
  let currentTask = state.currentTask;
  let type = '';
  let countTips = 0;
  let firstTip = '';
  let secondTipDragAndDrop = [];
  let thirdTipDragAndDrop = [];
  let thirdTipChoice = [];
  let secondTipText = '';
  let secondTipImage = '';

  //tip for "input" lesson
  let secondTipInputArrTemplate = [];
  let secondTipArrAnswerInput = [];
  let thirdTipInputArrTemplate = [];
  let thirdTipArrAnswerInput = [];

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    let question = questions[currentTask];
    type = question.type;
    let tips = questions[currentTask].tips;

    if (Array.isArray (tips)) {
      countTips = tips.length;

      if (countTips == 3) {
        firstTip = tips[0].text;

        if (type == 'dragAndDrop') {
          secondTipDragAndDrop = tips[1].answers;
          thirdTipDragAndDrop = tips[2].answers;

          if (
            !Array.isArray (secondTipDragAndDrop) ||
            secondTipDragAndDrop.length == 0
          )
            secondTipDragAndDrop = [];

          if (
            !Array.isArray (thirdTipDragAndDrop) ||
            thirdTipDragAndDrop.length == 0
          )
            thirdTipDragAndDrop = [];
        } else if (type == 'choice') {
          secondTipText = tips[1].text;
          secondTipImage = tips[1].image;
          thirdTipChoice = tips[2].answers;
        } else if (type == 'input') {
          let TipInputTemplate = tips[1].template;

          if (!isEmptyStr (TipInputTemplate))
            secondTipInputArrTemplate = TipInputTemplate.split (':?');

          secondTipArrAnswerInput = tips[1].answer;

          TipInputTemplate = tips[2].template;

          if (!isEmptyStr (TipInputTemplate))
            thirdTipInputArrTemplate = TipInputTemplate.split (':?');

          thirdTipArrAnswerInput = tips[2].answer;
        }
      }
    }
  }

  return {
    type: type,
    firstTip: firstTip,
    secondTipDragAndDrop: secondTipDragAndDrop,
    thirdTipDragAndDrop: thirdTipDragAndDrop,
    secondTipText: secondTipText,
    secondTipImage: secondTipImage,
    thirdTipChoice: thirdTipChoice,
    ABshowTip: ABshowTip,
    secondTipInputArrTemplate: secondTipInputArrTemplate,
    secondTipArrAnswerInput: secondTipArrAnswerInput,
    thirdTipInputArrTemplate: thirdTipInputArrTemplate,
    thirdTipArrAnswerInput: thirdTipArrAnswerInput,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  enableTip: enableTip,
  disableTip: disableTip,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonTip);
