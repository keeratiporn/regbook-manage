import { Router } from "express";
import {
    renderHome,
    search_vehicle_stock
} from "../controllers/homeController.js";
const router = Router();

router.get("/", renderHome)


router.post("/search_vehicle_stock", search_vehicle_stock)


export default router;