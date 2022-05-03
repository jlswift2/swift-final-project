import React, { useEffect, useState } from 'react'
import Friend from './Friend'

function FriendsList({ user }) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/user/${user.id}/follows`)
            .then(resp => resp.json())
            .then(data => setFriends(data))
        }
    }, [user])

    let friend = friends.map(friend => {
        return(<Friend friend={friend} />)
    })

    return (
        <div>
            <h3>Friends List</h3>
            {friend}
        </div>
    )
}

export default FriendsList