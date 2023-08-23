const Modal = () => {
    return(
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                    <div className="modal-header d-flex align-content-stretch flex-wrap">
                        <div>
                            <h5 className="modal-title" id="staticBackdropLabel">جست و جو</h5>
                        </div>
                        <div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div>
                        <form className="d-flex mx-4" role="search">
                                <input className="form-control me-2 focus-ring focus-ring-secondary" type="search" placeholder="" aria-label="Search"/>
                                <button  className="btn btn-outline-dark" type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        

                        {/* searchCards */}



                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;