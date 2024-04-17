import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function News() {
    const [news, setNews] = useState([
        { id: 1, title: 'Breaking news', content: 'No class on Weekend(Saturday)' },
        { id: 2, title: 'Shocking news', content: 'Chicken in An....' },
        { id: 3, title: 'Surprising news', content: 'Free~~~~' }
    ])

    return (
        <div>
            <ul>
                {news.map(({ id, title, content }) => <li key={id}>
                    <Link to={`detail?id=${id}&title=${title}&content=${content}`}>{title}</Link>
                </li>)}
            </ul>
            <Outlet />
        </div>
    )
}
