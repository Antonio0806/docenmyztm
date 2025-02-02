import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { visuallyHidden } from "@mui/utils";
import CircularProgress from "@mui/material/CircularProgress";
import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
/* function createData(id, author, text, isVerified) {
  return {
    id,
    author,
    text,
    isVerified,
  };
} */

let rows = [];

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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "author",
    numeric: false,
    disablePadding: true,
    label: "Author",
  },
  {
    id: "text",
    disablePadding: true,
    label: "Text",
  },
  {
    id: "isVerified",
    numeric: true,
    disablePadding: false,
    label: "is verified?",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Wszystkie posty
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Zatwierdź">
          <Button>Zatwierdź</Button>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <Button>Filter</Button>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function AdminPage() {
    const dialogboxstyle = {
        marginTop: "25px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        top: "50%",
        left: "50%",
        textAlign: "center",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      };

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [postsFetched, setPostsFetched] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [secret, setSecret] = React.useState("");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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
        selected.slice(selectedIndex + 1)
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  React.useEffect(() => {
    rows = [];
    const getPostsFromBackend = async () => {
      const url = `https://docenmyztm-worker.santosubito.workers.dev/api/allposts`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        setPostsFetched(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getPostsFromBackend();
    postsFetched.forEach((element, index, array) => {
      rows.push({
        id: element.PostId,
        author: element.Author,
        text: element.PostText,
        isVerified: element.IsVerified,
      });
      console.log(rows);
      setIsLoading(false);
    });
  }, [rows]);
  const confirmPost = async (postId) => {
    const url = `https://docenmyztm-worker.santosubito.workers.dev/api/confirmpost?postid=${postId}&secret=${secret}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(postId, data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const loginHandle = async () => {
    console.log(secret);
    const url = `https://docenmyztm-worker.santosubito.workers.dev/api/confirmsecret?secret=${secret}`
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        if(data === true) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            console.log('W co ty grasz bratku, nie dostaniesz się tutaj kurde ten.')
        }
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
  }
  return (
    <>
    {isLoggedIn ? (<>{isLoading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={"medium"}
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
                    const isItemSelected = selected.includes(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.author}
                        </TableCell>
                        <TableCell align="right">{row.text}</TableCell>
                        <TableCell align="right">{row.isVerified}</TableCell>
                        <TableCell align="right">
                          <Button onClick={() => confirmPost(row.id)}>
                            Zatwierdź post
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows,
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
            />
          </Paper>
        </Box>
      )}</>) : (<>
            <Box sx={dialogboxstyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Siemano gangsterze, zaloguj się
      </Typography>
      <Divider sx={{ marginTop: "10px", marginBottom: "15px" }} />
      <Grid2 spacing={1}>
        <Grid2 size={12}>
          <TextField
            id="nickname-field"
            label="Tajny ciąg znaków kurde ten"
            variant="outlined"
            onChange={(e) => setSecret(e.target.value)}
            value={secret}
            slotProps={{htmlInput: {maxLength: 128}}}
          />
          <Divider/>
        </Grid2>
        <Grid2 size={12}>
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => {loginHandle()}}
          >
            Zaloguj mnie bratku
          </Button>
        </Grid2>
      </Grid2>
    </Box>
      </>)}
      
    </>
  );
}
