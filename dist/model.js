"use strict";
// model.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStudentCampus = exports.fetchStudent = exports.updatePassword = exports.otpVerifyModel = exports.otpUpdateModel = exports.fetchEmailId = exports.fetchProgram = exports.insertExamRegisterations = exports.insertUsers = exports.fetchExamRegistrationProgramAndSemester = exports.fetchExamRegistrationCourse = exports.fetchExamRegistration = exports.fetchCoursesRollNo = exports.fetchCourses = exports.fetchUser = exports.putDetailsByRollno = exports.pushToken = exports.fetchTokenByRollNo = exports.updateToken = exports.fetchPasswordByEmailId = exports.fetchPasswordByRollNo = void 0;
const db_1 = __importDefault(require("./db"));
const queries_1 = require("./queries");
function fetchPasswordByRollNo(rollno) {
    console.log("model rollno: ", rollno);
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.getPasswordByRollno, [rollno], (error, results) => {
            if (error) {
                console.log("eror: ", error);
                reject(error);
            }
            else {
                // console.log("error mode: ",results)
                resolve(results);
            }
        });
    });
}
exports.fetchPasswordByRollNo = fetchPasswordByRollNo;
function fetchPasswordByEmailId(emailid) {
    console.log("model admin emailid: ", emailid);
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.getPasswordByEmailId, [emailid], (error, results) => {
            if (error) {
                console.log("eror: ", error);
                reject(error);
            }
            else {
                // console.log("error mode: ",results)
                resolve(results);
            }
        });
    });
}
exports.fetchPasswordByEmailId = fetchPasswordByEmailId;
function updateToken(token, rollno, last_modified, expiry) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.putToken, [token, last_modified, expiry, rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.updateToken = updateToken;
function fetchTokenByRollNo(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchToken, [rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchTokenByRollNo = fetchTokenByRollNo;
function pushToken(rollno, token, created_at, last_modified, expiry) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.pushTokenQuery, [rollno, token, created_at, last_modified, expiry], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.pushToken = pushToken;
function putDetailsByRollno(rollno, program, semester, phone, campus, emailid, gender, alternate_phone, father, mother, guardian, aadhar, abc_id, pwbd_certificate, photo, last_modified, program_type, password, year_of_admission) {
    console.log("here");
    return new Promise((resolve, reject) => {
        console.log("here");
        // console.log("rollno:", rollno);
        // console.log("program:", program);
        // console.log("semester:", semester);
        // console.log("phone:", phone);
        // console.log("campus:", campus);
        // console.log("emailid:", emailid);
        // console.log("gender:", gender);
        // console.log("alternate_phone:", alternate_phone);
        // console.log("father:", father);
        // console.log("mother:", mother);
        // console.log("guardian:", guardian);
        // console.log("aadhar:", aadhar);
        // console.log("abc_id:", abc_id);
        // console.log("pwbd_certificate:", pwbd_certificate);
        // console.log("photo:", photo);
        // console.log("last_modified:", last_modified);
        // console.log("program_type:", program_type);
        // console.log("password:", password);
        db_1.default.query(queries_1.updateDetailsByRollno, [
            program,
            semester,
            phone,
            campus,
            emailid,
            gender,
            alternate_phone,
            father,
            mother,
            guardian,
            aadhar,
            abc_id,
            pwbd_certificate,
            photo,
            last_modified,
            program_type,
            password,
            rollno,
            year_of_admission
        ], (error, results) => {
            if (error) {
                console.log("model", error);
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.putDetailsByRollno = putDetailsByRollno;
function fetchUser(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.getUserByRollno, [rollno], (error, results) => {
            if (error) {
                console.log("Model error: ", error);
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchUser = fetchUser;
// export function addExamRegisteration ( rollno:string, course_code:string, last_modified:string ): Promise<QueryResult<any>> {
//   return new Promise((resolve, reject) => {
//     pool.query(addExamRegisterationByRollno, [rollno, course_code, last_modified], (error, results)=>{
//       if(error) {
//         console.log("Exam registeration model error: ",error);
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     })
//   })
// }
function fetchCourses(semester, program) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchCoursesBySemester, [semester, program], (error, results) => {
            if (error) {
                console.log("fetch courses error: ", error);
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchCourses = fetchCourses;
function fetchCoursesRollNo(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchCoursesByRollNo, [rollno], (error, results) => {
            if (error) {
                console.log("fetch courses by roll no error: ", error);
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchCoursesRollNo = fetchCoursesRollNo;
function fetchExamRegistration(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchExamRegistrationByRollNo, [rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchExamRegistration = fetchExamRegistration;
function fetchExamRegistrationCourse(course_code) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchExamRegistrationByCourseCode, [course_code], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchExamRegistrationCourse = fetchExamRegistrationCourse;
function fetchExamRegistrationProgramAndSemester(campus, program_type, program, semester) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchExamRegistrationByProgramAndSemester, [campus, program_type, program, semester], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchExamRegistrationProgramAndSemester = fetchExamRegistrationProgramAndSemester;
function insertUsers(users) {
    return new Promise((resolve, reject) => {
        const query = `
      INSERT INTO users (rollno, name, password)
      VALUES ${users
            .map((user) => {
            return `('${user.rollno}', '${user.name}', '${user.password}')`;
        })
            .join(", ")}
    `;
        db_1.default.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.insertUsers = insertUsers;
function insertExamRegisterations(registeration) {
    return new Promise((resolve, reject) => {
        const last_modified = new Date().toString();
        const query = `
      INSERT INTO exam_registeration (rollno, course_code, last_modified)
      VALUES ${registeration.course_code
            .map((courseCode) => {
            return `('${registeration.rollno}', '${courseCode}', '${last_modified}')`;
        })
            .join(", ")}
    `;
        db_1.default.query(query, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.insertExamRegisterations = insertExamRegisterations;
function fetchProgram(program_type) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchProgramByProgramType, [program_type], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchProgram = fetchProgram;
function fetchEmailId(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchEmailIdByRollno, [rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchEmailId = fetchEmailId;
function otpUpdateModel(otp, rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.updateOTP, [otp, rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.otpUpdateModel = otpUpdateModel;
function otpVerifyModel(rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.verifyOTP, [rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.otpVerifyModel = otpVerifyModel;
function updatePassword(password, rollno) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.updatePasswordByOtp, [password, rollno], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.updatePassword = updatePassword;
function fetchStudent(program_type, program, semester) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchStudentByProgramAndSemester, [program_type, program, semester], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchStudent = fetchStudent;
function fetchStudentCampus(campus, program_type, program, semester) {
    return new Promise((resolve, reject) => {
        db_1.default.query(queries_1.fetchStudentByCampusAndProgram, [campus, program_type, program, semester], (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.fetchStudentCampus = fetchStudentCampus;