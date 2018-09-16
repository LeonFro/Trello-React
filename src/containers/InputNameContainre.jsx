import React from "react";
import { connect } from "react-redux";
import { addName } from "../actions";

const InputNameContainer = ({ dispatch }) => {
    let input;
    return (
        <div className="modal-body">
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addName(input.value));
                input.value = "";
            }}>
                <input type="text"
                    className="form-control"
                    placeholder="You name..."
                    ref={t => (input = t)}
                    required />
                <button type="submit" className="btn btn-primary">Done</button>
            </form>
        </div>
    )
};

export default connect()(InputNameContainer);