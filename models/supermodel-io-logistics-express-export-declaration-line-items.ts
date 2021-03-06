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
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-customs-documents';
import { SupermodelIoLogisticsExpressExportDeclarationCustomerReferences } from './supermodel-io-logistics-express-export-declaration-customer-references';
import { SupermodelIoLogisticsExpressExportDeclarationQuantity } from './supermodel-io-logistics-express-export-declaration-quantity';
import { SupermodelIoLogisticsExpressExportDeclarationWeight } from './supermodel-io-logistics-express-export-declaration-weight';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressExportDeclarationLineItems
 */
export interface SupermodelIoLogisticsExpressExportDeclarationLineItems {
    /**
     * Please provide line item number
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    number: number;
    /**
     * Please provide description of the line item
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    description: string;
    /**
     * Please provide monetary value of the line item
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    price: number;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressExportDeclarationQuantity}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    quantity: SupermodelIoLogisticsExpressExportDeclarationQuantity;
    /**
     * Please provide Commodity codes for the shipment at item line level
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes>}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    commodityCodes?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCommodityCodes>;
    /**
     * Please provide the reason for export
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    exportReasonType?: SupermodelIoLogisticsExpressExportDeclarationLineItemsExportReasonTypeEnum;
    /**
     * Please enter two letter ISO manufacturer country code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    manufacturerCountry: string;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressExportDeclarationWeight}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    weight: SupermodelIoLogisticsExpressExportDeclarationWeight;
    /**
     * Please provide if the Taxes is paid for the line item
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    isTaxesPaid?: boolean;
    /**
     * Please provide the Customer References for the line item
     * @type {Array<SupermodelIoLogisticsExpressExportDeclarationCustomerReferences>}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    customerReferences?: Array<SupermodelIoLogisticsExpressExportDeclarationCustomerReferences>;
    /**
     * Please provide the customs documents details
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments>}
     * @memberof SupermodelIoLogisticsExpressExportDeclarationLineItems
     */
    customsDocuments?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments>;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressExportDeclarationLineItemsExportReasonTypeEnum {
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

