import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const { user } = useContext(AuthContext);
    const [alltoys, setAlltoys] = useState([]);
    const url = `http://localhost:5000/alltoys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlltoys(data))

    }, [url])
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alltoys.map(alltoy => <AllToysRow
                                    key={alltoy._id}
                                    alltoy={alltoy}
                                ></AllToysRow>)
                            }

                        </tbody>


                    </table>
                </div>


            </div>
        </div>
    );
};

export default AllToys;