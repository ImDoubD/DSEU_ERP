import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get("/getUserByRollno", controller.getUserByRollno);
router.post("/updateDetailsByRollno",controller.updateDetailsByRollno);
// router.post("/addExamRegisterationByRollNo",controller.addExamRegisterationByRollNo);
router.get("/fetchCoursesByRollNo",controller.fetchCoursesByRollNo);
router.get("/fetchExamRegistrationByRollNo",controller.fetchExamRegistrationByRollNo);
router.get("/fetchExamRegistrationByProgramAndSemester",controller.fetchExamRegistrationByProgramAndSemester);
router.post("/addUsers",controller.addUsers);
router.post("/addExamRegisterations",controller.addExamRegisterations);

export default router;