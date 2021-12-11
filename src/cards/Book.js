    import Modals from '../components/Modals';
    import '../styles/books.css';
    import { Link } from 'react-router-dom';

    const Book = ({ img, title, author, price, id }) => { 

        return (
            <div className="book">
                <img className="img" src={img} alt="img no found" />
                <div className="card-content">  
                <Link to={`/book/${id}`}>
                <h6><b>{title}</b></h6>
                </Link>
                <span>{author}</span>
                <br/>
                <span>${price}</span>
                <br/>
                <button className="btn-secondary active buttons" onClick="al dar click agregar descripcion o abrir modal">Agregar al carrito</button>
                <Modals />
                </div>
            </div>
        )
    }   


    export default Book;