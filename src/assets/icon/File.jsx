export const File = ({fill, size, height, width, ...props}) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            >
                <path
                    d="M13 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            </g>
        </svg>
    );
};