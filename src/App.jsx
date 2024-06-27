import { About, Contact, Home } from "./pages"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  }
]);

function App() {

  return (
    <main className="px-10 md:px-32 py-5 md:py-10 h-screen scroll-smooth">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
