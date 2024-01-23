import GenericHeader from '@lib/components/GenericHeader.tsx'
import { useSection } from '@lib/hooks/scroll-router-context.ts'

export default function Home() {
    const section = useSection()

    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <img
                src={`${import.meta.env.BASE_URL}toolbox.svg`}
                alt="Toolbox Logo"
                className="mb-4 w-64"
            />

            <GenericHeader
                title="Nicely Toolbox"
                titleId={section.hash}
                titleElement="h1"
                description="A collection of hand-picked websites that are free and useful."
            />
        </div>
    )
}
