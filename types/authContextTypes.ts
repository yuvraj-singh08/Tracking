import { deviceInfoType, driverAddressDetails, driverDocumentDetails, driverEmergencyDetails, driverPersonalDetails, NetworkStatus } from ".";


export type AuthValuesType = {
    getDeviceServerId: (deviceData: deviceInfoType["data"]) => Promise<any>,
}