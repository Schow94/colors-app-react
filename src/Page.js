import React from 'react';
import './Page.css';

//destructuring out props.children which is the componets rendered
//Page
function Page({ children }) {
  return <section className="page">{children}</section>;
}

export default Page;
