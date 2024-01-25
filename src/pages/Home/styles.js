import makeStyles from "@mui/styles/makeStyles";
import { images } from "../../assets";

const useStyles = makeStyles(() => ({
  mainContent: {
    minHeight: "70vh",
    backgroundImage: `url(${images.Girlbg})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundAttachment: "fixed",
  },
  blur: {
    backdropFilter: "blur(5px)",
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    paddingTop: "20vh",
    color: "white",
  },
  subtitle: {
    textAlign: "center",
    color: "white",
  },
  container: {
    marginTop: "3vh",
  },
}));

export { useStyles };
