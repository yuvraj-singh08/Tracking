import { createContext, useEffect, useState, ReactNode, useRef } from 'react';
import { AuthValuesType } from '@/types/authContextTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { deviceInfoType, driverAddressDetails, driverDocumentDetails, driverEmergencyDetails, driverPersonalDetails, NetworkStatus } from '@/types';
import { AppState, AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '@/config/axiosInstance';

const defaultProvider: AuthValuesType = {
    getDeviceServerId: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
    children: ReactNode
};

const AuthProvider = ({ children }: Props): JSX.Element => {
    const firstRender = useRef(true);

   const getDeviceServerId = async (deviceData: deviceInfoType["data"]): Promise<any> => {
    try {
        const apiURl = `/common/registerDevice`
        const requestData = JSON.stringify({
            ...deviceData, userType: "DRIVER", "imei": "123456789012345",
            "idfa": "00000000-0000-0000-0000-000000000000",
        })
        const response = await axiosInstance.post(apiURl, requestData)
        return response.data
    } catch (error) {
        return error
    }
}



    const values = {
        getDeviceServerId,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
