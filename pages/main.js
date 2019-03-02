const html = require('choo/html');

module.exports = (state, emit) => {
  // Now we can do stuff with an ssb client.
  state.ssb.whoami((err, keys) => {
    if (err) {
      console.log('whoami errored =(', err)
    } else {
      console.log('whoami details:', keys);
    }
  });

  return html`<body>Great, build an application next!</body>`;
}
