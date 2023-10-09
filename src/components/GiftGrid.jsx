import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
export  const GiftGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs ( category)

    // const [images, setImages] = useState([]);
    

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
        
    // }

    // useEffect(() => {
    //     getImages()
    // }, []);

 
    // getGifs(category)//al haber nuevo renderizado se va a volver a dispara la peticion http, cosa que no se quiere hacer


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
                
            }
            
            <div className="card-grid">
                {   
                    images.map( ( image ) =>(
                        <GifItem
                            key={image.id} 
                            // title= { image.title }
                            // url= {image.url}
                            { ...image }//todas las propiedades que tengas en el images, tu lo estas esparciendo
                        />
                    ))
                }
            </div>
        </>
        
        
    )
}


GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}