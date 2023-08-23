const Carousel = (props) => {

    return(
        <div>
            <div id={props.id} className={`carousel slide ${props.classNameOut}`} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {/* we need to handle the first one because in has a particular class named active */}
                    <button key={'0'} type="button" data-bs-target={`#${props.id}`} data-bs-slide-to="0" aria-label="Slide 1" className="active" ></button>
                    {props.data.slice(1).map( (d, i) => <button key={i} type="button" data-bs-target={`#${props.id}`} data-bs-slide-to={`${i+1}`} aria-label={`Slide ${i+2}`} ></button> )}  
                </div>
                <div className="carousel-inner">
                    {/* we need to handle the first one because in has a particular class named active */}
                    <div key='0' className={`active ${props.classNameIn}`} >
                        <img src={props.data[0].src} className=" object-fit-scale d-block w-100 "  />
                        <div className="carousel-caption ">
                            <h4>{props.data[0].h4}</h4>
                            <p>{props.data[0].p}</p>
                        </div>
                    </div>
                    {
                        props.data.slice(1).map((d, i) => <div key={i+1} className={`${props.classNameIn}`} >
                            <img src={d.src} className=" object-fit-scale d-block w-100 "  />
                            <div className="carousel-caption ">
                                <h4>{d.h4}</h4>
                                <p>{d.p}</p>
                            </div>
                        </div>
                    )
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div> 
            </div>    
        )
}

export default Carousel;