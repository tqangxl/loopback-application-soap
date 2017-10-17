
'use strict';
var server = require('../../server/server');

module.exports = function(GlobalWeatherGlobalWeatherSoap) {

  var soapDataSource = server.datasources.GlobalWeatherSoap;
  var GlobalWeatherGlobalWeatherSoap;

  soapDataSource.once('connected', function () {
    // Create the model
    GlobalWeatherGlobalWeatherSoap = soapDataSource.createModel('GlobalWeatherGlobalWeatherSoap', {});
  });


  /**
   * GetWeather
   * @param {GetWeather} GetWeather GetWeather
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  GlobalWeatherGlobalWeatherSoap.GetWeather = function(GetWeather, callback) {
      GlobalWeatherGlobalWeatherSoap.GetWeather(GetWeather, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCitiesByCountry
   * @param {GetCitiesByCountry} GetCitiesByCountry GetCitiesByCountry
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  GlobalWeatherGlobalWeatherSoap.GetCitiesByCountry = function(GetCitiesByCountry, callback) {
      GlobalWeatherGlobalWeatherSoap.GetCitiesByCountry(GetCitiesByCountry, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  GlobalWeatherGlobalWeatherSoap.remoteMethod('GetWeather',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetWeather',
       type: 'GetWeather',
       description: 'GetWeather',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetWeatherResponse',
       description: 'GetWeatherResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetWeather' },
  description: 'GetWeather' }
  );
  
  GlobalWeatherGlobalWeatherSoap.remoteMethod('GetCitiesByCountry',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'GetCitiesByCountry',
       type: 'GetCitiesByCountry',
       description: 'GetCitiesByCountry',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'GetCitiesByCountryResponse',
       description: 'GetCitiesByCountryResponse',
       root: true } ],
  http: { verb: 'post', path: '/GetCitiesByCountry' },
  description: 'GetCitiesByCountry' }
  );
  
}
