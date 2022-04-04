import React from "react";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();

    const likeClickHandler = () => {
        dispatch({ type: 'like-tuit', tuit });
    };

    return (

        <div className="row mt-2">

            <div className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.stats.comments}
            </div>

            <div className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.stats.retweets}
            </div>

            <div className="col" onClick={likeClickHandler}>
                {tuit.liked &&
                    <i className="fas fa-heart me-2" style={{ color: tuit.liked ? 'red' : "white" }}></i>
                }
                {!tuit.liked &&
                    <i className="far fa-heart me-2"></i>
                }
                {tuit.stats.likes}
            </div>

            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;