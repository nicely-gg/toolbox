import type { ComponentType, ReactNode } from 'react'

import {
    createContext,
    useCallback,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react'

import { useScrollRouter } from '@lib/hooks/scroll-router-context.ts'
import useScrollY from '../hooks/window-scroll-height.ts'

export type ScrollSection = {
    hash: string

    title?: string
    icon?: ComponentType<{ className?: string }>

    appearance?: 'sidebar' | 'sidebar-alt' | 'footer'
}

export type RouteIdMap = { [id: string]: ScrollSection & { ref: HTMLElement } }

type ScrollRouterContext = {
    currentRoute: string | null
    routes: RouteIdMap

    registerRoute: (route: ScrollSection, ref: HTMLElement | null) => void
}

export const ScrollRouterContext = createContext<ScrollRouterContext>({
    currentRoute: null,
    routes: {},
    registerRoute() {
        throw Error('ScrollRouterContext not initialized')
    },
})

export type ScrollRouterProps = {
    children?: ReactNode
}

export default function ScrollRouter({ children }: ScrollRouterProps) {
    const scrollY = useScrollY()

    const [currentRoute, setCurrentRoute] = useState<string | null>(null)
    const [routes, setRoutes] = useState<RouteIdMap>({})

    const registerRoute = useCallback(
        (route: ScrollSection, ref: HTMLElement | null) => {
            // check if the route is already registered to avoid accidental recursion
            if (ref === null || route.hash in routes) {
                return
            }

            setRoutes(prev => ({
                ...prev,
                [route.hash]: { ...route, ref },
            }))
        },
        [routes],
    )

    // when the scroll position changes, find the route that is currently
    // in view and update the currentRoute state
    useLayoutEffect(() => {
        // sort the routes by their distance from the current scroll position
        // and get the first one
        const closestRoutes = Object.values(routes)
            .sort(
                (a, b) =>
                    Math.abs(a.ref.offsetTop - scrollY) -
                    Math.abs(b.ref.offsetTop - scrollY),
            )
            // filter out routes that are below the current scroll position (and then some)
            .filter(route => route.ref.offsetTop <= scrollY + 128)

        const newRoute = closestRoutes[0]

        // if the route is the same as the current route, do nothing
        if (!newRoute || newRoute.hash === currentRoute) {
            return
        }

        window.history.replaceState(null, '', '#' + newRoute.hash)
        setCurrentRoute(newRoute.hash)
    }, [currentRoute, routes, scrollY])

    const context = useMemo(
        () => ({ currentRoute, routes, registerRoute }),
        [currentRoute, routes, registerRoute],
    )

    return (
        <ScrollRouterContext.Provider value={context}>
            {children}
        </ScrollRouterContext.Provider>
    )
}

export const SectionContext = createContext<ScrollSection | null>(null)

export type ScrollSectionProps = {
    children?: ReactNode
    section: ScrollSection
} & JSX.IntrinsicElements['section']

function Section({ children, section, ...restProps }: ScrollSectionProps) {
    const scrollContext = useScrollRouter()

    return (
        <SectionContext.Provider value={section}>
            <section
                {...restProps}
                className="flex flex-col gap-4"
                ref={ref => scrollContext.registerRoute(section, ref)}
                id={section.hash}
            >
                {children}
            </section>
        </SectionContext.Provider>
    )
}

ScrollRouter.Section = Section

export type ScrollRouteLinkProps = {
    to: string
    children?: ReactNode
} & JSX.IntrinsicElements['a']

function ScrollRouteLink({ to, children, ...restProps }: ScrollRouteLinkProps) {
    return (
        <a
            {...restProps}
            href={'#' + to}
            onClick={e => {
                e.preventDefault()

                window.scrollTo({
                    // 64 is a nice offset for visual purposes
                    top: (document.getElementById(to)?.offsetTop ?? 0) - 32,
                    behavior: 'smooth',
                })

                // ? we do not change the URL since that is handled
                // ? by the ScrollRouter component
            }}
        >
            {children}
        </a>
    )
}

ScrollRouter.Link = ScrollRouteLink
