import React from "react";
import { useDispatch } from "react-redux";
import './tweet.css';
import TweetStats from "./TweetStats";

const TweetListItem = ({ tweet }) => {

    const dispatch = useDispatch();

    const deleteTweetClickHandler = () => {
        dispatch({ type: 'delete-tweet', tweet })
    }

    return (
        <li className="list-group-item">
            <table>
                <tr>

                    <td className="align-text-top">
                        <img
                            className="rounded-circle wd-avatar-image"
                            src={tweet['logo-image']} alt=""
                        />
                    </td>

                    <td className="ps-3 wd-width100">

                        <i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right"></i>
                        <span className="fw-bold">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>

                        <div>
                            {tweet.tweet}
                        </div>

                        {tweet.attachments && tweet.attachments.image &&
                            <img src={tweet.attachments.image}
                                className="mt-2 wd-borderRadius20px wd-width100" alt=""
                            />
                        }

                        {tweet.attachments && tweet.attachments.video &&
                            <iframe
                                width="100%"
                                height="350px"
                                className="mt-2 wd-borderRadius20px wd-width100"
                                src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        }

                        <TweetStats tweet={tweet} />

                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TweetListItem;