import { deviceInfoType } from "@/types";

const device: deviceInfoType = {
   data: {
   //  batteryLevel: 100,
    deviceId: "unknown",
    deviceModel: "unknown",
    deviceName: "unknown",
   //  isCharging: false,
    isEmulator: false,
    locale: "unknown",
    deviceType: "unknown",
    brand: "unknown",
    manufacturer: "unknown",
    networkType: "unknown",
    osName: "unknown",
    osVersion: "unknown",
    sdkVersion: "unknown",
    timezone: "unknown",
   },
   isLoading: false,
   error: {
    state: false,
    message: "",
   },
}

export default device;