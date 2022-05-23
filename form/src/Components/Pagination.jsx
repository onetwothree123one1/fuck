import React from 'react'
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
    onPageChange: null,
}

handlePageChange = (newPage) => {
    if (onPageChange) {
        onPageChange(newPage);
    }
}
const {_page, _limit,_totalRows} = pagination
function Pagination(props) {
    const { pagionation, onPageChange } = props
    return (
        <div>
            <button disabled={_page === 1} onClick={handlePageChange}>

            </button>
        </div>
    )
}

export default Pagination