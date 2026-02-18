/// <reference types="vite/client" />

declare module 'figma:asset/*' {
    const content: string;
    export default content;
}

declare module 'motion/react' {
    export * from 'framer-motion';
}
