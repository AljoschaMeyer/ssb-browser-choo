const choo = require('choo');
const html = require('choo/html');

const login = require('./pages/login');
const main = require('./pages/main');

const app = choo();

app.route('/', login);

app.mount('body');

app.use((state, emitter) => {
  emitter.on('DOMContentLoaded', () => {
    emitter.on('login', ssb => {
      state.ssb = ssb;
      app.route('/', main);
      app.emit('pushState', '/');
    })
  });
})
