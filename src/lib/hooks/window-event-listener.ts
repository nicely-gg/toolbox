import { useEffect } from 'react'

export type HandlerFunction = (
    event: WindowEventMap[keyof WindowEventMap],
) => void

export interface EventEmitter {
    addEventListener(event: string, handler: HandlerFunction): void
    removeEventListener(event: string, handler: HandlerFunction): void
}

export default function useEventListener(
    eventName: keyof WindowEventMap,
    handler: HandlerFunction,
    subject: EventEmitter = window,
) {
    useEffect(() => {
        subject.addEventListener(eventName, handler)
        return () => subject.removeEventListener(eventName, handler)
    }, [eventName, handler, subject])
}
