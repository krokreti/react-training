import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        address: 'Some Address 5, 12345, Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
        address: 'Some Address 3, 12345, Some City',
        description: 'This is a second meetup!',
    }
]

const HomePage = (props) => {
    return (<MeetupList meetups={props.meetups} />)
}

export const getStaticProps = async () => {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10
    }
}

// export const getServerSideProps = async() => {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;