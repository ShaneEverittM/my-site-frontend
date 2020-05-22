import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import axios from 'axios'
const hostname = 'http://localhost:8000'

class FileSystem extends Component {

    async componentDidMount() {
        await axios.post(`${hostname}/filesystem`, { command: "init" })
    }
    startSimulation = () => 'Hello World'
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    maxHeight: "90%",
                    maxWidth: "90%",
                    fontSize: 26,
                    overflow: "hidden"
                }}
            >
                <Terminal
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    allowTabs={false}
                    showActions={false}
                    actionHandlers={{
                        handleClose: () => {/* Can't close */ },
                    }}
                    commands={{
                        showmsg: this.showMsg,
                    }}
                    descriptions={{
                        showmsg: 'shows a message',
                    }}
                    startState="maximised"
                    commandPassThrough={(cmd, print) => {
                        console.log(`Sending command: ${cmd}`)
                        let space_cmd = `${cmd}`.split(",").join(" ")
                        axios.post(`${hostname}/filesystem`, { command: `${space_cmd}` }).then(res => { print(res.data["message"]); })

                    }}

                    msg='This is my simulated filesystem written in Rust, type "start" to begin.'
                />
                {/* <div style={{
                    display: "flex",
                    height: "15px",
                    zIndex: 100,
                    backgroundColor: "#282828",
                    width: "90%",
                    position: "absolute",
                    bottom: "40px"
                }}></div> */}
            </div >
        );
    }
}
export default FileSystem;