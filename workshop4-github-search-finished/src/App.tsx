import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import User from "./types/user";

export default function App() {
    const [searchResponse, setSearchResponse] = useState<User[]>([]);

    return (
        <div className="container">
            <Search onSetSearchResponse={setSearchResponse} />
            <List searchResponse={searchResponse}/> 
        </div>
    )
}
