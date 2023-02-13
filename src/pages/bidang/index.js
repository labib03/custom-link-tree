import React, {useContext} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {AddItem, Back, ModalCreate} from "components/index";
import GlobalContext from "../../context/globalContext";
import {sekretariat} from "../../utils/subfolder";
import { useToast } from '@chakra-ui/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Bidang() {
    const context = useContext(GlobalContext)
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const toast = useToast();
    const [parent] = useAutoAnimate()
    const {state, pathname} = location;
    const {data: {showModalCreate}, updater: {setShowModalCreate}} = context;

    const toggle = (value) => {
        setShowModalCreate(value)
    }


    return (
        <>
            <ModalCreate open={showModalCreate} onClose={toggle} toast={toast}/>
            <h2 className="title-container">{state?.label}</h2>

            <div className='bidang-btn-wrapper'>
                <AddItem handler={toggle}/>
                <Back/>

            </div
            >
            <div className="menus-list">
                {/*File*/}
                <h2 className='menus-list-title'>File</h2>
                <div className='menus-item-wrapper' ref={parent}>
                    {
                        sekretariat?.file?.map((item, idx) => (
                            <div
                                className="menus-item"
                                key={idx}
                                // onClick={() =>
                                //     (window.location.href =
                                //         "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8")
                                // }
                            >
                                <a href={item.link} target='_blank'>
                                    {item.label}
                                </a>
                            </div>
                        ))
                    }
                </div>

            {/*    Folder*/}
                <h2 className='menus-list-title'>Folder</h2>
                <div className='menus-item-wrapper' ref={parent}>
                    {
                        sekretariat?.folder?.map((item, idx) => (
                            <div
                                className="menus-item"
                                key={idx}
                                // onClick={() =>
                                //     (window.location.href =
                                //         "https://1drv.ms/x/s!Ak0DKSz2troAp05Sq6uvQqGWNjer?e=ZzbYT8")
                                // }
                            >
                                <Link className='custom' to={`${pathname}/${item.link}`} state={item}>
                                    {item.label}
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div></div>
        </>
    );
}

export default Bidang;
