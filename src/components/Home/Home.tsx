/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBitCoinsArticle } from "../../actions/newsTypes";
import Button from "@material-ui/core/Button";
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridCellParams,
} from "@material-ui/data-grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme: Theme) => {
  const gridStyle: { root: any } = {
    root: {
      flex: 1,
      boxSizing: "border-box",
      position: "relative",
      border: `1px solid #b3b3b3`,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      ...theme.typography.body2,
      outline: "none",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      '@media (min-width: 768px) and (max-width: 1024px)': {
        width: '100%'
      },
      "& *, & *::before, & *::after": {
        boxSizing: "inherit",
      },
      "&.MuiDataGrid-root": {
        '@media (min-width: 768px) and (max-width: 1024px)': {
            width: '100%'
          },
      },
      "&.MuiDataGrid-autoHeight": {
        height: "auto",
      },
      "& .MuiDataGrid-main": {
        position: "relative",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      },
      "& .MuiDataGrid-overlay": {
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b3b3b3",
      },
      "& .MuiDataGrid-toolbar": {
        display: "flex",
        alignItems: "center",
        padding: "4px 4px 0",
      },
      "& .MuiDataGrid-columnsContainer": {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderBottom: `1px solid #b3b3b3`,
      },
      "& .MuiDataGrid-scrollArea": {
        position: "absolute",
        top: 0,
        zIndex: 101,
        width: 20,
        bottom: 0,
      },
      "& .MuiDataGrid-scrollArea-left": {
        left: 0,
      },
      "& .MuiDataGrid-scrollArea-right": {
        right: 0,
      },
      "& .MuiDataGrid-colCellWrapper": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
      },
      "& .MuiDataGrid-colCell, & .MuiDataGrid-cell": {
        WebkitTapHighlightColor: "transparent",
        lineHeight: null,
        padding: "0 10px",
      },
      "& .MuiDataGrid-colCell:focus-within, & .MuiDataGrid-cell:focus-within": {
        outline: `solid #b3b3b3 1px`,
        outlineWidth: 1,
        outlineOffset: -2,
      },
      "& .MuiDataGrid-colCell:focus, & .MuiDataGrid-cell:focus": {
        outline: `solid ${theme.palette.primary.main} 1px`,
      },
      "& .MuiDataGrid-colCellCheckbox, & .MuiDataGrid-cellCheckbox": {
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
      },
      "& .MuiDataGrid-colCell": {
        position: "relative",
        display: "flex",
        alignItems: "center",
      },
      "& .MuiDataGrid-colCell:not(.MuiDataGrid-colCellSorted) .MuiDataGrid-sortIcon":
        {
          opacity: 0,
          transition: theme.transitions.create(["opacity"], {
            duration: theme.transitions.duration.shorter,
          }),
        },
      "& .MuiDataGrid-colCell:not(.MuiDataGrid-colCellSorted):hover .MuiDataGrid-sortIcon":
        {
          opacity: 0.5,
        },
      "& .MuiDataGrid-colCellTitleContainer": {
        display: "flex",
        alignItems: "center",
        minWidth: 0,
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: "0 6px",
      },
      "& .MuiDataGrid-sortIcon, & .MuiDataGrid-filterIcon": {
        fontSize: "inherit",
      },
      "& .MuiDataGrid-colCellSortable": {
        cursor: "pointer",
      },
      "& .MuiDataGrid-colCellCenter .MuiDataGrid-colCellTitleContainer": {
        justifyContent: "center",
      },
      "& .MuiDataGrid-colCellRight .MuiDataGrid-colCell-draggable, & .MuiDataGrid-colCellRight .MuiDataGrid-colCellTitleContainer":
        {
          flexDirection: "row-reverse",
        },
      "& .MuiDataGrid-colCellCenter .MuiDataGrid-menuIcon, & .MuiDataGrid-colCellRight .MuiDataGrid-menuIcon":
        {
          marginRight: "auto",
          marginLeft: -6,
        },
      "& .MuiDataGrid-colCellTitle": {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "& .MuiDataGrid-colCellMoving": {
        backgroundColor: theme.palette.action.hover,
      },
      "& .MuiDataGrid-columnSeparator": {
        position: "absolute",
        right: -12,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#b3b3b3",
      },
      "& .MuiDataGrid-columnSeparatorResizable": {
        cursor: "col-resize",
        touchAction: "none",
        "&:hover": {
          color: theme.palette.text.primary,
          "@media (hover: none)": {
            color: "#b3b3b3",
          },
        },
        "&.Mui-resizing": {
          color: theme.palette.text.primary,
        },
      },
      "& .MuiDataGrid-iconSeparator": {
        color: "inherit",
      },
      "& .MuiDataGrid-menuIcon": {
        visibility: "hidden",
        fontSize: 20,
        marginRight: -6,
        display: "flex",
        alignItems: "center",
      },
      "& .MuiDataGrid-colCell:hover .MuiDataGrid-menuIcon, .MuiDataGrid-menuOpen":
        {
          visibility: "visible",
        },
      "& .MuiDataGrid-colCellWrapper.scroll .MuiDataGrid-colCell:last-child": {
        borderRight: "none",
      },
      "& .MuiDataGrid-dataContainer": {
        position: "relative",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      },
      "& .MuiDataGrid-window": {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        overflowX: "auto",
      },
      "& .MuiDataGrid-viewport": {
        position: "sticky",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      },
      "& .MuiDataGrid-row": {
        display: "flex",
        width: "fit-content",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        },
        "& .MuiDataGrid-cell": {
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          borderBottom: `1px solid #b3b3b3`,
        },
        "& .MuiDataGrid-cell.MuiDataGrid-cellEditing": {
          padding: 1,
          display: "flex",
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.background.paper,
          "&:focus-within": {
            outline: `solid ${theme.palette.primary.main} 1px`,
            outlineOffset: "-1px",
          },
        },
        "& .MuiDataGrid-editCellInputBase": {
          ...theme.typography.body2,
          padding: "1px 0",
          "& input": {
            padding: "0 16px",
            height: "100%",
          },
        },
        "& .MuiDataGrid-editCellBoolean": {
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        },
        '& .MuiDataGrid-booleanCell[data-value="true"]': {
          color: theme.palette.text.secondary,
        },
        '& .MuiDataGrid-booleanCell[data-value="false"]': {
          color: theme.palette.text.disabled,
        },
        "& .MuiDataGrid-colCellWrapper .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-cellWithRenderer": {
          display: "flex",
          alignItems: "center",
        },
        "& .MuiDataGrid-withBorder": {
          borderRight: `1px solid #b3b3b3`,
        },
        "& .MuiDataGrid-cellLeft": {
          textAlign: "left",
        },
        "& .MuiDataGrid-cellLeft.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellLeft.MuiDataGrid-cellEditing":
          {
            justifyContent: "flex-start",
          },
        "& .MuiDataGrid-cellRight": {
          textAlign: "right",
        },
        "& .MuiDataGrid-cellRight.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellRight.MuiDataGrid-cellEditing":
          {
            justifyContent: "flex-end",
          },
        "& .MuiDataGrid-cellCenter": {
          textAlign: "center",
        },
        "& .MuiDataGrid-cellCenter.MuiDataGrid-cellWithRenderer, & .MuiDataGrid-cellCenter.MuiDataGrid-cellEditing":
          {
            justifyContent: "center",
          },
        "& .MuiDataGrid-rowCount, & .MuiDataGrid-selectedRowCount": {
          alignItems: "center",
          display: "flex",
          margin: theme.spacing(0, 2),
        },
        "& .MuiDataGrid-footer": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 52,
          "& .MuiDataGrid-selectedRowCount": {
            visibility: "hidden",
            width: 0,
            height: 0,
            [theme.breakpoints.up("sm")]: {
              visibility: "visible",
              width: "auto",
              height: "auto",
            },
          },
        },
        "& .MuiDataGrid-colCell-dropZone .MuiDataGrid-colCell-draggable": {
          cursor: "move",
        },
        "& .MuiDataGrid-colCell-draggable": {
          display: "flex",
          width: "100%",
        },
        "& .MuiDataGrid-colCell-dragging": {
          background: theme.palette.background.paper,
          padding: "0 12px",
          borderRadius: theme.shape.borderRadius,
          opacity: theme.palette.action.disabledOpacity,
        },
      },
    },
  };
  return gridStyle;
});

