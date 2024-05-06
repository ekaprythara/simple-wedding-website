import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/Wrapper";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
