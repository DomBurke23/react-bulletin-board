import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
