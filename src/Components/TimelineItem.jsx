import React from 'react';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const TimelineItem = ({ log }) => {
    
    const getLogImage = (type) => {
        if (type === 'Call') return <img src={callIcon} alt="Call" />;
        if (type === 'Text') return <img src={textIcon} alt="Text" />;
        if (type === 'Video') return <img src={videoIcon} alt="Video" />;
    };

    return (
        <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition">
            <div>
                {getLogImage(log.type)}
            </div>
            
            <div>
                <h4 className="text-sm">
                    <span className="font-bold text-[#1A3C34]">
                        {log.type}
                    </span>{" "}
                    with {log.friendName}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                    {log.date}
                </p>
            </div>
        </div>
    );
};

export default TimelineItem;