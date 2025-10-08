import express from "express";
import contactRoutes from "./contact.routes";
import projectRoutes from "./project.routes";
import skillRoutes from "./skill.routes";
import toolRoutes from "./tool.routes";

const route = express.Router();

route.use("/contacts", contactRoutes);
route.use("/tools", toolRoutes);
route.use("/projects", projectRoutes);
route.use("/skills", skillRoutes);

export default route;
