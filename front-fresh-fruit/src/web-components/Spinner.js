import React, { useState } from 'react'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
    const [loading, setLoading] = useState(true)

    return (
        <div className="sweet-loading">
            <ClipLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={loading}
            />
        </div>
    )
}

export default Spinner
