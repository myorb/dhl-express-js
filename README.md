# DHL Express - MyDHL API js client
* v2.4.0
* Division: DHL Express

This is TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). 

Exampel usage:

```typescript
import type {
  SupermodelIoLogisticsExpressAddressCreateShipmentRequest,
  SupermodelIoLogisticsExpressContact,
  SupermodelIoLogisticsExpressCreateShipmentRequest,
  SupermodelIoLogisticsExpressCreateShipmentResponse,
} from '@myorb/dhl-express';
import {
  ShipmentApi,
  SupermodelIoLogisticsExpressCreateShipmentRequestContentIncotermEnum,
  SupermodelIoLogisticsExpressCreateShipmentRequestContentUnitOfMeasurementEnum,
} from '@myorb/dhl-express';

export class DHLService {
  static async createShipping(req: SomeInput): Promise<SupermodelIoLogisticsExpressCreateShipmentResponse> {
    const config = {
      basePath?: string;
      username?: string;
      password?: string;
      apiKey?: string | Promise<string> | ((name: string) => string) | ((name: string) => Promise<string>);
      accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    };
    const dhlApi = new ShipmentApi(config);
    const body: SupermodelIoLogisticsExpressCreateShipmentRequest = {
      plannedShippingDateAndTime: '',
      pickup: {
        isRequested: true,
      },
      productCode: '',
      accounts: [],
      customerDetails: {
        shipperDetails: {
          postalAddress: {
            postalCode: '8888',
            cityName: 'Berlin',
            countryCode: 'DE',
            provinceCode: '',
            addressLine1: 'Alexander Platz 1',
            addressLine2: '',
            addressLine3: '',
            provinceName: '',
            countryName: 'Germany',
          },
          contactInformation: {
            phone: '0123456789',
            companyName: 'MyOrb',
            fullName: 'MyOrb',
          },
        },
        receiverDetails: {
          postalAddress: {
            postalCode: '8888',
            cityName: 'Munchen',
            countryCode: 'DE',
            provinceCode: '',
            addressLine1: 'Marienplatz 1',
            addressLine2: '',
            addressLine3: '',
            provinceName: '',
            countryName: 'Germany',
          },
          contactInformation: {
            phone: '0123456789',
            companyName: 'MyOrb',
            fullName: 'MyOrb',
          },
        },
      },
      content: {
        isCustomsDeclarable: false,
        description: 'DOCUMENTS',
        packages: [
          {
            weight: 0.3,
            dimensions: {
              length: 32,
              width: 23.8,
              height: 1,
            },
          },
        ],
        incoterm: SupermodelIoLogisticsExpressCreateShipmentRequestContentIncotermEnum.DAP,
        unitOfMeasurement: SupermodelIoLogisticsExpressCreateShipmentRequestContentUnitOfMeasurementEnum.Metric,
      },
    };
    const shipment = await dhlApi.expApiShipments(body);
    return shipment.data;
  }
}

```

## Configuration

| Name             | Type  | Default                                 | Description                                                    |
| ---------------- | ----- | --------------------------------------- | -------------------------------------------------------------- |
| **basePath** | `str` | `https://express.api.dhl.com/mydhlapi/` | The base URL that is going to be used for DHL API connections. |
| **username** | `str` | `None`                                  | The DHL API username to be used for authentication             |
| **password** | `str` | `None`                                  | The DHL API password to be used for authentication             |
| **apiKey**   | `str` | `None`                                  | Can be used for authentication             |
| **accessToken** | `str` | `None`                                  | Can be used for authentication             |

## License

DHL API for Javascript is currently licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/).