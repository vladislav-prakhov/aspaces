import { FC, ReactElement } from 'react'
import { Flexbox, FlexboxColumn } from '../Box'
import styles from './styles.module.scss'

interface IChatMessage {
    name: string
    text: string
    isMine: boolean
}

export const Message: FC<IChatMessage> = ({ name, text, isMine }) => {
    return (
        <Flexbox height='30px'>
            {text}
        </Flexbox>
    )
}

export const ChatBox: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <FlexboxColumn height='100%' className={styles.chatBox}>
            <MessagesBox />
            <InputBox />
        </FlexboxColumn>
    )
}

export const MessagesBox: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <FlexboxColumn className={styles.messagesBox}>
            <Message name='Valdemar' text='Привет' isMine={false}  />
            <Message name='Valdemar' text='Что делаешь?' isMine={false}  />
            <Message name='Valdemar' text='Есть пару идей' isMine={false}  />
        </FlexboxColumn>
    )
}

export const InputBox: FC<{ children?: ReactElement }> = ({ children }) => {
    return (
        <Flexbox height='48px' className={styles.inputBox}>
            <span>Тут вводить сообщение</span>
        </Flexbox>
    )
}