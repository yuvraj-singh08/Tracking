
export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type Notification = {
  id: string;
  date: string;
  time: string;
  subject1: string;
  subject2: string;
  content: string;
};

export type NotificationState = {
  notification_list: Notification[];
};

export type ToastNotification = {
  id: string;
  title: string;
  body: string;
  type: "success" | "info" | "error" | "warn";
};

export type PushNotificationState = {
  data: any[]; // Adjust this type based on the actual shape of your data if known
  toastQueue: ToastNotification[];
};

export type PermissionStatus = {
  status: "granted" | "not-granted";
  data: any;
  error: string | undefined | null;
  isLoading: Boolean;
};

export type LocationStatus = PermissionStatus & {
  data: any;
};

export type NetworkStatus = {
  state: any;
  error: boolean;
  isLoading: boolean;
};

export type PermissionState = {
  isAppPermissionAllowed: boolean;
  camera: PermissionStatus;
  location: LocationStatus;
  notification: PermissionStatus;
  storage: PermissionStatus;
  microphone: PermissionStatus;
  contacts: PermissionStatus;
  network: NetworkStatus;
};

export type AuthState = {
  authenticated: boolean;
  token: string | null;
  refresh_token: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: number | null;
  driver_id: string | null;
  ride_id: string | null;
};


export type driverPersonalDetails = {
  firstName: string,
  lastName: string,
  photo: string,
  dob: Date,
  accpetTNC: boolean
}

export type driverAddressDetails = {
  address_HN: string,
  address_street: string,
  address_area: string,
  address_city: string,
  address_state: string,
  address_PIN: number,
  latitude?: string,
  longitude?: string,
}

export type deviceInfoType = {
  data: {
    // batteryLevel: number;
    deviceId: string;
    deviceModel: string;
    deviceName: string;
    isEmulator: boolean;
    locale: string;
    manufacturer: string;
    networkType: string;
    brand: string;
    osName: string;
    osVersion: string;
    sdkVersion: string;
    // imei: string;
    timezone: string;
    deviceType: string
  };
  isLoading: boolean | undefined;
  error: {
    state: boolean,
    message: any,
  },
};


export type driverDocumentDetails = {
  vehicleNumber: string,
  vehiclePhoto: string,
  licenseNumber: string,
  licenceExpirationDate: string,
  licensePhotoFront: string,
  licensePhotoBack: string,
  RCNumber: string,
  RCPhotoFront: string,
  RCPhotoBack: string,
  aadharNumber: string,
  aadharPhotoFront: string,
  aadharPhotoBack: string,
  insuranceCompany: string,
  insuranceExpirationDate: string,
  insurancePhoto: string,
}

export type driverEmergencyDetails = {
  emergencyName: string,
  emergencyNumber: string,
  emergencyRelation: string,
  emergencyLocation: string,
  blood_group: string,
  health_insurance_type: string,
  health_insurance_number: string,
  health_insurance_exp: string,
}

export type uiDataType = {
  onBoardingStep: number,
}