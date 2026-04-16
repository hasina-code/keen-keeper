import React, { useEffect, useState } from 'react';
import TimelineItem from '../Components/TimelineItem'; 

const Timeline = () => {
    const [logs, setLogs] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        //console.log("Timeline mounted");

        const savedLogs = sessionStorage.getItem('my_timeline_logs');
        //console.log("Raw session data:", savedLogs);

        if (savedLogs) {
            const parsed = JSON.parse(savedLogs);
           // console.log("Parsed logs:", parsed);

            const sorted = parsed.sort(
                (a, b) => new Date(b.rawDate || b.id) - new Date(a.rawDate || a.id)
            );

           // console.log("Sorted logs:", sorted);

            setLogs(sorted);
        }
    }, []);

    const filteredLogs = filter === 'All'
        ? logs
        : logs.filter(log => log.type === filter);

   // console.log("Current filter:", filter);
   // console.log("Filtered logs:", filteredLogs);

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-10 px-6 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-black text-[#1A3C34] mb-6">
                    Timeline
                </h1>

                <div className="mb-10">
                    <select
                        value={filter}
                        onChange={(e) => {
                            //console.log("Filter changed:", e.target.value);
                            setFilter(e.target.value);
                        }}
                        className="w-64 bg-white px-4 py-3 rounded-xl shadow-sm text-sm"
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {filteredLogs.length > 0 ? (
                        filteredLogs.map((log) => {
                           // console.log("Timeline item:", log);
                            return <TimelineItem key={log.id} log={log} />;
                        })
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border-dashed border-2 text-gray-400">
                            No interactions found <br />
                            Start checking in with your friends!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;