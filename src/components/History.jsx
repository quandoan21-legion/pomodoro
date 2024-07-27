import {db} from "../db/db";
import {useLiveQuery} from "dexie-react-hooks";
import {IsLoginContext} from "../App";
import {useContext} from "react";

function History(props) {

    const userInfo = useContext(IsLoginContext);

    const pomodoroObj = useLiveQuery(() => db.pomodoros.where({userID: userInfo.userID}).toArray())
    const userObj = useLiveQuery(() => db.users.toArray())

    const beautifier = (timeStamp) =>{
        return timeStamp.toString().padStart(2, '0')
    }

    function deleteHistory(historyId){
        alert("You will delete history with ID: "+historyId);
        db.pomodoros.delete(historyId)
    }

    console.log(pomodoroObj)
    console.log(userObj)
    return (
        <ul id={"history-table"}>
                <table id={"history-table"}>
                    <tr>
                        <th>History ID</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Delete History</th>
                    </tr>
            {pomodoroObj?.map((pomodoro) => (
                    <tr>
                        <td>{pomodoro.id}</td>
                        <td>{beautifier(pomodoro.start.getHours())}:{beautifier(pomodoro.start.getMinutes())}:{beautifier(pomodoro.start.getSeconds())}</td>
                        <td>{beautifier(pomodoro.end.getHours())}:{beautifier(pomodoro.end.getMinutes())}:{beautifier(pomodoro.end.getSeconds())}</td>
                        <td><div className={"delete-button"} onClick={() =>{
                            deleteHistory(pomodoro.id)
                        }}>Delete</div></td>
                    </tr>
            ))}
                </table>
        </ul>
    );

}

export default History