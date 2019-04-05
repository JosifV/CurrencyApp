import Layout from "../components/layout";

const Index = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = mm + " " + dd + " " + yyyy;

  return (
    <Layout>
      {/* <link rel="stylesheet" href="index.css" /> */}

      <div className="jumbotron">
        <h1 className="display-3">Currency value</h1>
        <p className="lead">
          A bureau de change is a business which, in competition with other
          similar businesses, makes its profit by selling currency at a higher
          exchange rate than a rate at which it buys the same currency, as well
          as any commission or fee it may charge. In setting its exchange rates,
          it must keep an eye on the rates quoted by competitors, and may be
          subject to government foreign exchange controls and other regulations.
        </p>

        <hr className="my-4" />
        <div className="cardGrid">
          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem;" }}
          >
            <div className="card-header">
              <h2>Euro €</h2>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                Official currency of the European Union.
              </h4>
              <p className="card-text">
                The name euro was officially adopted on 16 December 1995 in
                Madrid. The euro was introduced to world financial markets as an
                accounting currency on 1 January 1999, replacing the former
                European Currency Unit (ECU).
              </p>
            </div>
          </div>

          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem;" }}
          >
            <div className="card-header">
              <h2>US Dollar $</h2>
            </div>
            <div className="card-body">
              <h4 className="card-title">Official currency of the USA.</h4>
              <p className="card-text">
                By the time of the American Revolution, Spanish dollars gained
                significance because they backed paper money authorized by the
                individual colonies and the Continental Congress. Common in the
                Thirteen Colonies, Spanish dollars were even legal tender in one
                colony, Virginia.
              </p>
            </div>
          </div>

          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem;" }}
          >
            <div className="card-header">
              <h2>Russian Ruble ₽</h2>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                Official currency of the Russian Federation.
              </h4>
              <p className="card-text">
                The ruble is the oldest currency after the Pound sterling, and
                the world's first decimal currency. The ruble has been used in
                the Russian territories since the 13th century. The modern
                Russian ruble was created in December 1991.
              </p>
            </div>
          </div>

          <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem;" }}
          >
            <div className="card-header">
              <h2>GB Pound £</h2>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                Official currency of the Great Britain.
              </h4>
              <p className="card-text">
                Before decimalisation, the pound was divided into 20 shillings
                and each shilling into 12 pence, making 240 pence to the pound.
                By the 1950s, coins of Kings George III, George IV and William
                IV had disappeared from circulation.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <p>Currency value shown on today's date: {today}</p>
      </div>
      <style jsx>
        {`
          .cardGrid {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: 10px;
          }
        `}
      </style>
    </Layout>
  );
};
export default Index;
