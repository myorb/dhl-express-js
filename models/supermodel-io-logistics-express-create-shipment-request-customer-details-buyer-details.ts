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
import { SupermodelIoLogisticsExpressAddressCreateShipmentRequest } from './supermodel-io-logistics-express-address-create-shipment-request';
import { SupermodelIoLogisticsExpressBankDetails } from './supermodel-io-logistics-express-bank-details';
import { SupermodelIoLogisticsExpressContactBuyer } from './supermodel-io-logistics-express-contact-buyer';
import { SupermodelIoLogisticsExpressRegistrationNumbers } from './supermodel-io-logistics-express-registration-numbers';
/**
 * Please enter address and contact details related to buyer
 * @export
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails {
    /**
     * 
     * @type {SupermodelIoLogisticsExpressAddressCreateShipmentRequest}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
     */
    postalAddress: SupermodelIoLogisticsExpressAddressCreateShipmentRequest;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressContactBuyer}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
     */
    contactInformation: SupermodelIoLogisticsExpressContactBuyer;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressRegistrationNumbers>}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
     */
    registrationNumbers?: Array<SupermodelIoLogisticsExpressRegistrationNumbers>;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressBankDetails}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
     */
    bankDetails?: SupermodelIoLogisticsExpressBankDetails;
    /**
     * Please enter the business party type of the buyer
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails
     */
    typeCode?: SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetailsTypeCodeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetailsTypeCodeEnum {
    Business = 'business',
    DirectConsumer = 'direct_consumer',
    Government = 'government',
    Other = 'other',
    Private = 'private',
    Reseller = 'reseller'
}

