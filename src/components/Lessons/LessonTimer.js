import React, {PureComponent} from 'react';

export class LessonTimer extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      timer: 0,
      timerID: 0,
    };
  }

  GetTimer = () => {
    let t = this.state.timer;

    if (t == 0) return;

    let dtime = (new Date ().getTime () - t) / 1000;
    let dt = dtime;
    let m = dt / 60;
    let h = Math.floor (m / 60);
    let dm = Math.floor (m - h * 60);
    let ds = Math.floor (dt - (h * 3600 + dm * 60));

    document.getElementById ('timer').textContent =
      h.toString ().padStart (2, 0) +
      ':' +
      dm.toString ().padStart (2, 0) +
      ':' +
      ds.toString ().padStart (2, 0);
  };

  handleStartTimer = () => {
    let t = new Date ().getTime ();
    let tID = setInterval (this.GetTimer, 1000);
    this.setState ({timer: t, timerID: tID});
  };

  handleStopTimer = () => {
    let tID = this.state.timerID;
    clearTimeout (tID);
    this.setState ({timer: 0, timerID: 0});
  };

  render () {
    return <span id="timer" />;
  }

  componentDidMount () {
    this.handleStartTimer ();
  }

  componentWillUnmount () {
    this.handleStopTimer ();
  }
}
