import Layout from "../components/layout";
import axios from "axios";

class USD extends React.Component {
  state = {
    keys: [],
    values: []
  };
  getMoneyValuesHandler = () => {
    axios
      .get(
        "https://openexchangerates.org/api/latest.json?app_id=5baba3aeba5f4ba181b924d20397300d"
      )
      .then(values => {
        let r;
        let arrKey = [];
        let arrValue = [];
        for (r in values.data.rates) {
          if (
            r === "RSD" ||
            r === "EUR" ||
            r === "CHF" ||
            r === "GBP" ||
            r === "RUB" ||
            r === "CNY" ||
            r === "AUD" ||
            r === "CAD"
          ) {
            arrKey.push(r);
            arrValue.push(values.data.rates[r]);
          }
        }

        this.setState({
          keys: arrKey
        });
        this.setState({
          values: arrValue
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getMoneyValuesHandler();
  }
  render() {
    const listing = (
      <React.Fragment>
        {this.state.keys.map((x, index) => {
          return (
            <tr className="table-dark" scope="row" key={index}>
              <td>{x}</td>
              {this.state.values.map((q, index2) => {
                if (index === index2) {
                  return <td key={index2 + "a"}>{q}</td>;
                }
              })}
            </tr>
          );
        })}
      </React.Fragment>
    );
    return (
      <Layout>
        <div>
          <h4>US Dollar $</h4>
          <table className="table table-hover">
            <tbody>{listing}</tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
export default USD;
