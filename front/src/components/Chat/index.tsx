import { FC, ReactElement } from 'react'
import { Flexbox, FlexboxColumn } from '../Box'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface IChatMessage {
    name: string
    text: string
    isOutgoing?: boolean
}

export const Message: FC<IChatMessage> = ({ name, text, isOutgoing }) => {
    return (
        <div className={clsx(styles.messageRow, { [styles.outgoing]: Boolean(isOutgoing)})}>
            <Flexbox className={styles.message}>
            <span>{text}</span>
        </Flexbox>
        </div>
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
            <Message name='Valdemar' text='Привет' />
            <Message name='Valdemar' text='Что делаешь? Что делаешь? Что делаешь? Что делаешь? Что делаешь? Что делаешь? Что делаешь? Что делаешь? Что делаешь?' />
            <Message name='Valdemar' text='Есть пару идей' />
            <Message name='Valdemar' text='Привет. Я немного занят' isOutgoing  />
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