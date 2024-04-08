import React, { useEffect, useState } from 'react'

interface Channel {
  id: number;
  name: string
}

export default function App() {

  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const getList = async () => {
      console.log('getList.....');
      const response = await fetch('https://tinaxing2012.github.io/jsons/data.json');
      const result = await response.json();
      setChannels(result.data.channels);
    }
    getList();
  }, []);

  return (
    <div>
      <ul>
        {channels.map(channel => <li key={channel.id}>{channel.name}</li>)}
      </ul>
    </div>
  )
}