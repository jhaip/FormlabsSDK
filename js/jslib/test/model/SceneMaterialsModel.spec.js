/**
 * PreForm API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PreFormApi);
  }
}(this, function(expect, PreFormApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PreFormApi.SceneMaterialsModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SceneMaterialsModel', function() {
    it('should create an instance of SceneMaterialsModel', function() {
      // uncomment below and update the code to test SceneMaterialsModel
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be.a(PreFormApi.SceneMaterialsModel);
    });

    it('should have the property volumeMl (base name: "volume_ml")', function() {
      // uncomment below and update the code to test the property volumeMl
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property unsupportedVolumeMl (base name: "unsupported_volume_ml")', function() {
      // uncomment below and update the code to test the property unsupportedVolumeMl
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPowderMl (base name: "total_powder_ml")', function() {
      // uncomment below and update the code to test the property totalPowderMl
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPowderKg (base name: "total_powder_kg")', function() {
      // uncomment below and update the code to test the property totalPowderKg
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property totalSinteredPowderMl (base name: "total_sintered_powder_ml")', function() {
      // uncomment below and update the code to test the property totalSinteredPowderMl
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property totalSinteredPowderKg (base name: "total_sintered_powder_kg")', function() {
      // uncomment below and update the code to test the property totalSinteredPowderKg
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

    it('should have the property massPackingDensity (base name: "mass_packing_density")', function() {
      // uncomment below and update the code to test the property massPackingDensity
      //var instance = new PreFormApi.SceneMaterialsModel();
      //expect(instance).to.be();
    });

  });

}));