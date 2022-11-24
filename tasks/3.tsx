import React, {useState} from "react";

// Check memoization for map and Header onChange
export const UsersList: React.FC = ({users, likes}) => {
    const [visible, setIsVisible] = useState(false)

    const ListItem = ({name}) => <li>{name}</li>

    const usersWithLikes = users.map(user => ({
        ...user,
        likes: likes.find(like => like.user_id === user.id).count
    }))

    return (
        <div>
            <Header onChange={() => setIsVisible(!visible)}/>
            <List>
                {usersWithLikes.map(user => <ListItem name={user.name}/>)}
            </List>
        </div>
    )
}
