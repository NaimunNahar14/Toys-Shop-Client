
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ToyShop from '../ToyShop';

const Category = () => {
    const [toys, setToy] = useState([]);
    const [activeTab, setActiveTab] = useState("Teddy");

    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => {
                setToy(data);
            })

    }, [])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div>
            <h2 className='text-3xl text-center'>SHOP BY CATEGORY</h2>
            <div className="flex justify-center mt-3">
                <Tabs>
                    <TabList className="flex space-x-4">
                        <Tab className="text-lg font-medium text-gray-600 hover:text-gray-800 cursor-pointer" onClick={() => handleTabClick('Teddy')}>
                            Teddy  Bear toys
                        </Tab>
                        <Tab className="text-lg font-medium text-gray-600 hover:text-gray-800 cursor-pointer">
                            Angry Bird Toys
                        </Tab>
                        <Tab className="text-lg font-medium text-gray-600 hover:text-gray-800 cursor-pointer">
                            UniCorn toys

                        </Tab>
                    </TabList>

                    <TabPanel>
                        {/* Content for Tab 1 */}
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/vxpt7rm/6161b2076e98da44be8f963b61efa5d6.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: Soft Teddy</h2>
                                    <h2>ToyPrice: $550</h2>
                                    <p>bio:I'd be happy to provide feedback on your toys website.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/kD5t0Cr/pexels-photo-168866.jpg"alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: teddy</h2>
                                    <h2>ToyPrice: $80</h2>
                                    <p>bio:None</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* Content for Tab 2 */}
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/xL0xj2d/images-14.jpg"alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: Silver Angry bird</h2>
                                    <h2>ToyPrice: $850</h2>
                                    <p>bio:I'd be happy to provide feedback on your toys website.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/0tTFfYN/026291fb-2f15-4e23-a11c-46347ec613ee.jpg"alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: Angery Birds toys</h2>
                                    <h2>ToyPrice: $40</h2>
                                    <p>bio:None</p>
                                </div>
                            </div>
                        </div>
                        
                    </TabPanel>
                    <TabPanel>
                        {/* Content for Tab 3 */}
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/TqW7h8Y/images-13.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: unicorn</h2>
                                    <h2>ToyPrice: $50</h2>
                                    <p>bio:I'd be happy to provide feedback on your toys website.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="https://i.ibb.co/L6wh7VS/download-8.jpg"alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ToyName: Unicorn Plush Toy</h2>
                                    <h2>ToyPrice: $30</h2>
                                    <p>bio:None</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
          
        </div>

    );
};

export default Category;