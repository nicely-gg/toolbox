import type { ScrollSection } from './ScrollRouter.tsx'

import { LinkIcon } from '@heroicons/react/16/solid'

import GenericHeader from './GenericHeader.tsx'

export type Link = {
    title: string
    description?: string
    url: string
}

export type DrawerSection = ScrollSection & {
    description?: string
    links?: Link[]
}

export type DrawerProps = {
    section: DrawerSection
}

export default function ToolboxDrawer({ section }: DrawerProps) {
    return (
        <div>
            <GenericHeader
                icon={section.icon}
                title={section.title ?? section.hash}
                titleId={section.hash}
                description={section.description}
                className="mb-4"
            />

            <div className="flex flex-col gap-4">
                {section.links?.map(link => (
                    <DrawerLink
                        key={link.url}
                        link={link}
                    />
                ))}
            </div>
        </div>
    )
}

export type DrawerLinkProps = {
    link: Link
}

export function DrawerLink({ link }: DrawerLinkProps) {
    return (
        <a
            className="flex flex-col gap-1 rounded-lg bg-zinc-900 p-8 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            href={link.url}
            target="_blank"
            rel="noreferrer"
        >
            <span className="inline-flex items-center gap-2 text-xl font-bold">
                <img
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link.url}`}
                    alt={link.title + ' favicon'}
                    className="w-4"
                />
                {link.title}
                <LinkIcon className="w-6" />
            </span>

            <span className="font-thin">{link.description}</span>
        </a>
    )
}
