import type { DrawerSection } from '@lib/components/ToolboxDrawer.tsx'

import { useEffect, useState } from 'react'

import { SparklesIcon } from '@heroicons/react/16/solid'

import Footer from '@lib/components/layout/Footer.tsx'
import Sidebar from '@lib/components/layout/Sidebar.tsx'
import ScrollRouter from '@lib/components/ScrollRouter.tsx'
import ToolboxDrawer from '@lib/components/ToolboxDrawer.tsx'
import About from './sections/About.tsx'
import Faq from './sections/Faq.tsx'
import Home from './sections/Home.tsx'
import SiteRequest from './sections/SiteRequest.tsx'

export default function App() {
    return (
        <ScrollRouter>
            <Sidebar />

            <main className="mx-auto flex max-w-4xl flex-col gap-32 px-4 py-24 sm:px-8">
                <ScrollRouter.Section
                    section={{
                        title: 'Home',
                        hash: 'home',
                        icon: SparklesIcon,
                    }}
                >
                    <Home />
                </ScrollRouter.Section>

                <DrawerRouterSections />

                <ScrollRouter.Section
                    section={{
                        hash: 'site_request',
                        title: 'submissions',
                        appearance: 'sidebar-alt',
                    }}
                >
                    <SiteRequest />
                </ScrollRouter.Section>

                <ScrollRouter.Section
                    section={{
                        hash: 'faq',
                        title: 'faq',
                        appearance: 'sidebar-alt',
                    }}
                >
                    <Faq />
                </ScrollRouter.Section>

                <ScrollRouter.Section
                    section={{
                        hash: 'about',
                        title: 'about',
                        appearance: 'sidebar-alt',
                    }}
                >
                    <About />
                </ScrollRouter.Section>
            </main>

            <Footer />
        </ScrollRouter>
    )
}

function DrawerRouterSections() {
    const [sections, setSections] = useState<DrawerSection[]>([])

    useEffect(() => {
        const controller = new AbortController()

        fetch('/api/drawers', { signal: controller.signal })
            .then(r => r.json())
            .then(setSections)
            .catch(err => {
                console.error('Failed to fetch drawer sections:', err)
            })

        return () => controller.abort()
    }, [])

    return sections.map(section => (
        <ScrollRouter.Section
            key={section.hash}
            section={section}
        >
            <ToolboxDrawer section={section} />
        </ScrollRouter.Section>
    ))
}
