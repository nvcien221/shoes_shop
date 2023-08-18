/** set-up routing */
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/** set-up redux */

// App để config dự án
export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
