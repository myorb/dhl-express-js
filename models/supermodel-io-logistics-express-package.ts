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
import { Dimensions } from './dimensions';
import { SupermodelIoLogisticsExpressIdentifier } from './supermodel-io-logistics-express-identifier';
import { SupermodelIoLogisticsExpressPackageLabelBarcodes } from './supermodel-io-logistics-express-package-label-barcodes';
import { SupermodelIoLogisticsExpressPackageLabelText } from './supermodel-io-logistics-express-package-label-text';
import { SupermodelIoLogisticsExpressPackageReference } from './supermodel-io-logistics-express-package-reference';
/**
 * Package definition for /shipments
 * @export
 * @interface SupermodelIoLogisticsExpressPackage
 */
export interface SupermodelIoLogisticsExpressPackage {
    /**
     * Please contact your DHL Express representative if you wish to use a DHL specific package otherwise ignore this element.
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    typeCode?: SupermodelIoLogisticsExpressPackageTypeCodeEnum;
    /**
     * The weight of the package.
     * @type {number}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    weight: number;
    /**
     * 
     * @type {Dimensions}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    dimensions: Dimensions;
    /**
     * Here you can declare your customer references for each package
     * @type {Array<SupermodelIoLogisticsExpressPackageReference>}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    customerReferences?: Array<SupermodelIoLogisticsExpressPackageReference>;
    /**
     * Identifiers section is on the package level where you can optionaly provide a DHL Express waybill number. This has to be enabled by your DHL Express IT contact.
     * @type {Array<SupermodelIoLogisticsExpressIdentifier>}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    identifiers?: Array<SupermodelIoLogisticsExpressIdentifier>;
    /**
     * Please enter description of content for each package
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    description?: string;
    /**
     * This allows you to define up to two bespoke barcodes on the DHL Express Tranport label. To use this feature please set outputImageProperties/imageOptions/templateName as ECOM26_84CI_003 for typeCode=label
     * @type {Array<SupermodelIoLogisticsExpressPackageLabelBarcodes>}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    labelBarcodes?: Array<SupermodelIoLogisticsExpressPackageLabelBarcodes>;
    /**
     * This allows you to enter up to two bespoke texts on the DHL Express Tranport label. To use this feature please set outputImageProperties/imageOptions/templateName as ECOM26_84CI_003 for typeCode=label
     * @type {Array<SupermodelIoLogisticsExpressPackageLabelText>}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    labelText?: Array<SupermodelIoLogisticsExpressPackageLabelText>;
    /**
     * Please enter additional customer description
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressPackage
     */
    labelDescription?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressPackageTypeCodeEnum {
    _3BX = '3BX',
    _2BC = '2BC',
    _2BP = '2BP',
    CE1 = 'CE1',
    _7BX = '7BX',
    _6BX = '6BX',
    _4BX = '4BX',
    _2BX = '2BX',
    _1CE = '1CE',
    WB1 = 'WB1',
    WB3 = 'WB3',
    XPD = 'XPD',
    _8BX = '8BX',
    _5BX = '5BX',
    WB6 = 'WB6',
    TBL = 'TBL',
    TBS = 'TBS',
    WB2 = 'WB2'
}
