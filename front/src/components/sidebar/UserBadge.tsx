import { FC } from 'react'
import { Flexbox } from '../Box'
import style from './style.module.css'

interface IUserButton {
    picture?: string
    background?: 'green' | 'blue' | 'yellow' | 'purple'
    userId?: number
    name?: string
}

export const UserButton: FC<IUserButton> = ({ name, background = 'green' }) => {
    return (
        <Flexbox
            className={style.userButton}
        >
            <div className={style.roundPic} />
            <Flexbox padding='0 10px 0'>
                <span>{name}</span>
            </Flexbox>
        </Flexbox>
    )
}