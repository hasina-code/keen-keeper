import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
    if (!friend) return null;

    const getStatusStyles = (status) => {
        const normalized = status?.toLowerCase().trim();

        switch (normalized) {
            case 'overdue':
                return 'bg-[#F24E1E] text-white';
            case 'almost due':
                return 'bg-[#E2A54B] text-white';
            case 'on-track':
                return 'bg-[#1A3C34] text-white';
            default:
                return 'bg-gray-200 text-gray-600';
        }
    };

    return (
        <Link 
            to={`/friend/${friend.id}`} 
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
        >
            <img 
                src={friend.picture} 
                alt={friend.name || "Friend avatar"}
                className="w-20 h-20 rounded-full object-cover mb-5" 
            />

            <h3 className="font-black text-xl text-[#1A3C34] tracking-tight">
                {friend.name}
            </h3>

            <p className="text-[11px] font-bold text-gray-400 uppercase mt-1">
                {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 my-5">
                {friend.tags?.map((tag, index) => (
                    <span 
                        key={`${tag}-${index}`} 
                        className="bg-[#EFFFF6] text-[#244D3F] text-[9px] px-4 py-1.5 rounded-full font-black uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`px-7 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] ${getStatusStyles(friend.status)}`}>
                {friend.status}
            </div>
        </Link>
    );
};

export default FriendCard;