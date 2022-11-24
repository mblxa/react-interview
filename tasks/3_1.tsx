import React, {useState} from "react";

// Check memoization for filter

const ListItem = ({name}) => <li>{name}</li>

export const UsersList: React.FC = ({users, filter}) => {
    const filteredUsers = users.filter(user => user.id === filter.id);

    return (
        <List>
            {filteredUsers.map(user => <ListItem name={user.name}/>)}
        </List>
    )
}
