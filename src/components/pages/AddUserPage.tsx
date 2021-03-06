import Navbar from "../layout/Navbar";
import AddUser from "../layout/AddUserForm";
import Footer from "../layout/Footer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

//styling for this componant
const useStyles = makeStyles({
  root: {
    margin: "10px auto",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",

    "& > *": {
      widthMax: "80%",
      height: "100%",
    },
  },
});

//Main holds my structure for the main page
function AddUserPage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.main}>
            <AddUser />
          </div>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default AddUserPage;
