// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
const cors = require("cors");
module.exports.cors = cors;
module.exports.setCrossOriginToAll = function() {
    cors({
        origin: "*"
    });
};