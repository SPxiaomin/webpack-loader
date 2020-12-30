const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

module.exports = function(source) {
  this.cacheable(false);

  const { name } = loaderUtils.getOptions(this);

  console.log('name', name);

  // throw new Error('Error');
  // this.callback(new Error('Error'), null);

  // return source;
  // this.callback(null, source);

  const callback = this.async();
  fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
    if (err) {
      return callback(err, '');
    }

    callback(null, data);
  });
};
