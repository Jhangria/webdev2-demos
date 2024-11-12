"use client";

import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
    const {user} = useUserAuth();

    if (!user) {
        return (
            <div>
            <h1>Week 9</h1>
            <p>This is a secure page.</p>
            <p>You must be logged in to view this page.</p>
            </div>
        );
    }
    return (
        <div>
        <h1>Week 9</h1>
        <p>This is a secure page.Welcome.</p>
        </div>
    );
}