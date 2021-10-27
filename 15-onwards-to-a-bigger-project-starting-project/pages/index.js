import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a First meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 6, 54321, Some City",
    description: "This is a Second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
