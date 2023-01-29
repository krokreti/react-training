import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-a-great-framework">
                        NextJs Is a Great Framework.
                    </Link>
                </li>
                <li>
                    Something else
                </li>
            </ul>
        </>
    )
}

export default NewsPage;