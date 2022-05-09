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
        <div className="w-1/2 m-auto">
            <h3 className="font-serif mb-6 text-xl md:text-4xl uppercase font-bold flex justify-center">Friends List</h3>
            <div className="grid grid-cols-3 gap-4 place-items-center">
                {friend}
            </div>
        </div>
    )
}

export default FriendsList