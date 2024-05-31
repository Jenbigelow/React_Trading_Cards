'use strict';

function Homepage() {
  return <div>Welcome!
  <a href="/cards"> Cards page</a>
  <img src="/static/img/balloonicorn.jpg" alt="Balloonicorn"></img></div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
