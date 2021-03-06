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
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-commodity-codes';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomerReferences } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-customer-references';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-customs-documents';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationQuantity } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-quantity';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationWeight } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-weight';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems {
    /**
     * Please provide line item number
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    number: number;
    /**
     * Please provide description of the line item
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    description: string;
    /**
     * Please provide monetary value of the line item
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    price: number;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationQuantity}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    quantity: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationQuantity;
    /**
     * Please provide Commodity codes for the shipment at item line level
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    commodityCodes?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes>;
    /**
     * Please provide the reason for export
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    exportReasonType?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsExportReasonTypeEnum;
    /**
     * Please enter two letter ISO manufacturer country code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    manufacturerCountry: string;
    /**
     * Please enter Export Control Classification Number info<br>                    This is required for EEI filing US country usage
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    exportControlClassificationNumber?: string;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationWeight}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    weight: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationWeight;
    /**
     * Please provide if the Taxes is paid for the line item
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    isTaxesPaid?: boolean;
    /**
     * Please provide the additional information
     * @type {Array<string>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    additionalInformation?: Array<string>;
    /**
     * Please provide the Customer References for the line item
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomerReferences>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    customerReferences?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomerReferences>;
    /**
     * Please provide the customs documents details
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems
     */
    customsDocuments?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments>;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsExportReasonTypeEnum {
    Permanent = 'permanent',
    Temporary = 'temporary',
    Return = 'return',
    UsedExhibitionGoodsToOrigin = 'used_exhibition_goods_to_origin',
    IntercompanyUse = 'intercompany_use',
    CommercialPurposeOrSale = 'commercial_purpose_or_sale',
    PersonalBelongingsOrPersonalUse = 'personal_belongings_or_personal_use',
    Sample = 'sample',
    Gift = 'gift',
    ReturnToOrigin = 'return_to_origin',
    WarrantyReplacement = 'warranty_replacement',
    DiplomaticGoods = 'diplomatic_goods',
    DefenceMaterial = 'defence_material'
}

