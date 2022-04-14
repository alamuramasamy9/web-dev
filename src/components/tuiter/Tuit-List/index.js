/*import React, {useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits} from "../../../actions/tuits-actions"


import * as service
  from '../../../services/tuits-services';

const TuitList = () => {

    //const selectAllTuits = (state) => state.tuits.tuits;
    const tuits = useSelector(state => state.tuits);
   const dispatch = useDispatch();
//     const findAllTuits = async () => {
//       const tuits = await service.findAllTuits();
//       dispatch({
//         type: 'FIND_ALL_TUITS',
//         tuits: tuits
//       });
//     }
//     useEffect(() => findAllTuits(dispatch), []);
      useEffect(() =>
        findAllTuits(dispatch),
        []);


console.log(tuits);
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

export default TuitList;*/

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits}
  from "../../../actions/tuits-actions";

const TuitList = () => {

    const selectAllTuits = (state) => state.tuits;

    const tuits = useSelector(selectAllTuits);
    console.log(tuits)
    const dispatch = useDispatch();

     useEffect(() =>
       findAllTuits(dispatch),
       []);

     const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});



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