import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // setIsEditing(true);
        setIsEditing((editing) => !editing);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editablePlayerName = (<input type="text" value={playerName} onChange={handleChange} required></input>);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}