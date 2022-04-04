import React from "react";
import { useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";

const TuitList = () => {

    const selectAllTuits = (state) => state.tuits.tuits;
    const tuits = useSelector(selectAllTuits);

    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem tuit={tuit} />
                )
            }
        </ul>
    )
};

export default TuitList;