export interface IProps {
  getBitCoinsArticle: () => {};
}

const Home: React.FunctionComponent<IProps> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { articles } = useSelector((store: any) => store.articleStateData);
  const [rows, setRows] = useState<any[]>(articles);
  const [state, setState] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);

  const getCustomDate = (date: string): any => {
    var dateObj = new Date(date);
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return day + "/" + month + "/" + year;
  };

  const [columns] = useState<GridColDef[]>([
    {
      field: "urlToImage",
      headerName: "Image",
      width: 160,
      renderCell: (params: GridCellParams) => (
        <img
          src={"" + params.value}
          alt="Image"
          style={{ width: "120px", margin: "10px" }}
        />
      ),
    },
    {
      field: "source",
      headerName: "Source",
      width: 150,
    },
    {
      field: "author",
      headerName: "Author",
      width: 350,
    },
    {
      field: "title",
      headerName: "Title",
      width: 650,
    },
    {
      field: "publishedAt",
      headerName: "Date",
      valueFormatter: (params: GridValueFormatterParams) => {
        if (params.value) {
          return getCustomDate("" + params.value);
        } else null;
      },
    },
    {
      field: "url",
      headerName: "URL",
      renderCell: (params: GridCellParams) => (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => window.open("" + params.value, "_blank")}
        >
          Open
        </Button>
      ),
    },
  ]);

  useEffect(() => {
    dispatch(getBitCoinsArticle());
  }, []);

  useEffect(() => {
    let articlesWithId: any[] = [];
    if (Array.isArray(state) && state.length) {
      state.reduce((acc, cur, ind) => {
        const source = cur.source.name;
        delete cur.source;
        const obj = {
          id: ind,
          source: source,
          ...cur,
        };
        acc.push(obj);
        return acc;
      }, articlesWithId);
    }
    setRows(articlesWithId);
  }, [state]);

  useEffect(() => {
    const copyOf = articles.map((each: any) => ({ ...each }));
    setState(copyOf);
  }, [articles]);

  const onInputSearch = (e: any) => {
    const toSearch: string = e.currentTarget.value;
    let filteredArticles = articles.reduce((acc: any, cur: any) => {
      if (
        cur.title.toLowerCase().includes(toSearch.toLowerCase()) ||
        cur.description.toLowerCase().includes(toSearch.toLowerCase())
      ) {
        const obj = {
          source: cur.source,
          ...cur,
        };
        acc.push(obj);
      }
      return acc;
    }, []);
    setState(filteredArticles);
    setPage(0);
  };

  return (
    <>
      <TextField
        style={{ marginBottom: "20px", width: "100%" }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={onInputSearch}
      />
      <div className={classes.root}>
        <DataGrid
          page={page}
          onPageChange={(params) => {
            setPage(params.page);
          }}
          pageSize={10}
          pagination
          columns={columns}
          rows={rows}
          autoHeight
          rowHeight={100}
        />
      </div>
    </>
  );
};

export default Home;