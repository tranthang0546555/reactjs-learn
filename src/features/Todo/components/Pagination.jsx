import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePage: PropTypes.func
};

Pagination.defaultProps = {
    onChangePage: null
}

function Pagination({ pagination, onChangePage }) {

    const [page, setPage] = useState(pagination._page)
    const handleChangePage = (newPage) => {
        setPage(newPage)
        onChangePage(newPage)
    }
    const lastPage = Math.ceil(pagination._totalRows / pagination._limit)
    return (
        <div>
            <button
                onClick={() => (handleChangePage(page - 1))}
                disabled={page <= 1}
            >
                Previous
            </button>
            <i>__{pagination._page}__</i>
            <button
                onClick={() => (handleChangePage(page + 1))}
                disabled={page >= lastPage}
            >
                Next
            </button>

        </div>
    );
}

export default Pagination;