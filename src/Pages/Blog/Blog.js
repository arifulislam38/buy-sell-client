import React from 'react';
import UseTitle from '../../Hooks/Title/Title';

const Blog = () => {

    UseTitle('Blog');
    
    return (
        <div className='pt-28 px-10'>
            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: Difference between SQL and NoSQL</h1>
                <p className='text-2xl'>
                    <span className='text-yellow-50 mb-2'>What is SQL?</span> <br />
                    SQL stands for 'Structured Query Language'. It is the most common programming language used for executing queries, and handling data by using CRUD create, read, update and delete operation on a Relational Database Management System RDMS like MySQL, PostgreSQL, etc. <br /><br />

                    <span className='text-yellow-50 mb-2'>When to Use SQL?</span> <br />
                    SQL databases are cross-platform, more secure, free, and open source with better and stronger community support. These types of databases are a much better option when 

                    Your primary focus is on data consistency, validity, and data integrity

                    You need to execute dynamic and complex queries to retrieve data

                    You have predefined data and defined SQL structure or schemas, which don't change with the data
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>


            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: What is JWT, and how does it work?</h1>
                <p className='text-2xl'>
                    <span className='text-yellow-50 mb-2'>What is JWT?</span> <br />
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /><br />

                    <span className='text-yellow-50 mb-2'>how JWT Works?</span> <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots , and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>



            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: What is the difference between javascript and NodeJS?</h1>
                <p className='text-2xl'>
                    <span className='text-yellow-50 mb-2'>What is JavaScript?</span> <br />
                    JavaScripts first version was launched in 1995 and it was developed by Brendan Eich of Netscape then called LiveScript. As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development. <br /><br />

                    <span className='text-yellow-50 mb-2'>What is Node.js?</span> <br />
                    Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>



            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-2xl'>
                    
                    The operating system gives each socket connection a send and receive queue. That is where the bytes sit until something at the application layer handles them. If the receive queue fills up no connected client can send information until there is space available in the queue. This is why an application should handle requests as fast as possible.

                    If you are on a *nix system you can use netstat to view the current number of bytes in the send and receive queues. In this example, there are 0 bytes in the receive queue and 240 bytes in the send queue waiting to be sent out by the OS. 
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>
        </div>
    );
};

export default Blog;