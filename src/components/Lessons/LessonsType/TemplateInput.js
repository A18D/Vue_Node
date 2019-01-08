import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class TemplateInput extends PureComponent {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    arrTemplate: PropTypes.array.isRequired,
    prefixIdInput: PropTypes.string.isRequired,
    idForm: PropTypes.string.isRequired,
    inputClass: PropTypes.string.isRequired,
  };

  render () {
    return (
      <form
        id={this.props.idForm}
        class="HorizontalContainer Top40 space45 bottom45 sizebig"
      >
        {this.props.arrTemplate.map ((item, i) => {
          let idTag = this.props.prefixIdInput + i;

          if (i == 0) return <p key={i} class="bottom0">{item}</p>;
          else
            return (
              <div key={i} class="HorizontalContainer bottom0">
                <input
                  key={i}
                  type="text"
                  id={idTag}
                  class={this.props.inputClass}
                  value={this.props.answers[i - 1]}
                />
                <p key={i} class="bottom0">{item}</p>
              </div>
            );
        })}
      </form>
    );
  } //~render
}
