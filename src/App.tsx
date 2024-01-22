import type { DrawerSection } from '@lib/components/ToolboxDrawer.tsx'

import {
    CodeBracketIcon,
    FireIcon,
    PaintBrushIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from '@heroicons/react/16/solid'

import Footer from '@lib/components/layout/Footer.tsx'
import Sidebar from '@lib/components/layout/Sidebar.tsx'
import ScrollRouter from '@lib/components/ScrollRouter.tsx'
import ToolboxDrawer from '@lib/components/ToolboxDrawer.tsx'
import About from './sections/About.tsx'
import Faq from './sections/Faq.tsx'
import Home from './sections/Home.tsx'

function App() {
    // todo: fakenamegenerator.com, ublock origin, sponsor block, 10 minute mail, boredbutton
    // ! THIS IS TEMPORARY, I WILL BE MOVING THIS TO MONGO
    const sections: DrawerSection[] = [
        {
            id: 'development_tools',
            title: 'Development Tools',
            icon: CodeBracketIcon,
            description:
                'A collection of tools and resources for software development, coding, and programming.',
            links: [
                {
                    title: 'localhost.run',
                    url: 'https://localhost.run/docs/cli',
                    description:
                        'Expose localhost servers to the internet with a single command.',
                },
                {
                    title: 'Webhook.site',
                    url: 'https://webhook.site/',
                    description: 'Easily test webhooks and HTTP requests.',
                },
                {
                    title: 'Regex101',
                    url: 'https://regex101.com/',
                    description: 'Test and debug regular expressions.',
                },
                {
                    title: 'tauri',
                    url: 'https://tauri.app/',
                    description:
                        'Build smaller, faster, and more secure desktop applications with a web frontend.',
                },
                {
                    title: 'CyberChef',
                    url: 'https://cyberchef.org/',
                    description:
                        'A web app for encryption, encoding, compression, and data analysis.',
                },
                {
                    title: 'CloudConvert',
                    url: 'https://cloudconvert.com/',
                    description:
                        'Convert between over 200 file formats, including audio, video, and images.',
                },
                {
                    title: 'Caesar Cipher',
                    url: 'https://cryptii.com/pipes/caesar-cipher',
                    description: 'Encode and decode Caesar ciphers.',
                },
                {
                    title: 'Rentry.co',
                    url: 'https://rentry.co/',
                    description: 'A simple no sign-up markdown pastebin.',
                },
                {
                    title: 'CipherFiles',
                    url: 'https://cipherfiles.com/',
                    description:
                        'Encrypt and decrypt files with AES-256 encryption.',
                },

                {
                    title: 'Crontab.guru',
                    url: 'https://crontab.guru/#0_*/12_*_*_*',
                    description: 'A cron schedule expression editor.',
                },
                {
                    title: 'CodeImage',
                    url: 'https://app.codeimage.dev/',
                    description:
                        'A tool to manage and beautify your code screenshots',
                },
                {
                    title: 'Yaak',
                    url: 'https://yaak.app/',
                    description: 'A REST and GraphQL client for macOS.',
                },
                {
                    title: 'Programming Fonts',
                    url: 'https://www.programmingfonts.org/',
                    description: 'A collection of free programming fonts.',
                },
                {
                    title: 'overpass turbo',
                    url: 'https://overpass-turbo.eu/',
                    description:
                        'A web-based data mining tool for OpenStreetMap.',
                },
                {
                    title: 'Hoppscotch',
                    url: 'https://hoppscotch.io/',
                    description:
                        'A free, fast and beautiful API request builder all within your browser.',
                },
            ],
        },
        {
            id: 'graphic_design_tools',
            title: 'Graphic and Design Tools',
            description:
                'Tools for creating, editing, and managing graphics and designs.',
            icon: PaintBrushIcon,
            links: [
                {
                    title: 'TinyWow',
                    url: 'https://tinywow.com/',
                    description: 'Compress images with TinyPNG.',
                },
                {
                    title: 'Web Apps by 123apps',
                    url: 'https://123apps.com/',
                    description: 'A collection of free web apps.',
                },
                {
                    title: 'f0e/blur',
                    url: 'https://github.com/f0e/blur',
                    description:
                        'A tool that uses interpolation to add motion blur to videos.',
                },
                {
                    title: 'Hero Patterns',
                    url: 'https://heropatterns.com/',
                    description:
                        'A collection of free SVG background patterns.',
                },
                {
                    title: 'Color Designer',
                    url: 'https://colordesigner.io/',
                    description: 'A simple color palette generator.',
                },
                {
                    title: 'Shader Gradient',
                    url: 'https://www.shadergradient.co/customize',
                    description: 'Create beautiful CSS gradients.',
                },
                {
                    title: 'ColorMagic',
                    url: 'https://colormagic.app/',
                    description:
                        'Generate color palettes from images using AI.',
                },
                {
                    title: 'CSS Gradient',
                    url: 'https://cssgradient.io/',
                    description: 'A super simple CSS gradient generator.',
                },
            ],
        },
        {
            id: 'privacy_security_tools',
            title: 'Privacy and Security Tools',
            description:
                'Tools and resources for enhancing privacy and security.',
            icon: ShieldCheckIcon,
            links: [
                {
                    title: 'PrivacyTools',
                    url: 'https://www.privacytools.io/',
                    description: 'A collection of privacy tools.',
                },
                {
                    title: 'MegaBlock',
                    url: 'https://megablock.xyz/',
                    description:
                        'Block the tweet owner, retweeter, and likers all with a single click.',
                },
            ],
        },
        {
            id: 'cool',
            title: 'Fun Tools',
            description: 'Fun and interesting tools and resources.',
            icon: FireIcon,
            links: [
                {
                    title: 'Real-Time Corruptor',
                    url: 'https://redscientist.com/rtc',
                    description: 'A tool for creating glitches in video games.',
                },
                {
                    title: 'FMHY',
                    url: 'https://fmhy.pages.dev/',
                    description: 'A collection of piracy sites.',
                },
                {
                    title: 'tldraw',
                    url: 'https://www.tldraw.com/',
                    description: 'A collaborative whiteboard for teams.',
                },
            ],
        },
    ]

    return (
        <ScrollRouter>
            <div className="flex min-h-dvh gap-8">
                <Sidebar />

                <main className="mx-auto flex max-w-4xl flex-col gap-32 px-4 py-24 sm:px-8">
                    <ScrollRouter.Section
                        section={{
                            title: 'Home',
                            id: 'home',
                            icon: SparklesIcon,
                        }}
                    >
                        <Home />
                    </ScrollRouter.Section>

                    {sections.map(section => (
                        <ScrollRouter.Section
                            key={section.id}
                            section={section}
                        >
                            <ToolboxDrawer section={section} />
                        </ScrollRouter.Section>
                    ))}

                    <ScrollRouter.Section
                        section={{
                            id: 'faq',
                            title: 'faq',
                            icon: QuestionMarkCircleIcon,
                            appearance: 'sidebar-alt',
                        }}
                    >
                        <Faq />
                    </ScrollRouter.Section>

                    <ScrollRouter.Section
                        section={{
                            id: 'about',
                            title: 'about',
                            appearance: 'sidebar-alt',
                        }}
                    >
                        <About />
                    </ScrollRouter.Section>
                </main>
            </div>

            <Footer />
        </ScrollRouter>
    )
}

export default App
