import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"}
            title={"First meetup"}
            address={"Some street, some city"}
            description={"This is a first meetup"} />
    );
}

export default MeetupDetails;