import { FC } from 'react'
import { Flexbox } from '../Box'
import Badge from '@mui/material/Badge'
import style from './style.module.css'

interface IUserButton {
    picture?: string
    background?: 'green' | 'blue' | 'yellow' | 'purple'
    unreadedMessages?: number
    userId?: number
    name?: string
}

export const UserButton: FC<IUserButton> = ({ name, unreadedMessages = 0, background = 'green' }) => {
    return (
        <Flexbox
            className={style.userButton}
        >
            <Badge color="secondary" overlap="circular" invisible={!Boolean(unreadedMessages)} badgeContent={unreadedMessages}>
                <div className={style.roundPic} />
            </Badge>
            <Flexbox padding='0 10px 0'>
                <span>{name}</span>
            </Flexbox>
        </Flexbox>
    )
}