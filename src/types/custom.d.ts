declare module 'react';
declare module 'react-dom';
declare module 'react-router-dom';
declare module 'framer-motion';
declare module 'react-icons/fa';
declare module 'howler';

// Add JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 