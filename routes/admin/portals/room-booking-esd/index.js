let express = require("express");
let router = express.Router();
let fq = require("fuzzquire");
let bookingsModel = fq("schemas/room-bookings");
let moment = require("moment");
let mapByDays = require("../common").mapByDays;

router.get("/", function(req, res, next) {
  bookingsModel.find(
    { end: { $gt: new moment() }, approval: "A", blockAll: false, av: true },
    null,
    { sort: { start: 1 } },
    function(err, bookings) {
      if (err) {
        return res.terminate(err);
      }
      return res.renderState("admin/portals/room-booking-all", {
        bookings: mapByDays(bookings)
      });
    }
  );
});

module.exports = router;
