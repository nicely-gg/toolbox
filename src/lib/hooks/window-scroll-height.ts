import { useState } from 'react'

import useEventListener from './window-event-listener.ts'

export default function useScrollY() {
    const [scrollY, setScrollY] = useState(0)

    function onScroll() {
        setScrollY(window.scrollY)
    }

    useEventListener('scroll', onScroll)

    return scrollY
}
