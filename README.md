# Project Name

My project name is “Dev Stack”.

# Project Description

It is a learning tool where one can learn about different types of development technologies. For instance, React, Node.js, PostgreSQL, TypeScript, Python, and so on. One can compare different technologies side by side and put together a stack that fits their next project.

# Technologies That I Have Used

To build this project, I have used multiple technologies. For instance:

* React.js
* Tailwind CSS, DaisyUI
* TypeScript / JavaScript (ES6+)
* React-Toastify (NPM Package)
* JSON (for technology data)
* Vite (build tool)

# Features of My Project

* I have used a hamburger menu icon for small and medium-sized devices.
* Users can sign in or sign up for the web application.
* Users can create a stack of different technologies that will fit their next project.


# Some Q&A

* What is JSX, and why is it used in React?
    JSX is a syntax that lets us write HTML-like code inside JavaScript.

* What is the difference between props and state?
    Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

* What does the useState hook do, and where did you use it in this project?
    The useState hook is used to create and manage changing data in a component. In my project, I used it to manage the state in the Navbar, Banner, and Technologies components.

* What does the useEffect hook do, and why did you need it to load the JSON data?
    The useEffect hook is used to run code after a component renders. I needed it to load the JSON data when the component was loaded.

* Why does every item in a .map() list need a unique key prop?
    A unique key helps React identify each item in a list. It allows React to efficiently update only the items that have changed.
    
* What is conditional rendering? Show one place you used it (example: the empty stack message).
    Conditional rendering means showing different UI based on a condition.
    Example:
    ```
    {addedStack.length === 0 ? (
        <p>No technologies selected yet</p>
    ) : (
        // Show selected technologies
    )}
    ```

* How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    A parent component sends data to a child component using props. A child component can send data back to the parent by calling a function passed from the parent as a prop.