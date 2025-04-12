declare module '*.svg' {
    const content: string; // For using SVG as a URL in <img src="..." />
    export default content;
  
    import React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
  