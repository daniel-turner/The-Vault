'use strict';
module.exports = function() {

  var keyValues = [];

  var _setValue = function(key,value) {

    if(_getValue(key) !== undefined) {

      keyValues.push([key,value]);
    }

  };

  var _getValue = function(key) {

    for(var i = 0; i < keyValues.length; i++) {

      if(keyValues[i][0] === key) {

        return keyValues[i][1];
      }
    }

    return null;
  };

  return {

    setValue: _setValue,
    getValue: _getValue
  };

};