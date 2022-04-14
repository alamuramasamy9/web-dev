import React from "react";
import { useDispatch } from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions"

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();

    const likeClickHandler = () => {
        dispatch({ type: 'like-tuit', tuit });
    };

    return (

        <div className="row mt-2">

            <div className="col">
            {tuit.comments}&nbsp;&nbsp;
                <i className="far fa-comment me-2"></i>


            </div>

            <div className="col">
            {tuit.retweets}&nbsp;&nbsp;
                <i className="fas fa-retweet me-2"></i>

            </div>

            <div className="col">

                                    <label>
                                        {tuit.likes}
                                        <i onClick={() => updateTuit(dispatch, {
                                            ...tuit,
                                            likes: tuit.likes + 1
                                        })} className="far fa-thumbs-up ms-3 me-2"></i>
                                    </label>
                                    </div>

                        <div className="col">

                                                <label>
                                                    {tuit.dislikes}
                                                    <i onClick={() => updateTuit(dispatch, {
                                                        ...tuit,
                                                        dislikes: tuit.dislikes + 1
                                                    })} className="far fa-thumbs-down ms-3 me-2"></i>
                                                </label>
                                                </div>


            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;