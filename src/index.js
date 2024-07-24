import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './utils/redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContent from './Components/MainContent';
import VideoWatchPage from './Components/VideoContainer/VideoWatchPage';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: <h3>This URL doesn't exist</h3>,
        children: [
            {
                path: '/',
                element: <MainContent />,
            },
            {
                path: 'watch',
                element: <VideoWatchPage />,
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
