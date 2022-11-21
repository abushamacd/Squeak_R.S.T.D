import React from "react";
import Header from "../../components/Header";

import { customersData, customersGrid } from "../../data/dummy";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Filter,
  Selection,
  Toolbar,
  Edit,
  Sort,
  Group,
} from "@syncfusion/ej2-react-grids";

const Grid = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete", "Search"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Table" title="Grid Table" />
      <GridComponent
        width={900}
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        allowFiltering={true}
        allowGrouping={true}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Selection, Toolbar, Edit, Sort, Filter, Group]}
        />
      </GridComponent>
    </div>
  );
};

export default Grid;
