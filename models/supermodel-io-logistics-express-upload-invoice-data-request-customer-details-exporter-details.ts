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
import { SupermodelIoLogisticsExpressAddress } from './supermodel-io-logistics-express-address';
import { SupermodelIoLogisticsExpressContact } from './supermodel-io-logistics-express-contact';
import { SupermodelIoLogisticsExpressRegistrationNumbers } from './supermodel-io-logistics-express-registration-numbers';
/**
 * Please enter address and contact details related to exporter
 * @export
 * @interface SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails
 */
export interface SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails {
    /**
     * 
     * @type {SupermodelIoLogisticsExpressAddress}
     * @memberof SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails
     */
    postalAddress: SupermodelIoLogisticsExpressAddress;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressContact}
     * @memberof SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails
     */
    contactInformation: SupermodelIoLogisticsExpressContact;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressRegistrationNumbers>}
     * @memberof SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails
     */
    registrationNumbers?: Array<SupermodelIoLogisticsExpressRegistrationNumbers>;
    /**
     * Please enter the business party type of the exporter
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails
     */
    typeCode?: SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetailsTypeCodeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetailsTypeCodeEnum {
    Business = 'business',
    DirectConsumer = 'direct_consumer',
    Government = 'government',
    Other = 'other',
    Private = 'private',
    Reseller = 'reseller'
}

