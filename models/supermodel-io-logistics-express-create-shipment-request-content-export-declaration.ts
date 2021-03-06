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
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationAdditionalCharges } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-additional-charges';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1 } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-customs-documents1';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationDeclarationNotes } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-declaration-notes';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-exporter';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-invoice';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLicenses } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-licenses';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-line-items';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationRemarks } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-remarks';
/**
 * Here you can find all details related to export declaration
 * @export
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration {
    /**
     * Please enter details for each export line item
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    lineItems: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItems>;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    invoice?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice;
    /**
     * Please enter up to three remarks
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationRemarks>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    remarks?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationRemarks>;
    /**
     * Please enter additional charge to appear on the invoice<br>              admin, Administration Charge<br>              delivery, Delivery Charge<br>              documentation, Documentation Charge<br>              expedite, Expedite Charge<br>              freight, Freight Charge<br>              fuel surcharge, Fuel Surcharge<br>              logistic, Logistic Charge<br>              other, Other Charge<br>              packaging, Packaging Charge<br>              pickup, Pickup Charge<br>              handling, Handling Charge<br>              vat, VAT Charge<br>              insurance, Insurance Cost<br>              reverse_charge, Reverse Charge
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationAdditionalCharges>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    additionalCharges?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationAdditionalCharges>;
    /**
     * Please provide destination port details
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    destinationPortName?: string;
    /**
     * Name of port of departure, shipment or destination as required under the applicable delivery term.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    placeOfIncoterm?: string;
    /**
     * Please provide Payer VAT number
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    payerVATNumber?: string;
    /**
     * Please enter recipient reference
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    recipientReference?: string;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    exporter?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter;
    /**
     * Please enter package marks
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    packageMarks?: string;
    /**
     * Please provide up to three dcelaration notes
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationDeclarationNotes>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    declarationNotes?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationDeclarationNotes>;
    /**
     * Please enter export reference
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    exportReference?: string;
    /**
     * Please enter export reason
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    exportReason?: string;
    /**
     * Please provide the reason for export
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    exportReasonType?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExportReasonTypeEnum;
    /**
     * Please provide details about export and import licenses
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLicenses>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    licenses?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLicenses>;
    /**
     * Please provide the shipment was sent for Personal (Gift) or Commercial (Sale) reasons
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    shipmentType?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationShipmentTypeEnum;
    /**
     * Please provide the Customs Documents at invoice level
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration
     */
    customsDocuments?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments1>;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExportReasonTypeEnum {
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
export enum SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationShipmentTypeEnum {
    Personal = 'personal',
    Commercial = 'commercial'
}

