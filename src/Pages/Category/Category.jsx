
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
                        <p>Tab 1 Content</p>
                    </TabPanel>
                    <TabPanel>
                        {/* Content for Tab 2 */}
                        <p>Tab 2 Content</p>
                    </TabPanel>
                    <TabPanel>
                        {/* Content for Tab 3 */}
                        <p>Tab 3 Content</p>
                    </TabPanel>
                </Tabs>
            </div>
            {toys?.map((toy) => (
                <ToyShop key={toy._id}
                    toy={toy}
                >
                </ToyShop>

            ))}
        </div>

    );
};

export default Category;