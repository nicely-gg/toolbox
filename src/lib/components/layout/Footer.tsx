export default function Footer() {
    return (
        <footer className="bg-black px-32 py-16">
            <h5 className="text-center">
                Copyright {new Date().getFullYear()} &copy;{' '}
                <a
                    href="https://nicely.gg/"
                    target="_blank"
                    rel="noreferrer"
                >
                    nicely.gg
                </a>
            </h5>
        </footer>
    )
}
