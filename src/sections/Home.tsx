import ScrollRouter from '@lib/components/ScrollRouter.tsx'

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <img
                src={`${import.meta.env.BASE_URL}toolbox.svg`}
                alt="Toolbox Logo"
                className="mb-4 w-64"
            />

            <ScrollRouter.Link to="home">
                <h1 className="mb-2">Nicely Toolbox</h1>
            </ScrollRouter.Link>

            <p className="text-lg">
                A collection of hand-picked websites that are{' '}
                <b className="text-white">free and useful</b>.
            </p>
        </div>
    )
}
