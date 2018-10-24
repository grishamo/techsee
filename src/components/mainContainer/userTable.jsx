import React, { Component } from "react";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import "./userTable.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// Content - contains data table
// .............................
// BootstrapTable - https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html

class UsersTable extends Component {
  state = {
    columns: [
      {
        dataField: "firstName",
        text: "First Name",
        sort: true
      },
      {
        dataField: "lastName",
        text: "Last Name",
        sort: true
      },
      {
        dataField: "country",
        text: "Country",
        sort: true
      },
      {
        dataField: "bugs",
        text: "Bugs"
      }
    ]
  };

  defaultSorted = [
    {
      dataField: "firstName",
      order: "asc"
    }
  ];

  render() {
    return (
      <div id="MainContent">
        <div className="tableHeader">
          Tester Info:
          {this.props.error != null && (
            <span className="errorMsg">{this.props.error.message}</span>
          )}
        </div>
        <BootstrapTable
          keyField="firstName"
          data={this.props.data}
          columns={this.state.columns}
          defaultSorted={this.defaultSorted}
        />

        {this.props.loading && (
          <PreloaderIcon
            className="preloader"
            loader={Oval}
            size={50}
            strokeWidth={8} // min: 1, max: 50
            strokeColor="#bfbfbf"
            duration={800}
          />
        )}

      </div>
    );
  }
}

export default UsersTable;
