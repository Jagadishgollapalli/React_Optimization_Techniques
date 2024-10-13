import React, { useState } from "react";
import { List } from "react-virtualized";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tchnq3_Virtualized() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <button onClick={() => fetchData()} className="btn btn-primary">
            Get data
          </button>
        </div>
        <div className="col-lg-12">
          <List
            width={1300}
            height={400}
            rowCount={items.length}
            rowHeight={50}
            rowRenderer={({ key, index, style }) => {
            const item = items[index];
              return (
                <div key={key} style={style}>
                  <div className="container-fluid">
                    <table className="table table-striped" style={{marginTop:"20px", textAlign:"left"}}>
                      <tbody>
                        <tr>
                          <td style={{ width: "13.33%" }}>{item.id}</td>
                          <td style={{ width: "53.33%" }}>{item.name}</td>
                          <td style={{ width: "33.33%" }}>{item.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }}
          ></List>
        </div>
      </div>
    </div>
  );
}
