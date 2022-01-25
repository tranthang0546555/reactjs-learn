import React from 'react';
import AlbumList from './components/AlbumList';

function Album(props) {

    const album = [
        {
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/f/b/4/efb4af3420fdeb4663caa6bed9334d1c.jpg',
            title: 'Tết Việt 2022'
        },
        {
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/f/b/4/efb4af3420fdeb4663caa6bed9334d1c.jpg',
            title: 'Tết Việt 2023'
        },
        {
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/f/b/4/efb4af3420fdeb4663caa6bed9334d1c.jpg',
            title: 'Tết Việt 2024'
        },
        {
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/f/b/4/efb4af3420fdeb4663caa6bed9334d1c.jpg',
            title: 'Tết Việt 2023'
        }
    ]

    return (
        <div>
            <AlbumList album={album} />
        </div>
    );
}

export default Album;
