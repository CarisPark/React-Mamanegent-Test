import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/**
 * @ 화면에 출력
 */
class Customer extends React.Component {
    render() {
        return (
            <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><image src={this.props.image} alt="imagetest"/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.etc}</TableCell>
                </TableRow>
            </div>
        )
    }
}

export default Customer;
