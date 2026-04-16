import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
     
        const savedLogs = JSON.parse(sessionStorage.getItem('my_timeline_logs') || '[]');
        
     
        const counts = savedLogs.reduce((acc, log) => {
            acc[log.type] = (acc[log.type] || 0) + 1;
            return acc;
        }, {});

        const chartData = [
            { name: 'Call', value: counts['Call'] || 0 },
            { name: 'Text', value: counts['Text'] || 0 },
            { name: 'Video', value: counts['Video'] || 0 },
        ];
        setData(chartData);
    }, []);


    const COLORS = ['#1A3C34', '#4ADE80', '#A855F7'];

    return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 px-6 lg:px-20">
   <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-[#1A3C34] mb-10">Friendship Analytics</h1>
                
        <div className="bg-white p-10 rounded-[20px] border border-gray-100 shadow-sm flex flex-col items-center"> 
        <h3 className="text-sm font-bold text-gray-800 self-start mb-10">By Interaction Type</h3>
                    
       <div style={{ width: '100%', height: 350 }}>
       <ResponsiveContainer> 
        <PieChart>           
         <Pie
         data={data}
        cx="50%" cy="50%"
        innerRadius={80}
        outerRadius={120}
        paddingAngle={8}
        dataKey="value"
       >
     {data.map((entry, index) => (
     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
    </Pie>
    <Tooltip cornerRadius={10} />
    <Legend verticalAlign="bottom" height={36}/>
    </PieChart>
    </ResponsiveContainer>
       </div>
       </div>
       </div> 
  </div>
    );
};

export default Stats;