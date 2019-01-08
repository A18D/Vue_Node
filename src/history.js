import createHashHistory from 'history/createBrowserHistory';

const history = createHashHistory ();
history.listen ((location, action) => {
  if (__DEV__) {
    console.log (
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    );
    console.log (`The last navigation action was ${action}`);
  }
});
window.routerHistory = history;

export default history;
