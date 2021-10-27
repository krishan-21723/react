import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default NewMeetupPage;
