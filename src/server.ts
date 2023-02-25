import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swaggerJson from "../swagger.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(3333, () => console.log("Server is running!"));
