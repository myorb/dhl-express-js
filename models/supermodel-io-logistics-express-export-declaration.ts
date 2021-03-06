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
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1 } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-customs-documents1';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-exporter';
import { SupermodelIoLogisticsExpressExportDeclarationAdditionalCharges } from './supermodel-io-logistics-express-export-declaration-additional-charges';
import { SupermodelIoLogisticsExpressExportDeclarationInvoice } from './supermodel-io-logistics-express-export-declaration-invoice';
import { SupermodelIoLogisticsExpressExportDeclarationLineItems } from './supermodel-io-logistics-express-export-declaration-line-items';
import { SupermodelIoLogisticsExpressExportDeclarationRemarks } from './supermodel-io-logistics-express-export-declaration-remarks';
/**
 * Here you can find all details related to export declaration
 * @export
 * @interface SupermodelIoLogisticsExpressExportDeclaration
 */
export interface SupermodelIoLogisticsExpressExportDeclaration {
    /**
     * Please enter details for each export line item
     * @type {Array<SupermodelIoLogisticsExpressExportDeclarationLineItems>}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    lineItems: Array<SupermodelIoLogisticsExpressExportDeclarationLineItems>;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressExportDeclarationInvoice}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    invoice: SupermodelIoLogisticsExpressExportDeclarationInvoice;
    /**
     * Please enter up to three remarks
     * @type {Array<SupermodelIoLogisticsExpressExportDeclarationRemarks>}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    remarks?: Array<SupermodelIoLogisticsExpressExportDeclarationRemarks>;
    /**
     * Please enter additional charge to appear on the invoice<br>      admin, Administration Charge<br>      delivery, Delivery Charge<br>      documentation, Documentation Charge<br>      expedite, Expedite Charge<br>      freight, Freight Charge<br>      fuel surcharge, Fuel Surcharge<br>      logistic, Logistic Charge<br>      other, Other Charge<br>      packaging, Packaging Charge<br>      pickup, Pickup Charge<br>      handling, Handling Charge<br>      vat, VAT Charge<br>      insurance, Insurance Cost
     * @type {Array<SupermodelIoLogisticsExpressExportDeclarationAdditionalCharges>}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    additionalCharges?: Array<SupermodelIoLogisticsExpressExportDeclarationAdditionalCharges>;
    /**
     * Name of port of departure, shipment or destination as required under the applicable delivery term.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    placeOfIncoterm?: string;
    /**
     * Please enter recipient reference
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    recipientReference?: string;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    exporter?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter;
    /**
     * Please provide the reason for export
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    exportReasonType?: SupermodelIoLogisticsExpressExportDeclarationExportReasonTypeEnum;
    /**
     * Please provide the shipment was sent for Personal (Gift) or Commercial (Sale) reasons
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    shipmentType?: SupermodelIoLogisticsExpressExportDeclarationShipmentTypeEnum;
    /**
     * Please provide the Customs Documents at invoice level
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1>}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    customsDocuments?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1>;
    /**
     * The Incoterms rules are a globally-recognized set of standards, used worldwide in international and domestic contracts for the delivery of goods, illustrating responsibilities between buyer and seller for costs and risk, as well as cargo insurance.<br>      EXW??ExWorks<br>      FCA Free Carrier<br>      CPT Carriage Paid To<br>      CIP Carriage and Insurance Paid To<br>      DPU??Delivered at Place Unloaded<br>      DAP??Delivered at Place<br>      DDP??Delivered Duty Paid<br>      FAS Free Alongside Ship<br>      FOB Free on Board<br>      CFR Cost and Freight<br>      CIF??Cost, Insurance and Freight<br>      DAF Delivered at Frontier<br>      DAT Delivered at Terminal<br>      DDU Delivered Duty Unpaid<br>      DEQ Delivery ex Quay<br>      DES Delivered ex Ship
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressExportDeclaration
     */
    incoterm: SupermodelIoLogisticsExpressExportDeclarationIncotermEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressExportDeclarationExportReasonTypeEnum {
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
/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressExportDeclarationShipmentTypeEnum {
    Personal = 'personal',
    Commercial = 'commercial'
}
/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressExportDeclarationIncotermEnum {
    EXW = 'EXW',
    FCA = 'FCA',
    CPT = 'CPT',
    CIP = 'CIP',
    DPU = 'DPU',
    DAP = 'DAP',
    DDP = 'DDP',
    FAS = 'FAS',
    FOB = 'FOB',
    CFR = 'CFR',
    CIF = 'CIF',
    DAF = 'DAF',
    DAT = 'DAT',
    DDU = 'DDU',
    DEQ = 'DEQ',
    DES = 'DES'
}

