import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './index.scss'

AlbumList.propTypes = {
    album: PropTypes.array.isRequired
};
AlbumList.defaultProps = {
    album: []
}

function AlbumList({ album }) {
    return (
        <div className='album'>
            {album.map((value, index) => (
                <Album key={index} data={value} />
            ))}
        </div>
    );
}

export default AlbumList;