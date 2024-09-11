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
    instance = new PreFormApi.SceneTypeModel();
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

  describe('SceneTypeModel', function() {
    it('should create an instance of SceneTypeModel', function() {
      // uncomment below and update the code to test SceneTypeModel
      //var instance = new PreFormApi.SceneTypeModel();
      //expect(instance).to.be.a(PreFormApi.SceneTypeModel);
    });

    it('should have the property machineType (base name: "machine_type")', function() {
      // uncomment below and update the code to test the property machineType
      //var instance = new PreFormApi.SceneTypeModel();
      //expect(instance).to.be();
    });

    it('should have the property materialCode (base name: "material_code")', function() {
      // uncomment below and update the code to test the property materialCode
      //var instance = new PreFormApi.SceneTypeModel();
      //expect(instance).to.be();
    });

    it('should have the property printSetting (base name: "print_setting")', function() {
      // uncomment below and update the code to test the property printSetting
      //var instance = new PreFormApi.SceneTypeModel();
      //expect(instance).to.be();
    });

    it('should have the property layerThickness (base name: "layer_thickness")', function() {
      // uncomment below and update the code to test the property layerThickness
      //var instance = new PreFormApi.SceneTypeModel();
      //expect(instance).to.be();
    });

  });

}));