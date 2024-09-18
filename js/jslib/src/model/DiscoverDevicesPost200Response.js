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
import DeviceStatusModel from './DeviceStatusModel';

/**
 * The DiscoverDevicesPost200Response model module.
 * @module model/DiscoverDevicesPost200Response
 * @version 1.0
 */
class DiscoverDevicesPost200Response {
    /**
     * Constructs a new <code>DiscoverDevicesPost200Response</code>.
     * @alias module:model/DiscoverDevicesPost200Response
     */
    constructor() { 
        
        DiscoverDevicesPost200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiscoverDevicesPost200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiscoverDevicesPost200Response} obj Optional instance to populate.
     * @return {module:model/DiscoverDevicesPost200Response} The populated <code>DiscoverDevicesPost200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscoverDevicesPost200Response();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [DeviceStatusModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscoverDevicesPost200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscoverDevicesPost200Response</code>.
     */
    static validateJSON(data) {
        if (data['devices']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['devices'])) {
                throw new Error("Expected the field `devices` to be an array in the JSON data but got " + data['devices']);
            }
            // validate the optional field `devices` (array)
            for (const item of data['devices']) {
                DeviceStatusModel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Number of newly discovered devices
 * @member {Number} count
 */
DiscoverDevicesPost200Response.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/DeviceStatusModel>} devices
 */
DiscoverDevicesPost200Response.prototype['devices'] = undefined;






export default DiscoverDevicesPost200Response;

