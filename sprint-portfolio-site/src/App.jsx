import React from "react";

import createAppRouter from "./routes/createAppRouter";
import { RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createAppRouter();

  return <RouterProvider router={appRouter} />;
}

export default App;
