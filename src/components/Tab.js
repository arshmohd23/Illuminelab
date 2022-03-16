import React from "react";
class Tab extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="App">


                <table>
                    <tr>
                        <th>Name</th>
                        <th>School</th>
                        <th>Contact</th>
                        <th>Action1</th>
                        <th>Action2</th>
                    </tr>
                    {this.props.x.map((value, index) => (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.School}</td>
                            <td>{value.Contact}</td>
                            <td><button onClick={() => alert('Edit')}>edit</button></td>
                            <td><button onClick={() => alert('Update')}>Update</button>

                            </td>

                        </tr>
                    ))}
                </table>
            </div >);
    }

}
export default Tab;