import React, {useState} from "react";
import "../../../vendors/bootstrap/css/bootstrap.min.css"
import "../index.css"
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] =
      useState({tuit: 'What\'s happening?'});
  return (
      <>
        <table style={{marginBottom: '16px'}}>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <img src={'/tuiter/ruby.png'}
                   className="rounded-circle wd-maxi-avatar"
                   style={{margin: '16px'}}/>
            </td>
            <td style={{width: "100%"}}>
                        <textarea value={newTuit.tuit}
                                  onChange={(e) =>
                                      setNewTuit({...newTuit,
                                        tuit: e.target.value,
                                        avatarimage: "/tuiter/ruby.png"})}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                    padding: "0px",
                                    paddingTop: "15px",
                                    backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
              <hr/>
              <span>
                            <a href="."><i className="far fa-image me-3"></i></a>
                            <a href="."><i className="fas fa-chart-line me-3"></i></a>
                            <a href="."><i className="far fa-smile me-3"></i></a>
                            <a href="."><i className="far fa-calendar me-3"></i></a>
                        </span>
              <button onClick={() =>
                  createTuit(dispatch, newTuit)} className="btn btn-primary fa-pull-right rounded-pill">
                Tweet
              </button>
            </td>
          </tr>
        </table>
      </>
  );
}
export default WhatsHappening;