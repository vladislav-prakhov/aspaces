import { FC, ReactNode } from 'react'
import { StandardLonghandProperties } from 'csstype'
import { Box, BoxProps } from "@mui/system"

interface IFlexbox {
    children?: ReactNode
    margin?: StandardLonghandProperties['marginBlock']
    padding?: StandardLonghandProperties['paddingBlock']
    width?: StandardLonghandProperties['width']
    height?: StandardLonghandProperties['height']
}

export const Flexbox: FC<IFlexbox & BoxProps> = ({ children, margin, padding, width, height, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                margin,
                padding,
                width,
                height,
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export const FlexboxColumn: FC<IFlexbox & BoxProps> = ({ children, margin, padding, width, height, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                margin,
                padding,
                width,
                height,
            }}
            {...props}
        
        >
            {children}
        </Box>
    )
}