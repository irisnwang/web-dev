import React, {useState} from "react";
import "../../../vendors/bootstrap/css/bootstrap.min.css"
import "../index.css"
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
  }

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
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
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
              <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                Tweet
              </button>
            </td>
          </tr>
        </table>
      </>
  );
}
export default WhatsHappening;