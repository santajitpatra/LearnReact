import { RouterProvider, createBrowserRouter,  } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page.jsx";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact.jsx";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes";
import Test from "./pages/test";
import News from "./pages/news";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}