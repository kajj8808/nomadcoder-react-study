import LikedList from "./components/LikedList";
import VisitedList from "./components/VisitedList";
import WantToVisit from "./components/WantToVisit";

export default function App() {
  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <WantToVisit />
      <h2>내가 가본 나라들</h2>
      <VisitedList />
      <h2>내가 좋아하는 나라들</h2>
      <LikedList />
    </main>
  );
}
