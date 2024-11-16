import React from "react";
import BlogPost from 'BlogPost';

const App = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogPost
        title="Understanding React Props"
        content="Props are a mechanism to pass data from one component to another in React."
        author="John Doe"
      />
      <BlogPost
        title="Why Use React?"
        content="React simplifies UI development with its declarative and component-based architecture."
        author="Jane Smith"
      />
      <BlogPost
        title="Getting Started with React"
        content="To get started with React, you'll need to set up a development environment and create your first component."
        author="Chris Evans"
      />
    </div>
  );
};

export default App;

