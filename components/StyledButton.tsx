import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface StyledButtonProps{
    children?: ReactNode;
    isLoading?: boolean;
    sx?: string;
    onPress?: () => void;
    variant?: 'primary' | 'secondary'
}

const StyledButton = ({ children, isLoading, sx, onPress, variant = 'primary' }: StyledButtonProps) => {
    return(
        <TouchableOpacity
            className={`flex justify-center items-center py-[20px] px-2 border border-button rounded-[100px] ${variant === 'primary'? 'bg-primary text-white' : 'bg-white text-black'} ${isLoading? 'opacity-50' : ''} ${sx}`}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            {children}
        </TouchableOpacity>
    )
}

export default StyledButton