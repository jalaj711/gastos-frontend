import colors from "../utils/colors";

function Loader(props: {dimension?: string, static?: boolean}){
    const dimension = props.dimension || '72px'
    return (
        <>
        <div className="loaderContainer">
            <div className="loader" />
        </div>
        <style jsx>
            {`
                .loaderContainer {
                    width: ${dimension};
                    height: ${dimension};
                    border-radius: 50%;
                    border: 4px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                }
                .loader {
                    width: ${dimension};
                    height: ${dimension};
                    border-radius: 50%;
                    border: 4px solid transparent;
                    border-left-color: ${colors.primary};
                    ${props.static ? '' : 'animation: spin 1s infinite linear;'}
                    position: absolute;
                    top: -4px;
                    left: -4px;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}
        </style>
        </>
    )
}

export default Loader;