import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get("/getUserByRollno", controller.getUserByRollno);
router.get("/getPasswordByRollno", controller.getPasswordByRollno);
router.post("/updateDetailsByRollno", controller.updateDetailsByRollno);

export default router;
