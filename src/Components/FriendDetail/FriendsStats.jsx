import React from 'react';

const FriendStats = ({ friend }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-3xl font-black text-[#1A3C34]">{friend.days_since_contact}</p>
                <p className="text-[10px] font-bold text-gray-300 uppercase mt-1 tracking-widest">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-3xl font-black text-[#1A3C34]">{friend.goal}</p>
                <p className="text-[10px] font-bold text-gray-300 uppercase mt-1 tracking-widest">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-700">{friend.next_due_date}</p>
                <p className="text-[10px] font-bold text-gray-300 uppercase mt-1 tracking-widest">Next Due Date</p>
            </div>
        </div>
    );
};

export default FriendStats;