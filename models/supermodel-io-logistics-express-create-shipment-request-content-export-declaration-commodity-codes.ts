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
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes {
    /**
     * Please provide type of the commodity code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes
     */
    typeCode: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodesTypeCodeEnum;
    /**
     * Please provide the commodity code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes
     */
    value: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodesTypeCodeEnum {
    Outbound = 'outbound',
    Inbound = 'inbound'
}

