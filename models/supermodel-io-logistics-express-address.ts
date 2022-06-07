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
 * @interface SupermodelIoLogisticsExpressAddress
 */
export interface SupermodelIoLogisticsExpressAddress {
    /**
     * Please enter your postcode or leave empty if the address doesn't have a postcode
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    postalCode: string;
    /**
     * Please enter the city
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    cityName: string;
    /**
     * Please enter ISO country code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    countryCode: string;
    /**
     * Please enter your province or state code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    provinceCode?: string;
    /**
     * Please enter address line 1
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    addressLine1: string;
    /**
     * Please enter address line 2
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    addressLine2?: string;
    /**
     * Please enter address line 3
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    addressLine3?: string;
    /**
     * Please enter your suburb or county name
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressAddress
     */
    countyName?: string;
}
