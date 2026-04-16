import React from 'react';
import { BellOff, Archive, Trash2 } from 'lucide-react';

const FriendInfoCard = ({ friend }) => {
    return (
        <div className="space-y-4">
            <div className="bg-white p-8 rounded-[40px] shadow-sm text-center">
                <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md" alt={friend.name} />
                <h2 className="text-2xl font-black text-[#1A3C34]">{friend.name}</h2>
                <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase my-3 text-white ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-[#1A3C34]'}`}>
                    {friend.status}
                </div>
                <p className="text-gray-500 text-sm italic mb-6">"{friend.bio}"</p>
                <div className="border-t pt-4 text-xs font-bold text-blue-500">{friend.email}</div>
            </div>

            <div className="flex flex-col gap-2">
                <button className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
                    <BellOff size={14}/> Snooze 2 Weeks
                </button>
                <button className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
                    <Archive size={14}/> Archive 
                </button>
                <button className="flex items-center justify-center gap-2 py-4 bg-red-50 text-red-500 rounded-2xl text-xs font-bold hover:bg-red-100 transition-all shadow-sm">
                    <Trash2 size={14}/> Delete 
                </button>
            </div>
        </div>
    );
};

export default FriendInfoCard;