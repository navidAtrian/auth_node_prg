const controller = require('../controller');
const _ = require('lodash');


const generalConroller = new (class extends controller {
  async home(req, res) {
    res.send('HOME')
  };

  async profile(req, res) {
    this.response(
      {
        res,
        data: _.pick(req.user, ['name', 'email'])
      })

  };

})();

module.exports = generalConroller;
