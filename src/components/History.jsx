import {db} from "../db/db";
import {useLiveQuery} from "dexie-react-hooks";

function History(props) {

    const pomodoroObj = useLiveQuery(() => db.pomodoros.toArray())
    const userObj = useLiveQuery(() => db.users.toArray())

    const beautifier = (timeStamp) =>{
        return timeStamp.toString().padStart(2, '0')
    }

    console.log(pomodoroObj)
    console.log(userObj)
    return (
        <ul>
                <table id={"history-table"}>
                    <tr>
                        <th>UserID</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
            {pomodoroObj?.map((pomodoro) => (
                    <tr>
                        <td>{pomodoro.userID}</td>
                        <td>{beautifier(pomodoro.start.getHours())}:{beautifier(pomodoro.start.getMinutes())}:{beautifier(pomodoro.start.getSeconds())}</td>
                        <td>{beautifier(pomodoro.end.getHours())}:{beautifier(pomodoro.end.getMinutes())}:{beautifier(pomodoro.end.getSeconds())}</td>
                    </tr>
            ))}
                </table>
        </ul>
    );

}

export default History