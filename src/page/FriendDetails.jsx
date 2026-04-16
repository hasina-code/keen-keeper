import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Edit2 } from 'lucide-react';




import FriendInfoCard from '../Components/FriendDetail/FriendInfoCard';
import FriendStats from '../Components/FriendDetail/FriendsStats';
import QuickCheckIn from '../Components/FriendDetail/QuickCheckIn';


const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(f => f.id == id);
                setFriend(found);
            });
    }, [id]);

    const handleCheckIn = (type) => {
        if (!friend) return;
        const today = new Date().toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric',
        });

        const newEntry = {
            id: Date.now(),
            friendName: friend.name,
            friendImage: friend.picture,
            type: type,
            date: today,
            rawDate: new Date().toISOString()
        };

        const savedLogs = sessionStorage.getItem('my_timeline_logs');
        const existingHistory = savedLogs ? JSON.parse(savedLogs) : [];
        const updatedHistory = [newEntry, ...existingHistory];
        sessionStorage.setItem('my_timeline_logs', JSON.stringify(updatedHistory));

        toast.success(`${type} completed with ${friend.name}!`);
    };

    if (!friend) return <div className="p-20 text-center font-bold">Loading...</div>;

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-10 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                    <FriendInfoCard friend={friend} />
                </div>
               
                <div className="lg:col-span-8 space-y-6">
                    <FriendStats friend={friend} />
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;