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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { SupermodelIoLogisticsExpressAddressValidateResponse } from '../models';
import { SupermodelIoLogisticsExpressErrorResponse } from '../models';
/**
 * AddressApi - axios parameter creator
 * @export
 */
export const AddressApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
         * @summary Validate DHL Express pickup/delivery capabilities at origin/destination
         * @param {string} type 
         * @param {string} countryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
         * @param {string} [postalCode] Text specifying the postal code for an address. https://gs1.org/voc/postalCode
         * @param {string} [cityName] Text specifying the city name
         * @param {boolean} [strictValidation] If set to true service will return no records when exact valid match not found
         * @param {string} [messageReference] Please provide message reference 
         * @param {string} [messageReferenceDate] Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
         * @param {string} [pluginName] Please provide name of the plugin (applicable to 3PV only) 
         * @param {string} [pluginVersion] Please provide version of the plugin (applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformName] Please provide name of the shipping platform(applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformVersion] Please provide version of the shipping platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformName] Please provide name of the webstore platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformVersion] Please provide version of the webstore platform (applicable to 3PV only) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        expApiAddressValidate: async (type: string, countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling expApiAddressValidate.');
            }
            // verify required parameter 'countryCode' is not null or undefined
            if (countryCode === null || countryCode === undefined) {
                throw new RequiredError('countryCode','Required parameter countryCode was null or undefined when calling expApiAddressValidate.');
            }
            const localVarPath = `/address-validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (countryCode !== undefined) {
                localVarQueryParameter['countryCode'] = countryCode;
            }

            if (postalCode !== undefined) {
                localVarQueryParameter['postalCode'] = postalCode;
            }

            if (cityName !== undefined) {
                localVarQueryParameter['cityName'] = cityName;
            }

            if (strictValidation !== undefined) {
                localVarQueryParameter['strictValidation'] = strictValidation;
            }

            if (messageReference !== undefined && messageReference !== null) {
                localVarHeaderParameter['Message-Reference'] = String(messageReference);
            }

            if (messageReferenceDate !== undefined && messageReferenceDate !== null) {
                localVarHeaderParameter['Message-Reference-Date'] = String(messageReferenceDate);
            }

            if (pluginName !== undefined && pluginName !== null) {
                localVarHeaderParameter['Plugin-Name'] = String(pluginName);
            }

            if (pluginVersion !== undefined && pluginVersion !== null) {
                localVarHeaderParameter['Plugin-Version'] = String(pluginVersion);
            }

            if (shippingSystemPlatformName !== undefined && shippingSystemPlatformName !== null) {
                localVarHeaderParameter['Shipping-System-Platform-Name'] = String(shippingSystemPlatformName);
            }

            if (shippingSystemPlatformVersion !== undefined && shippingSystemPlatformVersion !== null) {
                localVarHeaderParameter['Shipping-System-Platform-Version'] = String(shippingSystemPlatformVersion);
            }

            if (webstorePlatformName !== undefined && webstorePlatformName !== null) {
                localVarHeaderParameter['Webstore-Platform-Name'] = String(webstorePlatformName);
            }

            if (webstorePlatformVersion !== undefined && webstorePlatformVersion !== null) {
                localVarHeaderParameter['Webstore-Platform-Version'] = String(webstorePlatformVersion);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AddressApi - functional programming interface
 * @export
 */
export const AddressApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
         * @summary Validate DHL Express pickup/delivery capabilities at origin/destination
         * @param {string} type 
         * @param {string} countryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
         * @param {string} [postalCode] Text specifying the postal code for an address. https://gs1.org/voc/postalCode
         * @param {string} [cityName] Text specifying the city name
         * @param {boolean} [strictValidation] If set to true service will return no records when exact valid match not found
         * @param {string} [messageReference] Please provide message reference 
         * @param {string} [messageReferenceDate] Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
         * @param {string} [pluginName] Please provide name of the plugin (applicable to 3PV only) 
         * @param {string} [pluginVersion] Please provide version of the plugin (applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformName] Please provide name of the shipping platform(applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformVersion] Please provide version of the shipping platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformName] Please provide name of the webstore platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformVersion] Please provide version of the webstore platform (applicable to 3PV only) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async expApiAddressValidate(type: string, countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SupermodelIoLogisticsExpressAddressValidateResponse>>> {
            const localVarAxiosArgs = await AddressApiAxiosParamCreator(configuration).expApiAddressValidate(type, countryCode, postalCode, cityName, strictValidation, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AddressApi - factory interface
 * @export
 */
export const AddressApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
         * @summary Validate DHL Express pickup/delivery capabilities at origin/destination
         * @param {string} type 
         * @param {string} countryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
         * @param {string} [postalCode] Text specifying the postal code for an address. https://gs1.org/voc/postalCode
         * @param {string} [cityName] Text specifying the city name
         * @param {boolean} [strictValidation] If set to true service will return no records when exact valid match not found
         * @param {string} [messageReference] Please provide message reference 
         * @param {string} [messageReferenceDate] Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
         * @param {string} [pluginName] Please provide name of the plugin (applicable to 3PV only) 
         * @param {string} [pluginVersion] Please provide version of the plugin (applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformName] Please provide name of the shipping platform(applicable to 3PV only) 
         * @param {string} [shippingSystemPlatformVersion] Please provide version of the shipping platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformName] Please provide name of the webstore platform (applicable to 3PV only) 
         * @param {string} [webstorePlatformVersion] Please provide version of the webstore platform (applicable to 3PV only) 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async expApiAddressValidate(type: string, countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SupermodelIoLogisticsExpressAddressValidateResponse>> {
            return AddressApiFp(configuration).expApiAddressValidate(type, countryCode, postalCode, cityName, strictValidation, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AddressApi - object-oriented interface
 * @export
 * @class AddressApi
 * @extends {BaseAPI}
 */
export class AddressApi extends BaseAPI {
    /**
     * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
     * @summary Validate DHL Express pickup/delivery capabilities at origin/destination
     * @param {string} type 
     * @param {string} countryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param {string} [postalCode] Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param {string} [cityName] Text specifying the city name
     * @param {boolean} [strictValidation] If set to true service will return no records when exact valid match not found
     * @param {string} [messageReference] Please provide message reference 
     * @param {string} [messageReferenceDate] Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param {string} [pluginName] Please provide name of the plugin (applicable to 3PV only) 
     * @param {string} [pluginVersion] Please provide version of the plugin (applicable to 3PV only) 
     * @param {string} [shippingSystemPlatformName] Please provide name of the shipping platform(applicable to 3PV only) 
     * @param {string} [shippingSystemPlatformVersion] Please provide version of the shipping platform (applicable to 3PV only) 
     * @param {string} [webstorePlatformName] Please provide name of the webstore platform (applicable to 3PV only) 
     * @param {string} [webstorePlatformVersion] Please provide version of the webstore platform (applicable to 3PV only) 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressApi
     */
    public async expApiAddressValidate(type: string, countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<SupermodelIoLogisticsExpressAddressValidateResponse>> {
        return AddressApiFp(this.configuration).expApiAddressValidate(type, countryCode, postalCode, cityName, strictValidation, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, options).then((request) => request(this.axios, this.basePath));
    }
}
