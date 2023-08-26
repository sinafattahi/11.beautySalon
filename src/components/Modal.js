import { useState, useEffect } from "react";

const Modal = (props) => {

    const [searchedPhrase, setSearchPhrase] = useState('')
    const [data, setData] = useState([])

    const arr = []

    useEffect(() => {

       if(searchedPhrase === ''){
            arr.length = 0
            setData({arr: arr})
       }else{
            if( props.data.data !== undefined){
                props.data.data.map((d) =>{
                    if(d.title.includes(searchedPhrase)){
                            arr.push(d)
                        }
                })

                setData({arr: arr})
            }
       }
        
        
  },[searchedPhrase])

    return(
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header d-flex align-content-stretch flex-wrap" style={{backgroundColor:"#F8F9FA"}}>
                            <div>
                                <h5 className="modal-title" id="staticBackdropLabel">جست و جو</h5>
                            </div>
                            <div>
                                <button type="button" className="btn-close focus-ring focus-ring-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body container  px-5">
                            
                            <form className="d-flex mx-4" role="search">
                                    <input onChange={(e) => setSearchPhrase(e.target.value)} className="form-control me-2 focus-ring focus-ring-secondary ms-2" type="search" placeholder="جست و جو ..." aria-label="Search"/>
                            </form>

                            <div className="d-flex flex-wrap mt-4">
                            {
                                (data !== undefined) ? ((data.arr !== undefined) ? data.arr.map((d, i) => <div className="card mx-auto my-2" style={{height:"450px", width:"250px"}} key={i}>

                                {/* we need to find out the type of media */}

                                    {/* <img src="./../media/img/mfedra1.jpg" className="card-img-top mx-auto mt-3" alt="..."  style={{height:"400px", width:"200px"}}  /> */}
                                    <video className="mt-2" loop={true}  controls="controls" id="vid" muted height={"70%"} width={"100%"}>
                                        <source src="../../media/videos/keratin1.mov" type="video/mp4" />
                                    </video>
                                    <div className="card-body">
                                        {/* <h5 className="card-title">{d.title.slice(0,10)}</h5> */}
                                    </div>
                                    <button type="submit" className="btn btn-secondary">دیدن لاین</button>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                ) :  <></> ) : <></>
                                
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;