import Reat from "react"
class Changetable extends Reat.Component {
    constructor(props) {
        super(props);
        this.state = {
            Table: [{ Name: "Arshad", School: "KV", Contact: 122 },
            { Name: "Sachin", School: "KV", Contact: 215 },
            { Name: "Sehwag", School: "Iert", Contact: 6854 }],

            Active: false

        }
    }
    changetable() {
        if (this.state.Active == false) {
            this.setState({
                Table: [{ Name: "Vikram", School: "IERT", Contact: 515415 },
                { Name: "Atif", School: "STS", Contact: 79518 },
                { Name: "Bhed", School: "CHS", Contact: 7444 }],
                Active: true
            })
        }
        else {
            this.setState({
                Table: [{ Name: "Arshad", School: "KV", Contact: 122 },
                { Name: "Sachin", School: "KV", Contact: 215 },
                { Name: "Sehwag", School: "Iert", Contact: 6854 }],

                Active: false

            })

        }
    }
    render() {
        return (
            <div className="App">


                <table>
                    <tr>
                        <th>Name</th>
                        <th>School</th>
                        <th>Contact</th>

                    </tr>
                    {this.state.Table.map((value, index) => (
                        <tr key={index}>
                            <td>{value.Name}</td>
                            <td>{value.School}</td>
                            <td>{value.Contact}</td>

                        </tr>
                    ))}
                </table>
                <button onClick={() => this.changetable()}>Change_Table</button>
            </div >
        );
    }

}

export default Changetable;
