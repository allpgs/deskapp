import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Feature extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="logo" width="64px" height="64px" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><a href={this.props.sites}>{this.props.alt}</a></TableCell>
                <TableCell><a href={"https://github.com/" + this.props.github + "/releases"}>Download</a></TableCell>
                <TableCell><a href={"https://github.com/" + this.props.github}>{this.props.github}</a></TableCell>
            </TableRow>
        )
    }
}

export default Feature;