import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import axios from 'axios'
import helpText from '../resources/help'
const hostname = 'http://localhost:8000'

class Project extends Component {
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
                    overflow: "hidden",
                    boxShadow: "4px 7px 7px 0px rgba(0,0,0,0.75)"
                }}
            >
                <Terminal
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    color='white'
                    backgroundColor='#313131'
                    prompt='white'
                    outputColor='white'
                    promptSymbol={this.props.prompt}
                    barColor='#357cf0'
                    allowTabs={false}
                    showActions={false}
                    actionHandlers={{
                        handleClose: () => {/* Can't close */ },
                    }}
                    commands={{
                        help: (args, print, runCommand) => {
                            print(helpText)
                        },

                    }}
                    startState="maximised"
                    commandPassThrough={(cmd, print) => {
                        console.log(`Sending command: ${cmd}`)
                        let space_cmd = `${cmd}`.split(",").join(" ")
                        axios.post(`${hostname}/projects/${this.props.project}`, { command: `${space_cmd}` }).then(res => { print(res.data["msg"].substring(0, res.data["msg"].indexOf(">") - 3)); })

                    }}

                    msg='This is my simulated filesystem written in Rust, type "in" to begin.'
                />
            </div >
        );
    }
}
export default Project;