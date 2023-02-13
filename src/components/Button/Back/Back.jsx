import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Back.scss"
import {Button} from "@nextui-org/react";

const Back = () => {
    const navigate = useNavigate()
    return (
        <Button css={{
            background: '$neutral',
        }} onClick={()=> navigate(-1)}>Kembali</Button>

            // <div className="btn-back" onClick={() => navigate("/")}>
            //     Kembali
            // </div>

    );
};

export default Back;