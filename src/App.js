import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';

function App() {

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element:<Maincontainer/>
      },
      {
        path: 'watch',
        element:<Watchpage/>
      }
    ]
  },
])


  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
