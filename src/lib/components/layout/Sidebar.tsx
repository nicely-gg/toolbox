import { useCallback, useEffect, useState } from 'react'

import { ChevronDoubleLeftIcon } from '@heroicons/react/16/solid'

import { cn } from '@lib/classes.ts'
import ScrollRouter from '@lib/components/ScrollRouter.tsx'
import { useScrollRouter } from '@lib/hooks/scroll-router-context.ts'

export type SidebarProps = {
    className?: string
    onOpenChange?: (isOpen: boolean) => void
}

export default function Sidebar({ onOpenChange, className }: SidebarProps) {
    const [isOpen, setOpen] = useState(false)
    const { routes, currentRoute } = useScrollRouter()

    // default the appearance to sidebar if not specified
    const routeValues = Object.values(routes).map(route => ({
        ...route,
        appearance: route.appearance ?? 'sidebar',
    }))

    const toggleOpen = useCallback(() => {
        const newIsOpen = !isOpen

        setOpen(newIsOpen)
        onOpenChange?.(newIsOpen)
    }, [isOpen, onOpenChange])

    useEffect(() => {
        if (!isOpen) {
            return
        }

        // set focus to the first link in the sidebar
        const firstLink = document.querySelector('aside a') as HTMLElement
        firstLink?.focus()

        function handleKeydown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                toggleOpen()
            }
        }

        function handleClick(event: MouseEvent) {
            // close the sidebar if the user clicks outside of it
            // or if they click on a link
            if (
                event.target instanceof HTMLElement &&
                (event.target.closest('aside') === null ||
                    event.target.closest('a') !== null)
            ) {
                toggleOpen()
            }
        }

        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('click', handleClick)
        }
    }, [isOpen, toggleOpen])

    return (
        <aside
            className={cn(
                'fixed top-0 z-50 flex h-dvh w-full max-w-full flex-col gap-4 bg-zinc-900 py-8 shadow-xl transition-all duration-500 sm:max-w-72',
                // wouldn't it be cool? (it works, but it creates another animation problem)
                // has-[button:hover]:translate-x-[calc(-100%_+_theme(spacing.2))]
                !isOpen && '-translate-x-full',
                className,
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
                    .map(({ hash: id, title, icon: Icon }) => (
                        <ScrollRouter.Link
                            to={id}
                            key={id}
                            className={cn(
                                'flex items-center gap-2 whitespace-nowrap px-6 py-2 transition-all duration-500 hover:bg-zinc-800',
                                currentRoute === id &&
                                    'cursor-default bg-zinc-800 py-3 font-semibold text-white',
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
                    .map(({ hash: id, title }) => (
                        <ScrollRouter.Link
                            key={id}
                            to={id}
                        >
                            {title ?? id}
                        </ScrollRouter.Link>
                    ))}
            </div>

            <button
                aria-label="Toggle Sidebar"
                title="Toggle Sidebar"
                onClick={toggleOpen}
                className={cn(
                    'absolute top-4 rounded-full bg-zinc-800 p-1 shadow-lg transition-all duration-500',
                    isOpen
                        ? 'right-4 sm:right-0 sm:translate-x-1/2'
                        : '-right-4 translate-x-full',
                )}
            >
                <ChevronDoubleLeftIcon
                    className={cn(
                        'w-6 transition duration-500',
                        !isOpen && 'rotate-180',
                    )}
                />
            </button>
        </aside>
    )
}
