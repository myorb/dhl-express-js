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
 * Should your country require registration numbers, such as VAT, EOR etc., please declare it here
 * @export
 * @interface SupermodelIoLogisticsExpressRegistrationNumbers
 */
export interface SupermodelIoLogisticsExpressRegistrationNumbers {
    /**
     * VAT, Value-Added tax<br>      EIN, Employer Identification Number<br>      GST, Goods and Service Tax<br>      SSN, Social Security Number<br>      EOR, European Union Registration and Identification<br>      DUN, Data Universal Numberin System<br>      FED, Federal Tax ID<br>      STA, State Tax ID<br>      CNP, Brazil CNPJ/CPF Federal Tax<br>      IE, Brazil type IE/RG Federal Tax<br>      INN, Russia bank details section - INN<br>      KPP, Russia bank details section - KPP<br>      OGR, Russia bank details section - OGRN<br>      OKP, Russia bank details section â€“ OKPO<br>      SDT, Overseas Registered Supplier or Import One-Stop-Shop or GB VAT (foreign) registration or AUSid GST Registration or VAT on E-Commerce<br>      FTZ, Free Trade Zone ID<br>      DAN, Deferment Account Duties Only<br>      TAN, Deferment Account Tax Only<br>      DTF, Deferment Account Duties, Taxes and Fees Only<br>      RGP, EU Registered Exporters registration ID<br>       DLI,Driver's License <br>      NID,National Identity Card<br>      ,PAS:Passport<br>      ,MID:Manufacturer ID
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRegistrationNumbers
     */
    typeCode: SupermodelIoLogisticsExpressRegistrationNumbersTypeCodeEnum;
    /**
     * Please enter registration number
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRegistrationNumbers
     */
    number: string;
    /**
     * Please enter 2 character code of the country where the Registration Number has been issued by
     * @type {string}
     * @memberof SupermodelIoLogisticsExpressRegistrationNumbers
     */
    issuerCountryCode: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SupermodelIoLogisticsExpressRegistrationNumbersTypeCodeEnum {
    VAT = 'VAT',
    EIN = 'EIN',
    GST = 'GST',
    SSN = 'SSN',
    EOR = 'EOR',
    DUN = 'DUN',
    FED = 'FED',
    STA = 'STA',
    CNP = 'CNP',
    IE = 'IE',
    INN = 'INN',
    KPP = 'KPP',
    OGR = 'OGR',
    OKP = 'OKP',
    MRN = 'MRN',
    SDT = 'SDT',
    FTZ = 'FTZ',
    DAN = 'DAN',
    TAN = 'TAN',
    DTF = 'DTF',
    RGP = 'RGP',
    DLI = 'DLI',
    NID = 'NID',
    PAS = 'PAS',
    MID = 'MID'
}

