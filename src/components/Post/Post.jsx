import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '10px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={userStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Button For Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;