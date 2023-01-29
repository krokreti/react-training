import { useRouter } from 'next/router';

const SomethingImportant = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    return (<div>
        <h1>Something nested!</h1>
        <h2>{newsId}</h2>
    </div>)
}

export default SomethingImportant;