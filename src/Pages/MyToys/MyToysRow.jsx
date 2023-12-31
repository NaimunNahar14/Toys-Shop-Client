import { Link } from "react-router-dom";

const MyToysRow = ({ mytoy, handleDelete }) => {
    //   console.log(mytoy);
    const { _id, ToyName, ToyPhoto, ToyPrice, sellername, email, quantity } = mytoy;
    // console.log(mytoy)

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={ToyPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ToyName}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellername}
            </td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>${ToyPrice}</td>
            <th>
                <Link to={`/mytoys/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
            {/* <th>
                {status === 'updated' ?<button >updated</button>:
                    <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">UPDATE </button>
                    
                }
               
            </th> */}
        </tr>
    );
};

export default MyToysRow;