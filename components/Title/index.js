// Title
// ****Params****
// - text (string: text for the title)
// - style (json: )


export default function Title(props){

    const defaultStyle = {
        fontSize: "20px",
        color: "#444469"
    }

    return(
        <div style={props.style ? Object.assign(defaultStyle, props.style) : defaultStyle}>
            {props.children}
        </div>
    )

}