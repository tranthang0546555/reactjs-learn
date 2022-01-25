import React from 'react';
import './index.css'

function index({ data }) {
    return (
        <div className='album_item'>
            <div className='album_thumbnail'>
                <img src={data.url} alt="" />
            </div>
            <div className='album_title'>
                <h4>{data.title}</h4>
            </div>
        </div>
    );
}

export default index;