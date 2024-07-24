import React, { useState } from "react";
import { db } from "../db/db";
import {useLiveQuery} from "dexie-react-hooks";

function Student({ defaultAge } = { defaultAge: 21 }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(defaultAge);
    const [status, setStatus] = useState("");

    const StudentList = () => {
        const students = useLiveQuery(() => db.students.toArray());
        console.log(students)
        const updateStudent  = async (data)=>{
            await db.students.put({id:data.id , name:"your name 😂😂" , age:20})
            alert("updated your database with static data ")
        }

        const clearAll =()=>{
            db.delete().then(() => {
                alert(" database deleted ")
            }).catch((err) => {
                console.error("Could not delete database" , err);
                alert("Could not delete database")
            }).finally(() => {
                // Do what should be done next...
            })
        }
        return (
            <ul>
                <button disabled={students?.length===0} onClick={clearAll}>Delete data base </button>
                {students?.map((student) => (

                    <li key={student.id}>
                        {student.name} {student.age}<button className="" onClick={()=>updateStudent(student)}>Edit {student.id}</button>
                    </li>
                ))}

            </ul>
        );
    };

    async function addStudent() {
        var id;
        try {
            if (name && age) {
                id = await db.students.add({
                    name,
                    age,
                });
            } else {
                alert(" provide name and age field of student ");
            }
            setStatus(`Student ${name} successfully added. Got id ${id}`);
            setName("");
            setAge(defaultAge);
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    return (
        <React.Fragment>
            <h1> Add stduent </h1>
            <p>{status}</p>
            Name:
            <input
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
            Age:
            <input
                type="number"
                value={age}
                onChange={(ev) => setAge(Number(ev.target.value))}
            />
            <button onClick={addStudent}>Add</button>
            <div className="">
                <h1>Student listing </h1>
                <div className="">
                    <StudentList />
                </div>
            </div>
        </React.Fragment>
    );
}

// Student.jsx
export default Student