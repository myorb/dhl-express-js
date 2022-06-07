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
import { SupermodelIoLogisticsExpressRatesPriceBreakdown } from './supermodel-io-logistics-express-rates-price-breakdown';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressRatesTotalPriceBreakdown
 */
export interface SupermodelIoLogisticsExpressRatesTotalPriceBreakdown {
    /**
     * Possible Values :<br>                  'BILLC', billing currency<br>                  'PULCL', country public rates currency<br>                  'BASEC', base currency
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesTotalPriceBreakdown
     */
    currencyType?: string;
    /**
     * This the currency of the rated shipment for the prices listed.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesTotalPriceBreakdown
     */
    priceCurrency?: string;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressRatesPriceBreakdown>}
     * @memberof SupermodelIoLogisticsExpressRatesTotalPriceBreakdown
     */
    priceBreakdown?: Array<SupermodelIoLogisticsExpressRatesPriceBreakdown>;
}