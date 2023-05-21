import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import { FaSistrix } from 'react-icons/fa';

const AllToys = () => {

    const [alltoys, setAlltoys] = useState([]);
    const [searchText, setSearchText] = useState("");
    const url = `https://toys-shop-server.vercel.app/alltoys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlltoys(data))

    }, [url]);

    const handleSearch = () => {
        fetch(`https://toys-shop-server.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            });

    };


    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <div>
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-3 ml-60 gap-5" />
                        <button onClick={handleSearch}><FaSistrix></FaSistrix></button>
                    </div>


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