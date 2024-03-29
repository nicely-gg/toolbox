import GenericHeader from '@lib/components/GenericHeader.tsx'
import { useSection } from '@lib/hooks/scroll-router-context.ts'

export default function About() {
    const section = useSection()

    return (
        <div>
            <GenericHeader
                title="About"
                titleId={section.hash}
                description="Nicely Toolbox is a collection of hand-picked websites that are free and useful."
            />
        </div>
    )
}
