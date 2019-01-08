import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

let CDT;

if (__DEV__) {
  CDT = createDevTools (
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor />
    </DockMonitor>
  );
} else {
  CDT = () => {
    return null;
  };
}

export default CDT;
