var sanitizeHtml = require("sanitize-html");

const { v4: uuidV4 } = require('uuid');
const ApiHelper=(module.exports = {
    addDeveloperNotes: (szNotes, objResponse) => {
        if (objResponse && szNotes) {
          console.log("Notes: " + szNotes);
          if (typeof szNotes != "object") {
            objResponse.szDeveloperNotesForEmail += ">. " + szNotes + "\n";
          }
          objResponse.szDeveloperNotes += ">. " + szNotes + "\n";
        } else {
          console.log("Notes: " + szNotes);
        }
    },
    parseRequestParams: async function (req, arExcludedKeys) {
        return new Promise(function (resolve, reject) {
          try {
            const { body, query } = req;
            let arRequestParams = "";
            let length = Object.keys(body).length;
            if (length) {
              arRequestParams = body;
            } else {
              arRequestParams = query;
            }
            let arReturn = [];
            for (let key in arRequestParams) {
              let szValue = arRequestParams[key];
              if (szValue == null || szValue == undefined) {
                szValue = "";
              }
    
              if (typeof szValue == "object") {
                arReturn[key] = szValue;
              } else {
                arReturn[key] = ApiHelper.sanitizeValue(szValue);
              }
              //}
            }
            resolve(arReturn);
          } catch (err) {
            reject(err);
          }
        });
      },
      sanitizeValue: (szValue) => {
        //else if (typeof szMessage == "object")
        let szSanitizedValue = "";
        if (typeof szValue == "boolean" || szValue === true || szValue === false) {
          szSanitizedValue = szValue;
          return szSansitizedValue;
        } else {
          if (typeof szValue == "number") {
            szSanitizedValue = sanitizeHtml(szValue);
          } else if (szValue && szValue != "") {
            szSanitizedValue = sanitizeHtml(szValue.trim());
          } else {
            szSanitizedValue = szValue;
          }
          var map = { amp: "&", lt: "<", gt: ">", quot: '"', "#039": "'" };
          szSanitizedValue = szSanitizedValue.replace(
            /&([^;]+);/g,
            (m, c) => map[c]
          );
          return szSanitizedValue;
        }
      },


      swireApiToken: () => {
        try {
          let secretKey = uuidV4();
          return secretKey;
        } catch (err) {
          // ApiHelper.writeLogs(err, "exception");
          throw err;
        }
      },
      apiInit: async (req, res) => {
        let arSharedObj = req;
        try {
          let { body, query, headers } = req;
          let arRequestParams = "";
          let length = Object.keys(body).length;
          if (length) {
            arRequestParams = body;
          } else {
            arRequestParams = query;
          }
    
          let szApiType = req.originalUrl;
          let token = arSharedObj.szReferenceToken;
          console.log('Api Type:',szApiType)
          console.log('Tokennn:',token)
          try {
            ApiHelper.addDeveloperNotes(
              "Adding api event logs in tblapieventlogs.",
              arSharedObj
            );
            let arExcludedApiTypes = [
              "/auth/getAuthToken",
              "/api/v1/user",
            ];
            if (arExcludedApiTypes.includes(szApiType)) {
              ApiHelper.addDeveloperNotes(
                "API type " + szApiType + " is added in excluded list",
                arSharedObj
              );
              return token;
            } else {
              // SwireRepository.addApiLogs(token, headers, arRequestParams, szApiType)
              //   .then(() => {
              //     ApiHelper.addDeveloperNotes(
              //       "Event logs successfully created.",
              //       arSharedObj
              //     );
              //     return token;
              //   })
              //   .catch((err) => {
              //     ApiHelper.addDeveloperNotes(
              //       "Opps! there is an exception, while adding api event logs into database.",
              //       arSharedObj
              //     );
              return token;
                  // ApiHelper.writeLogs(err,'exception', arSharedObj);
                 // ApiHelper.apiResponse(500, res, {}, 1, arSharedObj);
               
            }
          } catch (err) {
            ApiHelper.addDeveloperNotes(
              "Opps! there is an exception, while initializing api helper.",
              arSharedObj
            );
            // ApiHelper.writeLogs(err,'exception', arSharedObj);
            //ApiHelper.apiResponse(500, res, {}, 1, arSharedObj);
          }
        } catch (err) {
          ApiHelper.addDeveloperNotes(
            "Opps! there is an exception, while initializing api helper outer.",
            arSharedObj
          );
          // ApiHelper.writeLogs(err,'exception', arSharedObj);
         // ApiHelper.apiResponse(500, res, {}, 1, arSharedObj);
        }
      },
});

