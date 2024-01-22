import type { ScrollSection } from './ScrollRouter.tsx'

import { LinkIcon } from '@heroicons/react/16/solid'

import ScrollRouter from './ScrollRouter.tsx'

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
            <ScrollRouter.Link to={section.id}>
                <h3 className="flex items-center gap-2">
                    {section.icon && <section.icon className="w-12" />}
                    {section.title}
                </h3>
            </ScrollRouter.Link>

            <p className="mb-4 font-thin">{section.description}</p>

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
            className="flex flex-col gap-1 rounded-lg bg-zinc-900 p-8"
            href={link.url}
            target="_blank"
            rel="noreferrer"
        >
            <span className="inline-flex items-center gap-2 text-lg font-bold">
                <img
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link.url}`}
                    className="inline w-4"
                />
                {link.title}
                <LinkIcon
                    width="24px"
                    className="inline"
                />
            </span>
            <span className="font-thin">{link.description}</span>
        </a>
    )
}
