import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


function createData(name, dateAdded, author, keywords) {
  let keywordList = keywords.split(', ');
  let items = [];

  for (const [index, value] of keywordList.entries()) {
    items.push(<Chip key={index} sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', marginRight: 1, height: "22px", textTransform: "uppercase", px: 0 }} label={value} variant="outlined" size="small"></Chip>)
  } 

  return {
    name,
    dateAdded,
    author,
    items,
  };
}

const rows = [
  createData("Canopy reflectance and transpiration", "11/19/21", "P.J. Sellers", "Stomatal, Photosynthetic"),
  createData("Ecophysiology of leaf photosynthesis", "9/15/21", "K. Hikosaka", "Ecophysiology, Leaf"),
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

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'dateAdded',
    numeric: false,
    disablePadding: false,
    label: 'Date Added',
  },
  {
    id: 'author',
    numeric: false,
    disablePadding: false,
    label: 'Author',
  },
  {
    id: 'keywords',
    numeric: false,
    disablePadding: false,
    label: 'Keywords',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ backgroundColor: 'white'}}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ backgroundColor: 'white', py: 1.2}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
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

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar
      variant="dense"
      sx={{
        pl: { sm: 0 },
        pr: { xs: 0, sm: 0 },
        minHeight: 0,
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%', mb: 1, px: 2, pt: 1 }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography id="tableTitle" component="div" variant="h5" sx={{ fontFamily: 'niveau-grotesk', flex: '1 1 100%', mb: 1}}>Sources</Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
        <Button startIcon={<AddIcon />} size="small" variant="outlined" sx={{  mb: 1, mr: 1, minWidth: "max-content"}} onClick={handleClickOpen}>
          Import Source
        </Button>
        {/* <Button size="small" variant="outlined" sx={{ mb: 1, minWidth: "max-content"}} onClick={handleClickOpen}>
          Export Selected
        </Button> */}
        <Dialog open={open} onClose={handleClose} maxWidth="600px">
                                <DialogTitle sx={{display: "flex"}}>
                                    Import Source
                                    <IconButton aria-label="close" onClick={handleClose} sx={{marginLeft: "auto", width: 32, height: 32}}>
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                </DialogTitle>
                                <DialogContent>
                                {/* <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We
                                    will send updates occasionally.
                                </DialogContentText> */}
                                <Button size="small" variant="outlined" sx={{  mb: 1, mr: 1, minWidth: "max-content"}} onClick={handleClickOpen}>
          Upload File
        </Button><Button size="small" variant="outlined" sx={{  mb: 1, mr: 1, minWidth: "max-content"}} onClick={handleClickOpen}>
          Paste URL
        </Button>
                                    <TextField
                                        size="small"
                                        margin="dense"
                                        id="name"
                                        label="Source Title"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        inputProps={{autocomplete: "off"}}
                                    />
                                    <TextField
                                        size="small"
                                        margin="dense"
                                        id="authro"
                                        label="Source Author"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        inputProps={{autocomplete: "off"}}
                                    />
                                    
                                </DialogContent>
                                <DialogActions sx={{mr: 1, mb: 1, mt: 3}}>
                                    <Button onClick={handleClose} variant="contained">Import Source</Button>
                                </DialogActions>
                            </Dialog>
        <Tooltip title="Filter list">
          <IconButton sx={{ py:0, mb: 1}}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer
          sx={{ borderLeft: '4px solid #124E9E' }}
        >
          <Table
            size="medium"
            sx={{ minWidth: 750, backgroundColor: "white" }}
            aria-labelledby="tableTitle"
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
              {rows.slice().sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.name)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='/source';}}
                        sx={{ cursor: "pointer" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left" sx={{ py: 1.5}}>{row.dateAdded}</TableCell>
                      <TableCell align="left" sx={{ py: 1.5}}>{row.author}</TableCell>
                      <TableCell align="left" sx={{ py: 1.5}}>{row.items}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
    </Box>
  );
}
