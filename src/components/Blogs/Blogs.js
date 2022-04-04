import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1> What is context APL ?</h1>
            <br />
            <p>
            The Context API has actually always been there but was considered experimental.As we mentioned earlier, the Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. To do this, we simply connect the data in the context Provider to the state of the parent element and then change this parent’s state using functions in props, a better way is to have the function that will change the context value passed down in the context itself.
            </p>
            <br />
            <h1>What is semantic tag ?</h1>
            <p> The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. A semantic Web allows data to be shared and reused across applications, enterprises, and communities.The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.
          </p>
            <br />
        </div>
    );
};

export default Blogs;