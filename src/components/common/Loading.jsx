import React from 'react'
import ReactLoading from "react-loading";

const Loading = () => (
    <div tabIndex="-1" style={{ position: 'relative', zIndex: 1050, display: 'block' }}>
        <div className="">
            <div className="modal fade show" role="dialog" tabIndex="-1" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="">
                        <ReactLoading type={"spin"} color="black" height={467} width={175} />
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </div>
    </div>
)



export default Loading