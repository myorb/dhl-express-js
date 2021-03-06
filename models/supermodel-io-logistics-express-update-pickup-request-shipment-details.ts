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
import { SupermodelIoLogisticsExpressAccount } from './supermodel-io-logistics-express-account';
import { SupermodelIoLogisticsExpressPackageRR } from './supermodel-io-logistics-express-package-rr';
import { SupermodelIoLogisticsExpressValueAddedServicesRates } from './supermodel-io-logistics-express-value-added-services-rates';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
 */
export interface SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails {
    /**
     * Please provide DHL Express Global product code of the shipment
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    productCode: string;
    /**
     * Please provide DHL Express Local product code of the shipment
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    localProductCode?: string;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressAccount>}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    accounts?: Array<SupermodelIoLogisticsExpressAccount>;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressValueAddedServicesRates>}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    valueAddedServices?: Array<SupermodelIoLogisticsExpressValueAddedServicesRates>;
    /**
     * For customs purposes please advise if your shipment is dutiable (true) or non dutiable (false)
     * @type {boolean}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    isCustomsDeclarable: boolean;
    /**
     * For customs purposes please advise on declared value of the shipment
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    declaredValue?: number;
    /**
     * For customs purposes please advise on declared value currency code of the shipment
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    declaredValueCurrency?: string;
    /**
     * Please enter Unit of measurement - metric,imperial
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    unitOfMeasurement: SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetailsUnitOfMeasurementEnum;
    /**
     * Please provide Shipment Identification number (AWB number)
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    shipmentTrackingNumber?: string;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressPackageRR>}
     * @memberof SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetails
     */
    packages: Array<SupermodelIoLogisticsExpressPackageRR>;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetailsUnitOfMeasurementEnum {
    Metric = 'metric',
    Imperial = 'imperial'
}

