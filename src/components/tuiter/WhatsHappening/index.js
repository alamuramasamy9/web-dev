import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTuit } from "../../../actions/tuits-actions";

const WhatsHappening = () => {

    const dispatch = useDispatch();

    let [whatsHappening, setWhatsHappening] = useState('');


    const [newTuit, setNewTuit] =
          useState({tuit: 'New tuit'});

    return (
        <>
            <table style={{ marginBottom: '16px' }}>
                <tr>

                    <td style={{ verticalAlign: 'top' }}>
                        <img src={'/images/profile.jpg'}
                            className="rounded-circle"
                            style={{ width: '48px', margin: '16px' }} alt=""/>
                    </td>

                    <td style={{ width: "100%" }}>
                        <textarea
                            onChange={(e) =>
                                         setNewTuit({
                                         tuit: e.target.value})}
                            className="form-control w-75"
                            style={{
                                width: "100%", color: "white",
                                padding: "0px",
                                paddingTop: "15px",
                                backgroundColor: "black"
                            }}

                            placeholder="What's happening?">
                        </textarea>

                        <hr />

                        <span>
                            <a href="/"><i className="far fa-image me-3"></i></a>
                            <a href="/"><i className="far fa-chart-bar me-3"></i></a>
                            <a href="/"><i className="far fa-smile me-3"></i></a>
                            <a href="/"><i className="far fa-calendar me-3"></i></a>
                        </span>

                        <button onClick={() =>
                                          createTuit(dispatch, newTuit)} setNewTuit='New Tuit' className="btn btn-primary fa-pull-right rounded-pill">
                            Tuit
                        </button>
                    </td>

                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;