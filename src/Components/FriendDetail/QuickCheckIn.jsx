import React from 'react';
import callIcon from '../../assets/call.png'; 
import textIcon from '../../assets/text.png'; 
import videoIcon from '../../assets/video.png';

const QuickCheckIn = ({ onCheckIn }) => {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-black text-[#1A3C34] mb-8 uppercase tracking-tighter">Quick Check-in</h3>
            <div className="grid grid-cols-3 gap-6">
                {/* Call */}
                <button onClick={() => onCheckIn('Call')} className="flex flex-col items-center p-8 bg-[#F8FAFC] rounded-2xl group hover:bg-[#EFFFF6] transition-all shadow-sm">
                    <img src={callIcon} alt="Call" className="w-10 h-10 mb-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#1A3C34] tracking-widest">Call</span>
                </button>
                {/* Text */}
                <button onClick={() => onCheckIn('Text')} className="flex flex-col items-center p-8 bg-[#F8FAFC] rounded-2xl group hover:bg-blue-50 transition-all shadow-sm">
                    <img src={textIcon} alt="Text" className="w-10 h-10 mb-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-blue-600 tracking-widest">Text</span>
                </button>
                {/* Video */}
                <button onClick={() => onCheckIn('Video')} className="flex flex-col items-center p-8 bg-[#F8FAFC] rounded-2xl group hover:bg-purple-50 transition-all shadow-sm">
                    <img src={videoIcon} alt="Video" className="w-10 h-10 mb-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-purple-600 tracking-widest">Video</span>
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;