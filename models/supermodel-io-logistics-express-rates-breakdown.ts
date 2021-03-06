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
import { SupermodelIoLogisticsExpressRatesPriceBreakdown1 } from './supermodel-io-logistics-express-rates-price-breakdown1';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressRatesBreakdown
 */
export interface SupermodelIoLogisticsExpressRatesBreakdown {
    /**
     * When landed-cost is requested then following items name (Charge Types) might be returned: <br>                        Charge Type : Description <br>                        STDIS : Quoted shipment total discount <br>                        SCUSV : Shipment Customs value <br>                        SINSV : Insured value <br>                        SPRQD : Shipment product quote discount<br>                        SPRQN : The price quoted to the Customer by DHL at the time of the booking. This quote covers the weight price including discounts and without taxes. <br>                        STSCH : The total of service charges quoted to customer for DHL Express value added services, the amount is after discounts and doesn't include tax amounts. <br>                        MACHG : The total of service charges as provided by Merchant for the purpose of landed cost calculation. <br>                        MFCHG : The freight charge as provided by Merchant for the purpose of landed cost calculation.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    name?: string;
    /**
     * Special service or extra charge code. This is the code you would have to use in the /shipment service if you wish to add an optional Service such as Saturday delivery
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    serviceCode?: string;
    /**
     * Local service code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    localServiceCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    typeCode?: string;
    /**
     * Special service charge code type for service.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    serviceTypeCode?: string;
    /**
     * 
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    price?: number;
    /**
     * This the currency of the rated shipment for the prices listed.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    priceCurrency?: string;
    /**
     * Customer agreement indicator for product and services, if service is offered with prior customer agreement
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    isCustomerAgreement?: boolean;
    /**
     * Indicator if the special service is marketed service
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    isMarketedService?: boolean;
    /**
     * Indicator if there is any discount allowed
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    isBillingServiceIndicator?: boolean;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressRatesPriceBreakdown1>}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    priceBreakdown?: Array<SupermodelIoLogisticsExpressRatesPriceBreakdown1>;
    /**
     * Tariff Rate Formula on Shipment Level
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRatesBreakdown
     */
    tariffRateFormula?: string;
}
