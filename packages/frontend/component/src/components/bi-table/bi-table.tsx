import { Table } from '../../ui/Table';

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' }
];

const data = [
  { id: 1, name: 'John Doe', email: 'johnple.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe' },
  { id: 3, name: 'John Smith', email: 'john.smith' }
];

export function BITable() {
  return <Table columns={columns} data={data}></Table>;
}
