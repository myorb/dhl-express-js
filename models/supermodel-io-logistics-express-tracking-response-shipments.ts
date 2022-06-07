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
import { SupermodelIoLogisticsExpressReference } from './supermodel-io-logistics-express-reference';
import { SupermodelIoLogisticsExpressTrackingResponseEvents } from './supermodel-io-logistics-express-tracking-response-events';
import { SupermodelIoLogisticsExpressTrackingResponsePieces } from './supermodel-io-logistics-express-tracking-response-pieces';
import { SupermodelIoLogisticsExpressTrackingResponseReceiverDetails } from './supermodel-io-logistics-express-tracking-response-receiver-details';
import { SupermodelIoLogisticsExpressTrackingResponseShipperDetails } from './supermodel-io-logistics-express-tracking-response-shipper-details';
/**
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressTrackingResponseShipments
 */
export interface SupermodelIoLogisticsExpressTrackingResponseShipments {
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    shipmentTrackingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    shipmentTimestamp?: string;
    /**
     * DHL product code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    productCode?: string;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    description?: string;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressTrackingResponseShipperDetails}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    shipperDetails?: SupermodelIoLogisticsExpressTrackingResponseShipperDetails;
    /**
     * 
     * @type {SupermodelIoLogisticsExpressTrackingResponseReceiverDetails}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    receiverDetails?: SupermodelIoLogisticsExpressTrackingResponseReceiverDetails;
    /**
     * 
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    totalWeight?: number;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    unitOfMeasurements?: string;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressReference>}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    shipperReferences?: Array<SupermodelIoLogisticsExpressReference>;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressTrackingResponseEvents>}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    events: Array<SupermodelIoLogisticsExpressTrackingResponseEvents>;
    /**
     * 
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    numberOfPieces?: number;
    /**
     * 
     * @type {Array<SupermodelIoLogisticsExpressTrackingResponsePieces>}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    pieces?: Array<SupermodelIoLogisticsExpressTrackingResponsePieces>;
    /**
     * 
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    estimatedDeliveryDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SupermodelIoLogisticsExpressTrackingResponseShipments
     */
    childrenShipmentIdentificationNumbers?: Array<string>;
}
