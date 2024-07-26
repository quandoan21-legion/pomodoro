import {useState, useEffect} from 'react'
import {db} from "../db/db";
import {useLiveQuery} from "dexie-react-hooks";

function Settings() {
        const friends = useLiveQuery(() => db.users.toArray());

        return (
            <ul>
                {friends?.map((friend) => (
                    <li key={friend.id}>
                        {friend.name}, {friend.age}
                    </li>
                ))}
            </ul>
        );
    }
export default Settings