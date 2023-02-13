import React from 'react';
import './AddItem.scss'
import {Button} from "@nextui-org/react";

const AddItem = (props) => {
    const { handler } = props
    return (
        <Button onPress={()=> handler(true)} className='custom'>Tambahkan File / Folder</Button>
    );
};

export default AddItem;