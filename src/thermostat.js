'use strict';

var Thermostat =  function() {
  this.temperature = 20;
};

Thermostat.prototype.newTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTempBy = function(){
  this.temperature += 1;
};

Thermostat.prototype.decreaseTempBy = function(){
  this.temperature -= 1
};
Thermostat.prototype.minimumTemp = function(){
  this.temperature == 10;
};
