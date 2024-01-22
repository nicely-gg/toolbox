import { useContext, useState } from 'react'

import { ChevronDoubleLeftIcon } from '@heroicons/react/16/solid'

import { cn } from '@lib/classes.ts'
import ScrollRouter, {
    ScrollRouterContext,
} from '@lib/components/ScrollRouter.tsx'

export type SidebarProps = {
    onOpenChange?: (isOpen: boolean) => void
}

export default function Sidebar({ onOpenChange }: SidebarProps) {
    const [isOpen, setOpen] = useState(true)
    const { routes, currentRoute } = useContext(ScrollRouterContext)

    // default the appearance to sidebar if not specified
    const routeValues = Object.values(routes).map(route => ({
        ...route,
        appearance: route.appearance ?? 'sidebar',
    }))

    function toggleOpen() {
        const newIsOpen = !isOpen

        setOpen(newIsOpen)
        onOpenChange?.(newIsOpen)
    }

    return (
        <aside
            className={cn(
                'sticky top-0 flex h-dvh max-w-72 flex-shrink-0 flex-col gap-4 bg-zinc-900 py-8 shadow-lg transition-all duration-500',
                !isOpen &&
                    'max-w-0 backdrop-blur-lg delay-500 *:opacity-0 hover:delay-0',
            )}
        >
            <h4 className="text-center text-white">
                <ScrollRouter.Link
                    to=""
                    className="block px-6 font-normal transition-all delay-500 duration-500 hover:font-bold hover:delay-0"
                >
                    toolbox
                </ScrollRouter.Link>
            </h4>

            <hr className="border-zinc-800" />

            <div className="flex-1">
                {routeValues
                    .filter(({ appearance }) => appearance === 'sidebar')
                    .map(({ id, title, icon: Icon }) => (
                        <ScrollRouter.Link
                            to={id}
                            key={id}
                            className={cn(
                                'flex items-center gap-2 whitespace-nowrap px-6 py-2 transition-all duration-500 hover:bg-zinc-800',
                                currentRoute === id &&
                                    'my-1 cursor-default bg-zinc-800  py-3 font-semibold text-white',
                            )}
                        >
                            {Icon && <Icon className="w-6 flex-shrink-0" />}
                            {title ?? id}
                        </ScrollRouter.Link>
                    ))}
            </div>

            <hr className="mt-auto border-zinc-800" />

            <div className="mx-auto flex flex-wrap justify-center gap-2 px-6 leading-[1] text-zinc-400">
                {routeValues
                    .filter(({ appearance }) => appearance === 'sidebar-alt')
                    .map(({ id, title }) => (
                        <ScrollRouter.Link
                            key={id}
                            to={id}
                        >
                            {title ?? id}
                        </ScrollRouter.Link>
                    ))}
            </div>

            <button
                onClick={toggleOpen}
                className={cn(
                    'absolute right-0 translate-x-1/2 rounded-full bg-zinc-800 p-1 !opacity-100 shadow-lg transition-all duration-500',
                    !isOpen && '-right-2 translate-x-full',
                )}
            >
                <ChevronDoubleLeftIcon
                    width="24px"
                    className={cn(
                        'transition duration-500',
                        !isOpen && 'rotate-180',
                    )}
                />
            </button>
        </aside>
    )
}
