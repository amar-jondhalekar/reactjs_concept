import { useEffect, useState } from "react"

export default function Users(){
    const [usersList, setUsersList] = useState([]);

    const fetchAllUsers = async () => {
        try{
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            if(result?.users){
                setUsersList(result?.users)
            }else{
                setUsersList([]);
            }
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllUsers();
    }, []);
    return <div>
        <h1> All Users Lists </h1>
    </div>
}

