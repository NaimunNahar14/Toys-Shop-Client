import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ alltoy }) => {
    const { _id, ToyName, ToyPrice, sellername, select, quantity} = alltoy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{sellername}</div>
                    </div>
                </div>
            </td>
            <td>
                {ToyName}
            </td>
            <td>{select}</td>
            <td>${ToyPrice}</td>
            <td>{quantity}</td>
            <th>
               <Link to={`/alltoys/${_id}`}> <button>Views Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;
