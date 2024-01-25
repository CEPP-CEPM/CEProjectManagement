'use client'
import Pagination from '@mui/material/Pagination';
import { useEffect} from 'react';

const Paginate = (props) => {
    const handleChange = (event, value) => {
        props.setPage(value);
    };

    useEffect(() => {

    },[])

    return (
        <div className='flex justify-end mt-4 mr-2'>
            <Pagination count={props.datacount} page={props.page} onChange={handleChange} />
        </div>
    )
}

export default Paginate