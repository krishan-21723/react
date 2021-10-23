import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "krishan", text: "learning react is fun" },
  { id: "q2", author: "pratik", text: "learning react is not fun" },
  { id: "q3", author: "sahil", text: "learning react is kinda fun" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
