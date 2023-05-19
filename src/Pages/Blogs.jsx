

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center italic font-extrabold underline underline-offset-8'>QUESTION AND ANSWER</h1>
            <div className="mt-3 mb-3">
                <h3 className="text-teal-950 font-semibold">1. What is an access token and refresh token?</h3>
                <ul className="list-disc">
                    Answer:
                    <li>
                        <span className="font-bold">* Access Token:</span> An access token is a credential that is issued to a user after they successfully authenticate and authorize themselves. It is typically a string of characters that grants the user access to protected resources or APIs. Access tokens have an expiration time, after which they become invalid and can no longer be used to access protected resources. These tokens are used to authenticate subsequent requests to the server and verify that the user has the necessary permissions to perform the requested actions.
                    </li>
                    <li>

                        <span className="font-bold">* Refresh Token:</span> A refresh token is a long-lived credential that is also issued during the authentication process. Unlike access tokens, refresh tokens are not meant to be sent with each API request. Instead, they are used to obtain a new access token when the current one expires. When the access token expires, the refresh token can be sent to the server to request a new access token without requiring the user to re-authenticate. Refresh tokens are usually associated with a longer expiration time compared to access tokens, and they are securely stored by the client application.
                    </li>
                </ul>

            </div>
            <div className="mt-3 mb-3">
                <h3 className="text-teal-950 font-semibold">2.How do they work and where should we store them on the client-side??</h3>
                <ul className="list-disc">
                    Answer:
                    <li>
                        <span className="font-bold">* Access Token:</span> When a user successfully authenticates with a server, the server generates an access token and sends it back to the client. The client then includes this access token in subsequent API requests, typically in the Authorization header, to authenticate and authorize the users access to protected resources. The server validates the access token and allows or denies access based on the tokens validity and the users permissions.
                        <span className="font-bold"> Storage:</span> Access tokens are typically stored in memory on the client-side. They are temporarily held in memory and attached to each request sent to the server. Once the token expires or the user logs out, the access token is discarded from memory.
                    </li>
                    <li>

                        <span className="font-bold">* Refresh Token:</span>Refresh Token: When a user logs in or authenticates, the server may issue a refresh token in addition to the access token. The refresh token has a longer expiration time and is used to obtain a new access token when the current one expires. The client sends the refresh token to the server to request a new access token without requiring the user to re-authenticate.
                        <span className="font-bold">Storage:</span> Refresh tokens need to be securely stored on the client-side since they have a longer lifespan and grant the ability to obtain new access tokens. Common approaches for secure storage include using HTTP-only cookies, browsers local storage, or secure client-side storage mechanisms such as encrypted local storage or secure cookies.
                    </li>
                </ul>

            </div>
            <div className="mt-3 mb-3">
                <h3 className="text-teal-950 font-semibold">3.Compare SQL and NoSQL databases?</h3>
                <ul className="list-disc">
                    Answer:
                    <li>
                        <span className="font-bold">*SQL DATABASE:</span> SQL databases follow a structured, tabular data model with predefined schemas. They use tables with rows and columns to store data, ensuring data integrity and enforcing relationships between tables through foreign key constraints.
                        SQL databases use the SQL language to query and manipulate data. SQL provides a standardized syntax for defining, querying, and modifying data in the database. It supports complex queries, joins, aggregations, and transactions.SQL databases typically scale vertically, meaning they are designed to run on a single server with increasing hardware resources (CPU, RAM, etc.). However, some SQL databases offer sharding and replication techniques for horizontal scaling.
                    </li>
                    <li>

                        <span className="font-bold">* NON-SQL DATABASE:</span>NoSQL databases employ various data models, including key-value, document, columnar, and graph models. They provide flexibility and schema-less data storage, allowing for dynamic and evolving data structures.NoSQL databases use a variety of querying languages, including proprietary APIs and query languages specific to the data model. For example, key-value stores use simple CRUD operations, while document databases may use JSON-based query languages.NoSQL databases excel in scenarios that require massive scalability, high-speed data ingestion, unstructured or semi-structured data, and flexibility in data modeling. They are commonly used in applications like real-time analytics, content caching, IoT data management, and social networks.
                    </li>
                </ul>

            </div>
            <div className="mt-3 mb-3">
                <h3 className="text-teal-950 font-semibold">4. What is express js? What is Nest JS?</h3>
                <ul className="list-disc">
                    Answer:
                    <li>
                        <span className="font-bold">* Express js</span> Express.js is a minimalistic, unopinionated, and flexible web framework for Node.js. It provides a robust set of features and middleware to build web applications and APIs. Express.js focuses on simplicity and allows developers to have fine-grained control over their applications structure and logic. It provides routing capabilities, middleware support, template engine integration, and easy handling of HTTP requests and responses. Express.js is known for its simplicity, extensive community support, and wide adoption.
                    </li>
                    <li>

                        <span className="font-bold">* Next Js:</span> Nest.js is a progressive, opinionated framework for building efficient, scalable, and maintainable server-side applications in Node.js. It leverages TypeScript and incorporates concepts from both object-oriented programming (OOP) and functional programming (FP). Nest.js follows a modular architecture that promotes code reusability, separation of concerns, and dependency injection. It provides built-in support for features like routing, middleware, authentication, database integration, and more. Nest.js aims to provide a structured and organized approach to building Node.js applications, making it suitable for large-scale enterprise applications.
                    </li>
                </ul>

            </div>
            <div className="mt-3 mb-3">
                <h3 className="text-teal-950 font-semibold">5.What is MongoDB aggregate and how does it work?</h3>
                <ul className="list-disc">
                    Answer:
                    <li>
                        <span className="font-bold">*MongoDB:</span> MongoDBs aggregate is a powerful method used for data aggregation and processing within the MongoDB database. It allows you to perform advanced data operations, such as grouping, filtering, transforming, and computing values on multiple documents in a collection.
                    </li>
                    <li>

                        <span className="font-bold">*FrameWork:</span> The aggregate method in MongoDB operates on a concept called a pipeline. A pipeline is an array of stages, where each stage represents a data processing step. Documents pass through these stages in a sequential manner, and each stage performs a specific operation on the documents. Multiple stages can be chained together to create a comprehensive pipeline that defines the sequence of operations. Each stage takes the output from the previous stage and passes it to the next stage for further processing.The aggregate framework allows you to reshape documents by including or excluding specific fields, renaming fields, adding computed fields, or aggregating values based on specific conditions. This gives you flexibility in transforming the data to meet your requirements.
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Blogs;