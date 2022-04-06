import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findAllTuits}
    from "../../../actions/tuits-actions";


import TuitListItem from "./tuit-list-item";



const TuitList = () => {

    const selectAllTuits = (state) => state.tuits.tuits;
    const tuits = useSelector(selectAllTuits);

    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch));



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