
import app from "./app.js";

const PORT = process.env.PORT || 5300;

//moongose connection

    app.listen(PORT, () => {
      console.log("app listening on port ", PORT);
    })