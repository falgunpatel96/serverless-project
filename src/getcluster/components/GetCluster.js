import React, { Component } from 'react'
import { withRouter } from "react-router";

import axios from 'axios';


export class GetCluster extends Component {

    state = {
        selectedFile: null,
        cluster: {},
        error: '',
        success: ''
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
        axios.post("https://analysis-hfdfyl3pwa-uk.a.run.app/upload", formData, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': '*',
                'Access-Control-Max-Age': '3600'
            },
        })
            .then(response => {
                this.setState({
                    'error': '',
                    'cluster': JSON.parse(response.data.body)
                })
                console.log('res: ' + response.data.body)
            })
            .catch((error) => {
                console.log(error.response.data);
                this.setState({
                    'error': error.response.data.error
                })
            })
    };
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <h1>
                    Get Similarity list
			</h1>
                <h3>
                    File Upload using React!
			</h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
				</button>
                </div>

                <div>
                    {
                        this.state.error != '' ?
                            <p className="form-group" style={{ color: 'red' }}>
                                {this.state.error}
                            </p>
                            : null
                    }
                </div>

                <div>
                    {this.fileData()}
                </div>

                <div>
                    {
                        this.state.cluster != {} ? Object.keys(this.state.cluster).map((key, index) => {
                            return <p className="form-group" key={index} style={{ color: 'red' }}>
                            {`Cluster ${key}: `} {this.state.cluster[key].join(', ')}
                            </p>
                        })
                           : null
                    }

                </div>
                
            </div>
        );
    }
}

export default withRouter(GetCluster);
