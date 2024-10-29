import HomePage from "./pages/homepage/homepage";
import { Header } from "./pages/header/Header";
import { Route, Routes, Link } from "react-router-dom";
const hatsPages = (props) => (
  <div>
    <h1>hats page</h1>
    <Link to="/">homepage</Link>
    <br />
    <Link to="/topics">topics</Link>
    {console.log(props)}
    <hr />
    <button>topics</button>
  </div>
);
const Home = (props) => {
  console.log("this is property", props);
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};
const TopicsList = () => (
  <div>
    <h1>Topics list page</h1>
  </div>
);
const TopicDetail = () => (
  <div>
    <h1>Topic detail page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/hats" Component={hatsPages} />
        <Route path="/topics" Component={TopicsList} />
        <Route path="/tpics/:topicId" Component={TopicDetail} />
      </Routes>
    </div>
  );
}
export default App;
