import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Feature extends React.Component {
    render() {
        var version;
        if (this.props.version || this.props.version === undefined || this.props.version === "undefined" || this.props.version === "" || this.props.version === null || this.props.version === "null") {
            version = "v1.0.0"
        } else {
            version = this.props.version
        }
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={"https://raw.githubusercontent.com/" + this.props.github + "/master/logo.png"} alt="logo" width="64px" height="64px" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><a href={this.props.sites}>{this.props.alt}</a></TableCell>
                <TableCell><a href={"https://github.com/" + this.props.github + "/releases/tag/" + version}>Download</a></TableCell>
                <TableCell><a href={"https://github.com/" + this.props.github}>{this.props.github}</a></TableCell>
            </TableRow>
        )
    }
}

export default Feature;