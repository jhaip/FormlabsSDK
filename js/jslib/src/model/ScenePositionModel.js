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

import ApiClient from '../ApiClient';

/**
 * The ScenePositionModel model module.
 * @module model/ScenePositionModel
 * @version 1.0
 */
class ScenePositionModel {
    /**
     * Constructs a new <code>ScenePositionModel</code>.
     * The global position within the build volume of a printer of the model in the scene
     * @alias module:model/ScenePositionModel
     * @param x {Number} X-position, with 0 at the center of the print volume, and positive values moving to the right as you face the printer.
     * @param y {Number} Y-position, with 0 at the center of the print volume and positive values moving away from you as you face the printer.
     * @param z {Number} Vertical position of the model, with 0 at the bottom of the build platform.
     */
    constructor(x, y, z) { 
        
        ScenePositionModel.initialize(this, x, y, z);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, x, y, z) { 
        obj['x'] = x;
        obj['y'] = y;
        obj['z'] = z;
    }

    /**
     * Constructs a <code>ScenePositionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenePositionModel} obj Optional instance to populate.
     * @return {module:model/ScenePositionModel} The populated <code>ScenePositionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenePositionModel();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScenePositionModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScenePositionModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScenePositionModel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ScenePositionModel.RequiredProperties = ["x", "y", "z"];

/**
 * X-position, with 0 at the center of the print volume, and positive values moving to the right as you face the printer.
 * @member {Number} x
 */
ScenePositionModel.prototype['x'] = undefined;

/**
 * Y-position, with 0 at the center of the print volume and positive values moving away from you as you face the printer.
 * @member {Number} y
 */
ScenePositionModel.prototype['y'] = undefined;

/**
 * Vertical position of the model, with 0 at the bottom of the build platform.
 * @member {Number} z
 */
ScenePositionModel.prototype['z'] = undefined;






export default ScenePositionModel;

