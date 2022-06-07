/* tslint:disable */
/* eslint-disable */
/**
 * DHL Express APIs (MyDHL API)
 * Welcome to the official DHL Express APIs (MyDHL API) below are the published API Documentation to fulfill your shipping needs with DHL Express.       Please follow the process described [here](https://developer.dhl.com/api-reference/dhl-express-mydhl-api#get-started-section/user-guide--get-access) to request access to the DHL Express - MyDHL API services    In case you already have DHL Express - MyDHL API Service credentials please ensure to use the endpoints/environments listed  [here](https://developer.dhl.com/api-reference/dhl-express-mydhl-api#get-started-section/user-guide--environments) 
 *
 * OpenAPI spec version: 2.4.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressAddressCreateShipmentRequest
 */
export interface SupermodelIoLogisticsExpressAddressCreateShipmentRequest {
    /**
     * Please enter your postcode or leave empty if the address doesn't have a postcode
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    postalCode: string;
    /**
     * Please enter the city
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    cityName: string;
    /**
     * Please enter ISO country code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    countryCode: string;
    /**
     * Please enter your province or state code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    provinceCode?: string;
    /**
     * Please enter address line 1
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    addressLine1: string;
    /**
     * Please enter address line 2
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    addressLine2?: string;
    /**
     * Please enter address line 3
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    addressLine3?: string;
    /**
     * Please enter your suburb or county name
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    countyName?: string;
    /**
     * Please enter your state or province name
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    provinceName?: string;
    /**
     * Please enter your country name
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddressCreateShipmentRequest
     */
    countryName?: string;
}