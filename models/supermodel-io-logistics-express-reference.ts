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
/**
 * Reference model description
 * @export
 * @interface SupermodelIoLogisticsExpressReference
 */
export interface SupermodelIoLogisticsExpressReference {
    /**
     * Please provide reference
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressReference
     */
    value: string;
    /**
     * Please provide reference type<br>      <br>      AAO, shipment reference number of receiver<br>      CU, reference number of consignor - default<br>      FF, reference number of freight forwarder<br>      FN, freight bill number for <ex works invoice number><br>      IBC, inbound center reference number<br>      LLR, load list reference for <10-digit Shipment ID><br>      OBC, outbound center reference number for <SHIPMEN IDENTIFIER (COUNTRY OF ORIGIN)><br>      PRN, pickup request number for <BOOKINGREFERENCE NUMBER><br>      ACP, local payer account number<br>      ACS, local shipper account number<br>      ACR, local receiver account number<br>      CDN, customs declaration number<br>      STD, eurolog 15-digit shipment id<br>      CO, buyers order number
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressReference
     */
    typeCode?: SupermodelIoLogisticsExpressReferenceTypeCodeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressReferenceTypeCodeEnum {
    AAO = 'AAO',
    CU = 'CU',
    FF = 'FF',
    FN = 'FN',
    IBC = 'IBC',
    LLR = 'LLR',
    OBC = 'OBC',
    PRN = 'PRN',
    ACP = 'ACP',
    ACS = 'ACS',
    ACR = 'ACR',
    CDN = 'CDN',
    STD = 'STD',
    CO = 'CO'
}

