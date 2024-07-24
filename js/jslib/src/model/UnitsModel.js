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
* Enum class UnitsModel.
* @enum {}
* @readonly
*/
export default class UnitsModel {
    
        /**
         * value: "MILLIMETERS"
         * @const
         */
        "MILLIMETERS" = "MILLIMETERS";

    
        /**
         * value: "INCHES"
         * @const
         */
        "INCHES" = "INCHES";

    

    /**
    * Returns a <code>UnitsModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UnitsModel} The enum <code>UnitsModel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
