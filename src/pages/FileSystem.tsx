import React, { Component } from 'react';
import XTerm, { Terminal } from 'react-xterm'
import axios from 'axios';
import 'xterm/css/xterm.css'
import '../styles/Page.css'

const hostname = 'http://localhost:8000'


interface IState {
}
interface IProps {
}
class FileSystem extends Component<IProps, IState> {

    constructor(props: IProps, context?: any) {
        super(props, context);
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        runFakeTerminal(this.inputRef.current!!);
    }
    componentWillUnmount() {
        this.inputRef.current?.componentWillUnmount();
    }

    private inputRef: React.RefObject<XTerm>;


    render() {
        console.log(XTerm)
        console.log(this.inputRef)
        return (
            <div className="App" >
                <XTerm ref={this.inputRef}
                    addons={['fit', 'fullscreen', 'search']}
                    style={{
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                    }
                    } />
            </div>
        );
    }
}

function runFakeTerminal(xterm: XTerm) {
    const term: Terminal = xterm.getTerminal();
    var shellprompt = '$ ';

    function prompt() {
        xterm.write('\r\n' + shellprompt);
    }
    xterm.writeln('Welcome to xterm.js');
    xterm.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    xterm.writeln('Type some keys and commands to play around.');
    xterm.writeln('');
    prompt();
    let line: string = ""
    term.on('key', async function (key, ev) {
        var printable = (
            !ev!!.altKey && !ev!!.ctrlKey && !ev!!.metaKey
        );
        //Enter
        if (ev!!.keyCode == 13) {
            //send
            const res = await axios.post(`${hostname}/filesystem`, { command: line })
            //clear line
            line = ""

            xterm.write(`\r\n${res.data["message"].split("\n").join("\r\n")}`)
            prompt();
        } else if (ev!.keyCode == 8) {
            // Do not delete the prompt
            if (line.length > 0) {
                xterm.write('\b \b');
            }
            line = line.substring(0, line.length - 1)
        } else if (printable) {
            xterm.write(key);
            line += ev?.key
        }
        console.log(line)
    });

    term.on('paste', function (data, ev) {
        xterm.write(data);
    });
}
export default FileSystem;