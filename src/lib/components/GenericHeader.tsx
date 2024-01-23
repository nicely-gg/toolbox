import type { ComponentType, ElementType } from 'react'

import { cn } from '@lib/classes.ts'
import ScrollRouter from './ScrollRouter.tsx'

export type GenericHeaderProps = {
    icon?: ComponentType<{ className?: string }>

    title: string

    titleElement?: ElementType<{ className?: string }>
    titleId?: string

    description?: string

    className?: string
} & JSX.IntrinsicElements['header']

export default function GenericHeader({
    icon: Icon,
    title,
    titleElement: TitleElement = 'h3',
    titleId,
    description,
    className,
    ...restProps
}: GenericHeaderProps) {
    const titleElement = (
        <TitleElement className="inline-flex items-center gap-2">
            {Icon && <Icon className="w-12" />}
            {title}
        </TitleElement>
    )

    return (
        <header
            {...restProps}
            className={cn('flex flex-col gap-2', className)}
        >
            {titleId ? (
                <ScrollRouter.Link to={titleId}>
                    {titleElement}
                </ScrollRouter.Link>
            ) : (
                titleElement
            )}

            {description && <p className="text-lg">{description}</p>}
        </header>
    )
}
