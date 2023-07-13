import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../services/UserServices';
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        //call api
        getUsers(1);

    }, [])


    const getUsers = async (pageNumber) => {
        let res = await fetchAllUser(pageNumber)

        if (res && res.data) {
            setTotalPages(res.total_pages)
            setTotalUser(res.total)
            setListUsers(res.data)
        }
    }

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1)
    };

    console.log(listUsers);
    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default TableUsers;