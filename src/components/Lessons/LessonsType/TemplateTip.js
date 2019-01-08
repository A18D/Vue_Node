import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class TemplateTip extends PureComponent {
  static propTypes = {
    numberTip: PropTypes.number.isRequired,
    incNumberTip: PropTypes.func.isRequired,
    isAnswer: PropTypes.bool.isRequired,
  };

  render () {
    if (this.props.isAnswer)
      return (
        <div class="HorizontalContainerTabTip Top40">
          <div class="HorizontalContainer_item_TabTip GreenBackground">
            <div class="VerticalText">Ответ</div>
          </div>
          <div class="HorizontalContainer_item_ContentTip">
            {this.props.children}
          </div>
        </div>
      );
    else
      return (
        <div class="HorizontalContainerTabTip Top40">
          <div class="HorizontalContainer_item_TabTip BlueBackground">
            <div class="VerticalText">
              Подсказка {this.props.numberTip}
            </div>
          </div>
          <div class="HorizontalContainer_item_ContentTip">
            {this.props.children}
            <br />
            <br />
            <a onClick={this.props.incNumberTip}>Еще одна подсказка ∨</a>
          </div>
        </div>
      );
  }
}
