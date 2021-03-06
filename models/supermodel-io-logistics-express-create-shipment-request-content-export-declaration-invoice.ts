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
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferences } from './supermodel-io-logistics-express-create-shipment-request-content-export-declaration-invoice-customer-references';
/**
 * Please provide invoice related information
 * @export
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice {
    /**
     * Please enter commercial invoice number
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    number: string;
    /**
     * Please enter commercial invoice date
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    date: string;
    /**
     * Please enter who has signed the invoce
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    signatureName?: string;
    /**
     * Please provide title of person who has signed the invoice
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    signatureTitle?: string;
    /**
     * Please provide the signature image
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    signatureImage?: string;
    /**
     * Please provide the invoice instruction
     * @type {Array<string>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    instructions?: Array<string>;
    /**
     * Please provide the Customer data text details
     * @type {Array<string>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    customerDataTextEntries?: Array<string>;
    /**
     * Please provide the total net weight
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    totalNetWeight?: number;
    /**
     * Please provide the total gross weight
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    totalGrossWeight?: number;
    /**
     * Please provide the customer references at invoice level
     * @type {Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferences>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    customerReferences?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferences>;
    /**
     * Please provide the terms of payment
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice
     */
    termsOfPayment?: string;
}
