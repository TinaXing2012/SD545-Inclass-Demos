import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Messages() {
    const [messages, setMessages] = useState([
        { id: 1, title: 'Breaking news', content: 'No class tomorrow!' },
        { id: 2, title: 'Shocking news', content: 'Everyone get A!' },
        { id: 3, title: 'Surprising news', content: 'You got google offer!' }
    ]);

    return (
        <div>
            <ul>
                {messages.map(({id, title, content}) => <li>
                    <Link to={`detail/${id}/${title}/${content}`}>{title}</Link>
                </li>)}
            </ul>
            <Outlet />       
        </div>
    )
}
