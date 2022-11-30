import React from 'react';
import UseTitle from '../../Hooks/Title/Title';

const Blog = () => {

    UseTitle('Blog');
    
    return (
        <div className='pt-28 px-10'>
            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: What are the different ways to manage a state in a React application?</h1>
                <p className='text-2xl'>
                    In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.
                    <br />

                    <ul style={{"listStyleType": "number"}}>
                        <li>URL <br />
                        We can use URL to store some data</li>
                        <li>Web Storage
                        The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</li>
                        <li>Local State
                        The third option is to use store state locally. It is useful when one component needs the state. </li>
                        <li>Lifted State
                        The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. </li>
                        <li>Derived State
                        The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.</li>
                        
                    </ul> 
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>


            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: How does prototypical inheritance work?</h1>
                <p className='text-2xl'>
                    JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.

                    When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

                    While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>



            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: What is a unit test? Why should we write unit tests?</h1>
                <p className='text-2xl'>
                    <span className='text-yellow-50 mb-2'>What is a unit test?</span> <br />
                    Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected. They are meant to be rather simple, to cover the happy path of the code plus a few edge cases. They contribute to the long-term success of a project because of the reasons  <br /><br />

                    <span className='text-yellow-50 mb-2'>Why should we write unit tests?</span> <br />
                    Writing unit tests makes me think about edge cases—all the situations that are rare, unexpected, or wrong. When you write the logic, it’s normal to focus on the happy path, or what’s normal and expected to happen. When you write tests, you can set up checks for the edge cases and define what should happen in each of them. This makes your code more resilient in cases of unexpected inputs.
                    <br /><br />
                    When you add unit tests to your code, you see what is easy to test and what is not. As your code grows in size and complexity, tests will force you to break it into manageable pieces. This is great because it will help you take the quality of your code to the next level. Every segment that received excessive responsibilities will require exponentially more complicated unit tests. In those cases, it's a good idea to stop and rethink how you organize your logic.
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>



            <div className=' p-4 text-start flex flex-col gap-5'>
                <h1 className='text-4xl font-serif font-semibold'>Question: React vs. Angular vs. Vue?</h1>
                <p className='text-2xl'>
                    
                    React <br /><br />
                    React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components. It is a front-end JavaScript framework, created by Facebook in 2011. The initial version (V0.3.0) was released in July 2013. The latest version is V5.0.1. It has a size of 31.8K. This complete guide on How To Learn ReactJS: A Complete Guide For Beginners will help in making your transition towards React if you’re a beginner. <br /><br />
                    Angular <br /><br />
                    Angular, developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built. It is primarily aimed at creating SPAs (Single Page Applications) and performs various operations such as routing, state management, PWA, testing, and building, having a size of 143K. <br /><br />

                    Vue <br /><br />
                    Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool. It is used for developing single-page engaging and high-quality web applications. It lets you extend directives (HTML with HTML attributes), and also provides built-in directives and user-defined directives. It is the lightest framework having a size of 23K.
                </p>
            </div>
            <hr className='text-yellow-200 mb-10'/>
        </div>
    );
};

export default Blog;