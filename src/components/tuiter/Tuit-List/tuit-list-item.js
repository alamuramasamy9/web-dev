import React from "react";
import { useDispatch } from "react-redux";
import './tuit.css';
import TuitStats from "./tuit-stats";
import {deleteTuit}
  from "../../../actions/tuits-actions";

const TuitListItem = ({ tuit }) => {

    const dispatch = useDispatch();


    return (
        <li className="list-group-item">
            <table>
                <tr>

                    <td className="align-text-top">
                        <img
                            className="rounded-circle wd-avatar-image"
                            src={tuit['logoImage']} alt=""
                        />
                    </td>

                    <td className="ps-3 wd-width100">

                        <i onClick={() => deleteTuit(
                                       dispatch, tuit)} className="fas fa-times fa-pull-right"></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>

                        <div>
                            {tuit.tuit}
                        </div>

                        {tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                className="mt-2 wd-borderRadius20px wd-width100" alt=""
                            />
                        }

                        {tuit.attachments && tuit.attachments.video &&
                            <iframe
                                width="100%"
                                height="350px"
                                className="mt-2 wd-borderRadius20px wd-width100"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        }

                        <TuitStats tuit={tuit} />

                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TuitListItem;