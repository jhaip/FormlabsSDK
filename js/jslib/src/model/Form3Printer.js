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
import Form4PrinterCartridgeDataValue from './Form4PrinterCartridgeDataValue';

/**
 * The Form3Printer model module.
 * @module model/Form3Printer
 * @version 1.0
 */
class Form3Printer {
    /**
     * Constructs a new <code>Form3Printer</code>.
     * @alias module:model/Form3Printer
     * @param id {String} 
     * @param productName {String} 
     * @param status {String} 
     * @param isConnected {Boolean} 
     * @param connectionType {module:model/Form3Printer.ConnectionTypeEnum} 
     * @param ipAddress {String} 
     * @param firmwareVersion {String} 
     * @param isRemotePrintEnabled {Boolean} 
     * @param estimatedPrintTimeRemainingMs {Number} 
     * @param tankId {String} 
     * @param tankMaterialCode {String} 
     * @param cartridgeData {Object.<String, module:model/Form4PrinterCartridgeDataValue>} 
     * @param formAutoStatus {String} 
     * @param readyToPrintNow {Boolean} 
     */
    constructor(id, productName, status, isConnected, connectionType, ipAddress, firmwareVersion, isRemotePrintEnabled, estimatedPrintTimeRemainingMs, tankId, tankMaterialCode, cartridgeData, formAutoStatus, readyToPrintNow) { 
        
        Form3Printer.initialize(this, id, productName, status, isConnected, connectionType, ipAddress, firmwareVersion, isRemotePrintEnabled, estimatedPrintTimeRemainingMs, tankId, tankMaterialCode, cartridgeData, formAutoStatus, readyToPrintNow);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, productName, status, isConnected, connectionType, ipAddress, firmwareVersion, isRemotePrintEnabled, estimatedPrintTimeRemainingMs, tankId, tankMaterialCode, cartridgeData, formAutoStatus, readyToPrintNow) { 
        obj['id'] = id;
        obj['product_name'] = productName;
        obj['status'] = status;
        obj['is_connected'] = isConnected;
        obj['connection_type'] = connectionType;
        obj['ip_address'] = ipAddress;
        obj['firmware_version'] = firmwareVersion;
        obj['is_remote_print_enabled'] = isRemotePrintEnabled;
        obj['estimated_print_time_remaining_ms'] = estimatedPrintTimeRemainingMs;
        obj['tank_id'] = tankId;
        obj['tank_material_code'] = tankMaterialCode;
        obj['cartridge_data'] = cartridgeData;
        obj['form_auto_status'] = formAutoStatus;
        obj['ready_to_print_now'] = readyToPrintNow;
    }

    /**
     * Constructs a <code>Form3Printer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Form3Printer} obj Optional instance to populate.
     * @return {module:model/Form3Printer} The populated <code>Form3Printer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Form3Printer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('is_connected')) {
                obj['is_connected'] = ApiClient.convertToType(data['is_connected'], 'Boolean');
            }
            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('firmware_version')) {
                obj['firmware_version'] = ApiClient.convertToType(data['firmware_version'], 'String');
            }
            if (data.hasOwnProperty('is_remote_print_enabled')) {
                obj['is_remote_print_enabled'] = ApiClient.convertToType(data['is_remote_print_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('estimated_print_time_remaining_ms')) {
                obj['estimated_print_time_remaining_ms'] = ApiClient.convertToType(data['estimated_print_time_remaining_ms'], 'Number');
            }
            if (data.hasOwnProperty('tank_id')) {
                obj['tank_id'] = ApiClient.convertToType(data['tank_id'], 'String');
            }
            if (data.hasOwnProperty('tank_material_code')) {
                obj['tank_material_code'] = ApiClient.convertToType(data['tank_material_code'], 'String');
            }
            if (data.hasOwnProperty('cartridge_data')) {
                obj['cartridge_data'] = ApiClient.convertToType(data['cartridge_data'], {'String': Form4PrinterCartridgeDataValue});
            }
            if (data.hasOwnProperty('form_auto_status')) {
                obj['form_auto_status'] = ApiClient.convertToType(data['form_auto_status'], 'String');
            }
            if (data.hasOwnProperty('ready_to_print_now')) {
                obj['ready_to_print_now'] = ApiClient.convertToType(data['ready_to_print_now'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Form3Printer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Form3Printer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Form3Printer.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
            throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['connection_type'] && !(typeof data['connection_type'] === 'string' || data['connection_type'] instanceof String)) {
            throw new Error("Expected the field `connection_type` to be a primitive type in the JSON string but got " + data['connection_type']);
        }
        // ensure the json data is a string
        if (data['ip_address'] && !(typeof data['ip_address'] === 'string' || data['ip_address'] instanceof String)) {
            throw new Error("Expected the field `ip_address` to be a primitive type in the JSON string but got " + data['ip_address']);
        }
        // ensure the json data is a string
        if (data['firmware_version'] && !(typeof data['firmware_version'] === 'string' || data['firmware_version'] instanceof String)) {
            throw new Error("Expected the field `firmware_version` to be a primitive type in the JSON string but got " + data['firmware_version']);
        }
        // ensure the json data is a string
        if (data['tank_id'] && !(typeof data['tank_id'] === 'string' || data['tank_id'] instanceof String)) {
            throw new Error("Expected the field `tank_id` to be a primitive type in the JSON string but got " + data['tank_id']);
        }
        // ensure the json data is a string
        if (data['tank_material_code'] && !(typeof data['tank_material_code'] === 'string' || data['tank_material_code'] instanceof String)) {
            throw new Error("Expected the field `tank_material_code` to be a primitive type in the JSON string but got " + data['tank_material_code']);
        }
        // ensure the json data is a string
        if (data['form_auto_status'] && !(typeof data['form_auto_status'] === 'string' || data['form_auto_status'] instanceof String)) {
            throw new Error("Expected the field `form_auto_status` to be a primitive type in the JSON string but got " + data['form_auto_status']);
        }

        return true;
    }


}

Form3Printer.RequiredProperties = ["id", "product_name", "status", "is_connected", "connection_type", "ip_address", "firmware_version", "is_remote_print_enabled", "estimated_print_time_remaining_ms", "tank_id", "tank_material_code", "cartridge_data", "form_auto_status", "ready_to_print_now"];

/**
 * @member {String} id
 */
Form3Printer.prototype['id'] = undefined;

/**
 * @member {String} product_name
 */
Form3Printer.prototype['product_name'] = undefined;

/**
 * @member {String} status
 */
Form3Printer.prototype['status'] = undefined;

/**
 * @member {Boolean} is_connected
 */
Form3Printer.prototype['is_connected'] = undefined;

/**
 * @member {module:model/Form3Printer.ConnectionTypeEnum} connection_type
 */
Form3Printer.prototype['connection_type'] = undefined;

/**
 * @member {String} ip_address
 */
Form3Printer.prototype['ip_address'] = undefined;

/**
 * @member {String} firmware_version
 */
Form3Printer.prototype['firmware_version'] = undefined;

/**
 * @member {Boolean} is_remote_print_enabled
 */
Form3Printer.prototype['is_remote_print_enabled'] = undefined;

/**
 * @member {Number} estimated_print_time_remaining_ms
 */
Form3Printer.prototype['estimated_print_time_remaining_ms'] = undefined;

/**
 * @member {String} tank_id
 */
Form3Printer.prototype['tank_id'] = undefined;

/**
 * @member {String} tank_material_code
 */
Form3Printer.prototype['tank_material_code'] = undefined;

/**
 * @member {Object.<String, module:model/Form4PrinterCartridgeDataValue>} cartridge_data
 */
Form3Printer.prototype['cartridge_data'] = undefined;

/**
 * @member {String} form_auto_status
 */
Form3Printer.prototype['form_auto_status'] = undefined;

/**
 * @member {Boolean} ready_to_print_now
 */
Form3Printer.prototype['ready_to_print_now'] = undefined;





/**
 * Allowed values for the <code>connection_type</code> property.
 * @enum {String}
 * @readonly
 */
Form3Printer['ConnectionTypeEnum'] = {

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "VIRTUAL"
     * @const
     */
    "VIRTUAL": "VIRTUAL",

    /**
     * value: "REMOTE"
     * @const
     */
    "REMOTE": "REMOTE",

    /**
     * value: "USB"
     * @const
     */
    "USB": "USB",

    /**
     * value: "WIFI"
     * @const
     */
    "WIFI": "WIFI",

    /**
     * value: "ETHERNET"
     * @const
     */
    "ETHERNET": "ETHERNET",

    /**
     * value: ""
     * @const
     */
    "empty": ""
};



export default Form3Printer;
