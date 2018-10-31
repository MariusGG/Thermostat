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
    expect(thermostat.newTemperature()).toEqual(21);
  });

  it('can decrease the temperature', function(){
    thermostat.decreaseTempBy();
    expect(thermostat.newTemperature()).toEqual(19);
  });

  it('has a min temperature', function(){
    thermostat.minimumTemp();
    expect(thermostat.newTemperature()).toEqual(10);
  });

  it('Minimum temperature is 10 degress', function() {
        var i;
        for (i=0; i<10; i++) {
          thermostat.decreaseTempBy();
        }
        expect(function() {thermostat.decreaseTempBy() }).toThrowError('Minimum temperature is 10');
      });

});
