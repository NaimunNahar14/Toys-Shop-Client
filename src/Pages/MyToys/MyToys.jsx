import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);
    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url]);
    const handleDelete = id => {
        const proceed = confirm('Are You sure want To Delete Toy');
        if (proceed) {
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted SuccessFully');
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setMytoys(remaining);
                    }
                })

        }
    }
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>ToyName</th>
                            <th>SellerName</th>
                            <th>SellerEmail</th>
                            <th>Toy's Quantity</th>
                            <th>Price</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            mytoys.map(mytoy => <MyToysRow
                                key={mytoy._id}
                                mytoy={mytoy}
                                handleDelete={handleDelete}

                            ></MyToysRow>)
                        }
                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyToys;