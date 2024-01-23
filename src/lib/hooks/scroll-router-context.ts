import { useContext } from 'react'

import {
    ScrollRouterContext,
    SectionContext,
} from '@lib/components/ScrollRouter.tsx'

export function useScrollRouter() {
    const scrollRouter = useContext(ScrollRouterContext)

    if (scrollRouter === null) {
        throw Error('useScrollRouter must be used within a ScrollRouterContext')
    }

    return scrollRouter
}

export function useSection() {
    const section = useContext(SectionContext)

    if (section === null) {
        throw Error('useSection must be used within a ScrollRouter.Section')
    }

    return section
}
