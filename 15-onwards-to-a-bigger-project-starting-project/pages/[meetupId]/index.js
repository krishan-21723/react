import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="First meetup"
      address="some address, 54321, some city"
      description="first meetup desscription test blh blah"
    ></MeetupDetail>
  );
}

export default MeetupDetails;
