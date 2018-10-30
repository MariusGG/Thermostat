'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.newTemperature()).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.increaseTempBy();
    expect(thermostat.newTemperature()).toEqual(25);
  });

  it('can decrease the temperature', function(){
    thermostat.decreaseTempBy();
    expect(thermostat.newTemperature()).toEqual(15);
  });

});
