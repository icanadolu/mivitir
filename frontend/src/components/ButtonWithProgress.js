import React from 'react';

const ButtonWithProgress = (props) => {

    const {onClick,pendingApiCall,disabled,text} = props;

    return (
        <div>
              <button className="btn btn-primary"
                 disabled={disabled}
                     onClick={onClick}>
                        {pendingApiCall&& <span className="spinner-border spinner-border-sm" ></span>}
                        {text}</button>

                        
        </div>
    );
};

export default ButtonWithProgress;