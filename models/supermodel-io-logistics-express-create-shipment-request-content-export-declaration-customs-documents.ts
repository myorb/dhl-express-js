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
 * 
 * @export
 * @interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments
 */
export interface SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments {
    /**
     * Please provide the line item customs document type code
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments
     */
    typeCode: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsTypeCodeEnum;
    /**
     * Please provide the line item customs document ID
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocuments
     */
    value: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsTypeCodeEnum {
    _972 = '972',
    AHC = 'AHC',
    ALC = 'ALC',
    ATA = 'ATA',
    ATR = 'ATR',
    BEX = 'BEX',
    CHA = 'CHA',
    CHD = 'CHD',
    CHP = 'CHP',
    CIT = 'CIT',
    CIV = 'CIV',
    CI2 = 'CI2',
    COO = 'COO',
    CPA = 'CPA',
    CRL = 'CRL',
    CSD = 'CSD',
    DEX = 'DEX',
    DGD = 'DGD',
    DLI = 'DLI',
    DOV = 'DOV',
    ELP = 'ELP',
    EU1 = 'EU1',
    EU2 = 'EU2',
    EUS = 'EUS',
    EXL = 'EXL',
    FMA = 'FMA',
    HLC = 'HLC',
    HWB = 'HWB',
    INV = 'INV',
    IPA = 'IPA',
    JLC = 'JLC',
    LIC = 'LIC',
    LNP = 'LNP',
    NID = 'NID',
    PAS = 'PAS',
    PFI = 'PFI',
    PHY = 'PHY',
    PLI = 'PLI',
    POA = 'POA',
    PPY = 'PPY',
    ROD = 'ROD',
    T2M = 'T2M',
    TAD = 'TAD',
    TCS = 'TCS',
    VET = 'VET',
    VEX = 'VEX'
}
