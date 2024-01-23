import GenericHeader from '@lib/components/GenericHeader.tsx'
import { useSection } from '@lib/hooks/scroll-router-context.ts'

export default function SiteRequest() {
    const section = useSection()

    return (
        <div>
            <GenericHeader
                title="Request a Site"
                titleId={section.hash}
                description="If you have a site that you think would be a good fit for
                Toolbox, please send an email."
            />
        </div>
    )
}
