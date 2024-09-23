import { useRef, useState } from 'react';

import { closestCenter, DndContext } from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import {
  ColumnDef,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
  type ColumnFiltersState,
  type Row as RowProps,
  type SortingState
} from '@tanstack/react-table';

import { Body, Cell, Head, Header, Row } from '.';
import { SizeFeature, SizeState } from './features/size';
import { useTableDnD } from './hooks/useTableDnD';
import { useTableVirtualizer } from './hooks/useTableVirtualizer';

// import CellsRange from './CellsRange';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    cellEditing: string;
    setCellEditing: (cellId: string) => void;
  }
}

interface TableProps {
  columns: ColumnDef<any>[];
  data: any[];
  size: SizeState;
  globalFilter: string;
  columnFilters: ColumnFiltersState;
}

export const Table = ({ columns, data: DefaultData, size, globalFilter, columnFilters }: TableProps) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState(DefaultData || []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [cellEditing, setCellEditing] = useState('');

  //列排序
  const { columnOrder, setColumnOrder, handleDragEnd, sensors } = useTableDnD(columns);

  const table = useReactTable({
    _features: [SizeFeature],
    data,
    columns,
    columnResizeMode: 'onChange',
    state: {
      columnOrder,
      sorting,
      columnFilters,
      globalFilter,
      size
      // pagination
    },
    meta: {
      // cellsRange,
      // setCellsRange,
      cellEditing,
      setCellEditing,
      updateData: (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value
              };
            }
            return row;
          })
        );
      }
    },
    // onSizeChange: setSize,
    // onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    getFacetedRowModel: getFacetedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true
  });

  const { rows } = table.getRowModel();

  //虚拟化
  const { virtualColumns, rowVirtualizer, virtualRows, virtualPaddingLeft, virtualPaddingRight } = useTableVirtualizer({
    table,
    container: tableContainerRef
  });

  return (
    <DndContext collisionDetection={closestCenter} modifiers={[restrictToHorizontalAxis]} onDragEnd={handleDragEnd} sensors={sensors}>
      <div ref={tableContainerRef} className="relative h-full overflow-auto">
        <table className="relative grid w-fit border-l border-t" style={{ transition: 'padding 0.2s ease 0s' }}>
          <Header>
            {table.getHeaderGroups().map(headerGroup => (
              <Row className="flex w-full" key={headerGroup.id}>
                {virtualPaddingLeft ? <th style={{ display: 'flex', width: virtualPaddingLeft }} /> : null}

                <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                  {virtualColumns.map(vc => {
                    const header = headerGroup.headers[vc.index];
                    return <Head key={header.id} header={header} />;
                  })}
                </SortableContext>

                {virtualPaddingRight ? <th style={{ display: 'flex', width: virtualPaddingRight }} /> : null}
              </Row>
            ))}
          </Header>

          <Body className="relative grid will-change-transform" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
            {virtualRows.map(virtualRow => {
              const row = rows[virtualRow.index] as RowProps<any>;
              const visibleCells = row.getVisibleCells();
              return (
                <Row
                  data-index={virtualRow.index}
                  ref={node => rowVirtualizer.measureElement(node as Element)}
                  key={row.id}
                  style={{
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`
                  }}
                >
                  {virtualPaddingLeft ? <td style={{ display: 'flex', width: virtualPaddingLeft }} /> : null}

                  {virtualColumns.map(vc => {
                    const cell = visibleCells[vc.index];
                    return <Cell data-table={`cell-${cell.id}`} key={cell.id} cell={cell} />;
                  })}

                  {virtualPaddingRight ? <td style={{ display: 'flex', width: virtualPaddingRight }} /> : null}
                </Row>
              );
            })}

            {/* <CellsRange cellsRange={cellsRange}></CellsRange> */}
          </Body>
        </table>
      </div>
    </DndContext>
  );
};
