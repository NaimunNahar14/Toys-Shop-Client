import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);
    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url]);
    const handleDelete = id => {
        const proceed = confirm('Are You sure want To Delete Toy');
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
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
    const handleUpdate = id => {
        const proceed = confirm('Are You sure want To Updated Toy');
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify({status: 'updated'})
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.modifiedCount > 0) {
                    const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                    const updated = mytoys.find(mytoy => mytoy._id === id);
                    updated.status= 'updated'
                    const newToy = [updated, ...remaining];
                    setMytoys(newToy);

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
                                handleUpdate={handleUpdate}

                            ></MyToysRow>)
                        }
                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyToys;