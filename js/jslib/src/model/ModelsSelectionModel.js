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
 * The ModelsSelectionModel model module.
 * @module model/ModelsSelectionModel
 * @version 1.0
 */
class ModelsSelectionModel {
    /**
     * Constructs a new <code>ModelsSelectionModel</code>.
     * @alias module:model/ModelsSelectionModel
     * @param {(module:model/String|module:model/[String])} instance The actual instance to initialize ModelsSelectionModel.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            // validate string
            if (!(typeof instance === 'string')) {
                throw new Error("Invalid value. Must be string. Input: " + JSON.stringify(instance));
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into String
            errorMessages.push("Failed to construct String: " + err)
        }

        try {
            // validate array data type
            if (!Array.isArray(instance)) {
                throw new Error("Invalid data type. Expecting array. Input: " + instance);
            }
            // validate array of string
            for (const item of instance) {
                if (!(typeof item === 'number' && item % 1 === 0)) {
                    throw new Error("Invalid array items. Must be string. Input: " + instance);
                }
            }
            this.actualInstance = instance;
            match++;
        } catch(err) {
            // json data failed to deserialize into [String]
            errorMessages.push("Failed to construct [String]: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ModelsSelectionModel` with oneOf schemas String, [String]. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ModelsSelectionModel` with oneOf schemas String, [String]. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ModelsSelectionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsSelectionModel} obj Optional instance to populate.
     * @return {module:model/ModelsSelectionModel} The populated <code>ModelsSelectionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ModelsSelectionModel(data);
    }

    /**
     * Gets the actual instance, which can be <code>String</code>, <code>[String]</code>.
     * @return {(module:model/String|module:model/[String])} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>String</code>, <code>[String]</code>.
     * @param {(module:model/String|module:model/[String])} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ModelsSelectionModel.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ModelsSelectionModel from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/ModelsSelectionModel} An instance of ModelsSelectionModel.
     */
    static fromJSON = function(json_string){
        return ModelsSelectionModel.constructFromObject(JSON.parse(json_string));
    }
}


ModelsSelectionModel.OneOf = ["String", "[String]"];

export default ModelsSelectionModel;

