'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('@owstack/ows-common').errors.extend(spec);
