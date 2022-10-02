import { FC, ReactNode } from 'react'
import { StandardLonghandProperties } from 'csstype'
import { Box, BoxProps } from "@mui/system"

interface IFlexbox {
    children?: ReactNode
    margin?: StandardLonghandProperties['marginBlock']
    padding?: StandardLonghandProperties['paddingBlock']
}

export const Flexbox: FC<IFlexbox & BoxProps> = ({ children, margin, padding, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                margin,
                padding,
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export const FlexboxColumn: FC<IFlexbox> = ({ children, margin, padding, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                margin,
                padding,
            }}
            {...props}
        
        >
            {children}
        </Box>
    )
}