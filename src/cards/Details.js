    import Modals from '../components/Modals';
    import '../styles/books.css';
    import { Link } from 'react-router-dom';

    const Details = ({ img, title, author, description, price }) => { 

        return (
            <div className="book">
                <img className="img" src={img} alt="img no found" />
                <div className="card-content">  
                <h6><b>{title}</b></h6>
                <span>{author}</span>
                <br/>
                <p>{description}</p>
                <span>${price}</span>
                <br/>
                <button className="btn-secondary active buttons" onClick="al dar click agregar descripcion o abrir modal">Agregar al carrito</button>
                <Modals />
                <Link to="/">
                <button className="btn btn-danger c-black">Regresar</button>
                </Link>
                </div>
            </div>
        )
    }   


    export default Details;