import * as React from 'react';

const Heading = ({ as = 'h1', children, ...props }) => {
  const Tag = as;
  return (
    <Tag className={headingClasses(as)} {...props}>
      {children}
    </Tag>
  );
};

function headingClasses(tag) {
  switch (tag) {
    case 'h2':
      return 'text-2xl md:text-3xl my-3';
    case 'h3':
      return 'text-xl md:text-2xl my-3';
    case 'h4':
      return 'text-lg md:text-xl my-3';
    case 'h5':
      return 'text-md md:text-lg my-3';
    case 'h6':
      return 'text-base md:text-md my-3';
    default:
      return 'text-3xl md:text-4xl my-5';
  }
}

export default Heading;
