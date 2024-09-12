import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bills from "./pages/Bills/Bills";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import FieldInformation from "./pages/FieldInformation/FieldInformation";
import Payments from "./pages/Payments/Payments";
import Tractors from "./pages/Tractor/Tractors";
import LaborPage from "./pages/Labor/LaborPage";
import BottamBarPage from "./pages/BottamBarPage/BottamBarPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "bills",
          element: <Bills />,
        },
        {
          path: "homepage",
          element: <HomePage />,
        },
        {
          path: "bottambar",
          element: <BottamBarPage />,
        },
        {
          path: "fieldinformation",
          element: <FieldInformation />,
        },
        {
          path: "labor",
          element: <LaborPage />,
        },
        {
          path: "payments",
          element: <Payments />,
        },
        {
          path: "tractors",
          element: <Tractors />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
