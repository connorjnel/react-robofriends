import React from "react";

const Scroll = (props) => {
	return <div style={{ overflowY: "scroll", border: "2px solid #333", height: "85vh" }}>{props.children}</div>;
};

export default Scroll;
