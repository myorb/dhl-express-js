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
import { SupermodelIoLogisticsExpressRatesPriceBreakdown2 } from './supermodel-io-logistics-express-rates-price-breakdown2';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressRatesBreakdown1
 */
export interface SupermodelIoLogisticsExpressRatesBreakdown1 {
    /**
     * Name of the charge
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    name?: string;
    /**
     * Special service or extra charge code. This is the code you would have to use in the /shipment service if you wish to add an optional Service such as Saturday delivery
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    serviceCode?: string;
    /**
     * Local service code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    localServiceCode?: string;
    /**
     * Charge type or category.<br>                        Possible values;<br>                        - DUTY<br>                        - TAX<br>                        - FEE
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    typeCode: string;
    /**
     * Special service charge code type for service. XCH type charge codes are Optional Services and should be displayed to users for selection.<br>                        The possible values are;<br>                        - XCH = Extra charge<br>                        - FEE = Fee<br>                        - SCH = Surcharge<br>                        - NRI = Non Revenue Item<br>                        Other charges may be automatically returned when applicable.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    serviceTypeCode?: string;
    /**
     * The charge amount of the line item charge.
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    price: number;
    /**
     * This the currency of the rated shipment for the prices listed.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    priceCurrency?: string;
    /**
     * Customer agreement indicator for product and services, if service is offered with prior customer agreement
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    isCustomerAgreement?: boolean;
    /**
     * Indicator if the special service is marketed service
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    isMarketedService?: boolean;
    /**
     * Indicator if there is any discount allowed
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    isBillingServiceIndicator?: boolean;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressRatesPriceBreakdown2>}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    priceBreakdown?: Array<SupermodelIoLogisticsExpressRatesPriceBreakdown2>;
    /**
     * Tariff Rate Formula on Line Item Level
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown1
     */
    tariffRateFormula?: string;
}