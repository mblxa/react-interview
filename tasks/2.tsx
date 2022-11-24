import React, {useState} from "react";

const selectUsers = () => [];
const selectUserProfile = () => [];

// Check list keys, hooks conditional calls
export const ListOrProfile: React.FC = () => {
    const users = useSelector(selectUsers);
    const [profile, setProfile] = useState(null)

    if (profile) {
        const fullProfile = useSelector(selectUserProfile);
        return (
            <div>
                <h1>{fullProfile.name}</h1>
                <p>{fullProfile.bio}</p>
            </div>
        )
    }

    return (
        <ul>
            {users.map((user, ind) => (
                <li key={ind} onClick={() => setProfile(ind)}>{user.name}</li>
            ))}
        </ul>
    )
}

function useSelector(selectUsers: any) {
    throw new Error("Function not implemented.");
}

