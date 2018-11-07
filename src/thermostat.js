'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.powerSavingMode = true
}

Thermostat.prototype.getTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increase = function(){
  if (this.MaximumTemperature()){
    return;
  }
  this.temperature++
}

Thermostat.prototype.decrease = function(){
  if (this.MinimumTemperature()){
    return;
  }
  this.temperature--
}

Thermostat.prototype.MaximumTemperature = function(){
  return this.temperature === this.MAXIMUM_TEMPERATURE;
}

Thermostat.prototype.MinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.PowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
}
