import React, { useEffect, useState } from 'react';
import FriendCard from '../Components/ui/FriendCard';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       // console.log("Component mounted");

        fetch('/friends.json')
            .then(res => {
             //console.log("Response object:", res);
                return res.json();
            })
            .then(data => {
               // console.log("Friends data received:", data);

                setFriends(data);

               // console.log("State friends");

                setTimeout(() => {
                    setLoading(false);
                  //  console.log("Loading finished");
                }, 800);
            })
            .catch(err => {
                console.error("Error fetching friends:", err);
            });
    }, []);

    if (loading) return (
        <div className="flex flex-col items-center justify-center py-40">
            <div className="w-12 h-12 border-4 border-[#1A3C34] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[20px] font-black uppercase text-[#1A3C34]">
                Loading Friends...
            </p>
        </div>
    );

    return (
        <section className="bg-[#F8FAFC] min-h-screen container mx-auto px-6 lg:px-20 py-16">
            <h2 className="text-2xl font-black text-[#1A3C34] mb-10">
                Your Friends
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {friends.map(friend => {
                   // console.log("Friend item:", friend);
                    return <FriendCard key={friend.id} friend={friend} />;
                })}
            </div>
        </section>
    );
};

export default Friends;