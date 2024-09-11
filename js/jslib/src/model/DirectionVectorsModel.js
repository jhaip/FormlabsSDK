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
 * The DirectionVectorsModel model module.
 * @module model/DirectionVectorsModel
 * @version 1.0
 */
class DirectionVectorsModel {
    /**
     * Constructs a new <code>DirectionVectorsModel</code>.
     * @alias module:model/DirectionVectorsModel
     * @param zDirection {Array.<Number>} 3D unit vector in model space saying which piece of the model will point \"up\" in scene space. 
     * @param xDirection {Array.<Number>} 3D unit vector in model space, perpendicular to Z direction, saying which piece of the model will point \"right\" in scene space. 
     */
    constructor(zDirection, xDirection) { 
        
        DirectionVectorsModel.initialize(this, zDirection, xDirection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, zDirection, xDirection) { 
        obj['z_direction'] = zDirection;
        obj['x_direction'] = xDirection;
    }

    /**
     * Constructs a <code>DirectionVectorsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectionVectorsModel} obj Optional instance to populate.
     * @return {module:model/DirectionVectorsModel} The populated <code>DirectionVectorsModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectionVectorsModel();

            if (data.hasOwnProperty('z_direction')) {
                obj['z_direction'] = ApiClient.convertToType(data['z_direction'], ['Number']);
            }
            if (data.hasOwnProperty('x_direction')) {
                obj['x_direction'] = ApiClient.convertToType(data['x_direction'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DirectionVectorsModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DirectionVectorsModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DirectionVectorsModel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['z_direction'])) {
            throw new Error("Expected the field `z_direction` to be an array in the JSON data but got " + data['z_direction']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['x_direction'])) {
            throw new Error("Expected the field `x_direction` to be an array in the JSON data but got " + data['x_direction']);
        }

        return true;
    }


}

DirectionVectorsModel.RequiredProperties = ["z_direction", "x_direction"];

/**
 * 3D unit vector in model space saying which piece of the model will point \"up\" in scene space. 
 * @member {Array.<Number>} z_direction
 */
DirectionVectorsModel.prototype['z_direction'] = undefined;

/**
 * 3D unit vector in model space, perpendicular to Z direction, saying which piece of the model will point \"right\" in scene space. 
 * @member {Array.<Number>} x_direction
 */
DirectionVectorsModel.prototype['x_direction'] = undefined;






export default DirectionVectorsModel;

