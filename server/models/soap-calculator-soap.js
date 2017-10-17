
'use strict';
var server = require('../../server/server');

module.exports = function(CalculatorCalculatorSoap) {

  var soapDataSource = server.datasources.calculatorSoap;
  var CalculatorCalculatorSoap;

  soapDataSource.once('connected', function () {
    // Create the model
    CalculatorCalculatorSoap = soapDataSource.createModel('CalculatorCalculatorSoap', {});
  });


  /**
   * Add
   * @param {Add} Add Add
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  CalculatorCalculatorSoap.Add = function(Add, callback) {
      CalculatorCalculatorSoap.Add(Add, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * Subtract
   * @param {Subtract} Subtract Subtract
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  CalculatorCalculatorSoap.Subtract = function(Subtract, callback) {
      CalculatorCalculatorSoap.Subtract(Subtract, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * Multiply
   * @param {Multiply} Multiply Multiply
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  CalculatorCalculatorSoap.Multiply = function(Multiply, callback) {
      CalculatorCalculatorSoap.Multiply(Multiply, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * Divide
   * @param {Divide} Divide Divide
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  CalculatorCalculatorSoap.Divide = function(Divide, callback) {
      CalculatorCalculatorSoap.Divide(Divide, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  CalculatorCalculatorSoap.remoteMethod('Add',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'Add',
       type: 'Add',
       description: 'Add',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'AddResponse',
       description: 'AddResponse',
       root: true } ],
  http: { verb: 'post', path: '/Add' },
  description: 'Add' }
  );
  
  CalculatorCalculatorSoap.remoteMethod('Subtract',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'Subtract',
       type: 'Subtract',
       description: 'Subtract',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'SubtractResponse',
       description: 'SubtractResponse',
       root: true } ],
  http: { verb: 'post', path: '/Subtract' },
  description: 'Subtract' }
  );
  
  CalculatorCalculatorSoap.remoteMethod('Multiply',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'Multiply',
       type: 'Multiply',
       description: 'Multiply',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'MultiplyResponse',
       description: 'MultiplyResponse',
       root: true } ],
  http: { verb: 'post', path: '/Multiply' },
  description: 'Multiply' }
  );
  
  CalculatorCalculatorSoap.remoteMethod('Divide',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'Divide',
       type: 'Divide',
       description: 'Divide',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'DivideResponse',
       description: 'DivideResponse',
       root: true } ],
  http: { verb: 'post', path: '/Divide' },
  description: 'Divide' }
  );
  
}
