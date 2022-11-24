import React from 'react';
import Collapsible from 'react-collapsible';

const Blog = () => {
    return (
        <div>
            <Collapsible className='bg-success text-2xl font-bold border-2 border-red-300 p-3' trigger="What are the different ways to manage a state in a React application?">
                <div className='bg-primary text-white px-5'>
                <p className='text-xl '>
                Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. <br />
                </p>
                <p className='text-xl '>There are four main types of state properly manage in your React apps:</p>
                <ol className='list-decimal'>
                    <li> Local state</li>
                    <li> Global state</li>
                    <li> Server state</li>
                    <li> URL state</li>
                </ol>
                </div>
            </Collapsible>
            <Collapsible className='bg-success text-2xl font-bold border-2 border-red-300 p-3' trigger="  How does prototypical inheritance work?">
               <div className='bg-primary text-white px-5'>
                    <p className='text-xl '>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
               </div>
            </Collapsible>
            <Collapsible className='bg-success text-2xl font-bold border-2 border-red-300 p-3' trigger=" What is a unit test? Why should we write unit tests?">
               <div className='bg-primary text-white px-5'>
                    <p className='text-xl '>
                    TThe main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
               </div>
            </Collapsible>
            <Collapsible className='bg-success text-2xl font-bold border-2 border-red-300 p-3' trigger=" React vs. Angular vs. Vue?">
               <div className='bg-primary text-white px-5'>
               <div>
               <h2 className='text-3xl font-bold '>Angular</h2>
                    <p className='text-xl '>
                    Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                    </p>
               </div>
               <div>
               <h2 className='text-3xl font-bold '>React</h2>
                    <p className='text-xl '>
                    React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                    </p>
               </div>
               <div>
               <h2 className='text-3xl font-bold '>Vue</h2>
                    <p className='text-xl '>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                    </p>
               </div>
               </div>
            </Collapsible>
            
        </div>
    );
};

export default Blog;