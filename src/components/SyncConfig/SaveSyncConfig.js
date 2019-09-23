import React from "react";

export const SaveSyncConfig = ({loading, error, onSubmit}) => {
    return (
        <div>
            {loading &&
                <p>Saving</p>
            }

            <button>Back</button>
            <button onClick={e => {
                e.preventDefault();
                onSubmit()
            }
                }>Submit</button>
        </div>
    )
};