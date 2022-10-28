// We're adding a wrapper component here to prevent 'div soup' happening.
// JSX requires one wrapping element to render JSX code, instead of using a '<div>' to render
// 1 or 2 components we can use a component that just returns props.children
const Wrapper = (props) => {
    return props.children;
};

export default Wrapper;
