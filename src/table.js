import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';

function createData(id, name, startdate, enddate, client, contact,venue) {
  return {
    id,
    name,
    startdate,
    enddate,
    client,
    contact,
    venue
  };
}

const rows = [
  createData(1, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(2, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Alka Nachan', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(3, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Bhagvan Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(4, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(5, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(6, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(7, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(8, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(9, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(10, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(11, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(12, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
  createData(13, 'Filled Name', 'Jan 12,2024', 'Jan 14,2024', 'Muhammad Asad', '+12345667890','Lorem Ipsum Dolor Amet'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'EventName',
    
    
  },
  {
    id: 'startdate',
    numeric: true,
    disablePadding: false,
    label: 'Event Start',
  },
  {
    id: 'enddate',
    numeric: true,
    disablePadding: false,
    label: 'Event End',
  },
  {
    id: 'client',
    numeric: true,
    disablePadding: false,
    label: 'Client Name',
  },
  {
    id: 'contact',
    numeric: true,
    disablePadding: false,
    label: 'Contact Info',
  },
  {
    id: 'venue',
    numeric: true,
    disablePadding: false,
    label: 'Venue',
  },
];

function EnhancedTableHead(props) {
  const {  order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow >
        <TableCell padding="checkbox" className='text-white'>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
             
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box  component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};





export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            className='background'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }} 
                   
                   
                  >
                    <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                     
                    >
                    
                      <div className='d-flex gap-10 text-white'>
                            <div >
                            <img  src="./images/Show.png" alt="upload"></img>
                            </div>
                            <div>  {row.name}</div>
                        </div>
                      
                    </TableCell>
                    <TableCell align="right">
                        <div className='text-white'> {row.startdate}</div>
                   
                        </TableCell>
                    <TableCell align="right" >
                        <div className='text-white'>  {row.enddate}</div>
                      </TableCell>
                    <TableCell align="right" className='text-white'>
                        <div className='text-white'> {row.client}</div>
                       </TableCell>
                    <TableCell align="right">
                        <div className='text-white'>{row.contact}</div>
                    </TableCell>
                    <TableCell align="right">
                        <div className='text-white'>{row.venue}</div>
                    </TableCell>

                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className='bg-black text-white header-section'
        />
      </Paper>
     
    </Box>
  );
}