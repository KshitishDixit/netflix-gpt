import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/slices/userSlice";
import Header from "./Header";
const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        { path: "/browse", element: <Browse /> },
        {
            path: "/",
            element: <Login />,
        },
    ]);

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                const { uid, email, displayName } = user
                dispatch(addUser({ uid, email, displayName }))
            } else {
                dispatch(removeUser())
            }
        })
    }, [])
    return (
        <div>

            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
