import { useEffect, useState } from "react"

export default function Users(){
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);

    const fetchAllUsers = async () => {
        try{
            setPending(false);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            if(result?.users){
                setUsersList(result?.users);
                setPending(false);
            }else{
                setUsersList([]);
            }
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }

    // function handleFetchListOfUsers(){
    //     fetchAllUsers();
    // }

    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);

    console.log(usersList);

    if(pending) return <h1> Fetching users! Please wait </h1>

    return <div>
        <h1> All Users Lists </h1>
        <button onClick={fetchAllUsers}> Fetch Users List </button>
        <ul>
            {
                usersList && usersList.length > 0 ? 
                usersList.map(usersItem => <li key={usersItem?.id}>
                    <p>{usersItem?.firstName} {usersItem?.lastName} </p>

                </li>) : <h1> No users found! Please try again. </h1>
            }
        </ul>
    </div>
}

