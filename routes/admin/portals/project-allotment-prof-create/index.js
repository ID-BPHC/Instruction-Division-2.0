var express = require("express");
var router = express.Router();
var fq = require("fuzzquire");
var projectsModel = fq("schemas/projects");
var adminModel = fq("schemas/admins");

router.get("/", function(req, res, next) {
  try {
    let usertype = getUserType(req.user.email);
    usertype.then(val => {
      console.log(val);
      if (val.admin) {
        projectsModel.aggregate(
          [
            {
              $project: {
                _id: 1,
                title: 1,
                description: { $substr: ["$description", 0, 66] },
                instructor: 1,
                type: 1,
                updated: 1
              }
            },
            {
              $project: {
                _id: 1,
                title: 1,
                description: { $concat: ["$description", "..."] },
                instructor: 1,
                type: 1,
                updated: 1
              }
            },
            {
              $lookup: {
                from: "admins",
                localField: "instructor",
                foreignField: "email",
                as: "instructorForeign"
              }
            },
            {
              $match: {
                instructorForeign: { $ne: [] }
              }
            },
            {
              $unwind: "$instructorForeign"
            },
            {
              $addFields: { name: "$instructorForeign.name" }
            }
          ],
          function(err, result) {
            if (err) {
              console.log(err);
              return res.terminate("Error: Could not find project");
            }
            if (result.length == 0) {
              return res.renderState("custom_errors", {
                redirect: "/dashboard/project-allotment-prof-create",
                timeout: 2,
                supertitle: ".",
                message: "Project Not Found",
                details: "Invalid Project ID"
              });
            } else {
              return res.renderState(
                "admin/portals/project-allotment-prof-create",
                {
                  projects: result
                }
              );
            }
          }
        );
      } else {
        projectsModel.aggregate(
          [
            {
              $match: {
                instructor: "req.user.mail"
              }
            },
            {
              $project: {
                _id: 1,
                title: 1,
                description: { $substr: ["$description", 0, 66] },
                instructor: 1,
                type: 1,
                updated: 1
              }
            },
            {
              $project: {
                _id: 1,
                title: 1,
                description: { $concat: ["$description", "..."] },
                instructor: 1,
                type: 1,
                updated: 1
              }
            },
            {
              $lookup: {
                from: "admins",
                localField: "instructor",
                foreignField: "email",
                as: "instructorForeign"
              }
            },
            {
              $match: {
                instructorForeign: { $ne: [] }
              }
            },
            {
              $unwind: "$instructorForeign"
            },
            {
              $addFields: { name: "$instructorForeign.name" }
            }
          ],
          function(err, result) {
            if (err) {
              console.log(err);
              return res.terminate("Error: Could not find project");
            }
            if (project.length == 0) {
              return res.renderState("custom_errors", {
                redirect: "/dashboard/project-allotment-prof-create",
                timeout: 2,
                supertitle: ".",
                message: "Project Not Found",
                details: "Invalid Project ID"
              });
            } else {
              return res.renderState(
                "admin/portals/project-allotment-prof-create",
                {
                  projects: result
                }
              );
            }
          }
        );
      }
    });
  } catch (err) {
    return res.terminate(err);
  }
});
function getUserType(profmail) {
  return new Promise((resolve, reject) => {
    adminModel.findOne(
      {
        email: profmail
      },
      (err, result) => {
        if (err) reject(err);
        if (result != null && result != undefined) {
          if (result.superUser == true) {
            resolve({
              admin: true
            });
          } else {
            resolve({
              department: result.department
            });
          }
        }
      }
    );
  });
}

router.get("/view/:id", function(req, res, next) {
  try {
    projectsModel.findOne(
      {
        _id: req.sanitize(req.params.id)
      },
      (err, result) => {
        if (err) {
          return res.terminate(err);
        }
        res.renderState("admin/portals/project-allotment-prof-create/view", {
          project: result
        });
      }
    );
  } catch (err) {
    return res.terminate(err);
  }
});

router.get("/create", function(req, res, next) {
  try {
    if (req.user.superUser == true) {
      projectsModel.find({}, (err, result2) => {
        console.log("superUser");
        return res.renderState(
          "admin/portals/project-allotment-prof-create/create",
          {
            profs: result2
          }
        );
      });
    } else {
      projectsModel.findOne(
        {
          instructor: req.user.email
        },
        (err, result1) => {
          if (err) return res.terminate(err);
          if (result1 != undefined && result1 != null) {
            if (result1.head == true) {
              console.log("head");
              projectsModel.find(
                {
                  department: result1.department
                },
                (err, result2) => {
                  return res.renderState(
                    "admin/portals/project-allotment-prof-create/create",
                    {
                      profs: result2
                    }
                  );
                }
              );
            } else {
              console.log("normal");
              return res.renderState(
                "admin/portals/project-allotment-prof-create/create"
              );
            }
          }
        }
      );
    }
  } catch (err) {
    return res.terminate(err);
  }
});

router.delete("/view/:id", function(req, res, next) {
  try {
    if (req.user.superUser === true || req.user.head === true) {
      projectsModel.findOneAndRemove(
        {
          _id: req.sanitize(req.params.id)
        },
        (err, result) => {
          if (err) {
            return res.terminate(err);
          }
          res.send("success");
        }
      );
    } else {
      return res.terminate("You don't have permission to delete the project");
    }
  } catch (err) {
    return res.terminate(err);
  }
});
module.exports = router;
