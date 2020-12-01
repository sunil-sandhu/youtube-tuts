const companyEmailAddresses = {
  finance: ["jill@companyx.com", "frank@companyx.com"],
  engineering: {
    qa: ["ahmed@companyx.com", "taylor@companyx.com"],
    development: ["cletus@companyx.com", "bojangles@companyx.com", "bibi@companyx.com"],
  },
  management: {
    directors: ["tanya@companyx.com", "odell@companyx.com", "amin@companyx.com"],
    projectLeaders: [
      "bobby@companyx.com",
      "jack@companyx.com",
      "harry@companyx.com",
      "oscar@companyx.com",
    ],
    hr: ["mo@companyx.com", "jag@companyx.com", "ilaria@companyx.com"],
  },
  sales: {
    business: {
      senior: ["larry@companyx.com", "sally@companyx.com"],
    },
    client: {
      senior: ["jola@companyx.com", "amit@companyx.com"],
      exec: ["asha@companyx.com", "megan@companyx.com"],
    },
  },
};

function sendEmail(emailAddress) {
  console.log(`sending email to ${emailAddress}`);
}

function iterativeGatherEmailAddresses(departments) {
  let departmentKeys = Object.keys(departments);
  for (let i = 0; i < departmentKeys.length; i++) {
    if (Array.isArray(departments[departmentKeys[i]])) {
      departments[departmentKeys[i]].forEach((email) => sendEmail(email));
    } else {
      for (let dept in departments[departmentKeys[i]]) {
        if (Array.isArray(departments[departmentKeys[i]][dept])) {
          departments[departmentKeys[i]][dept].forEach((email) => sendEmail(email));
        } else {
          for (let subDept in departments[departmentKeys[i]][dept])
            if (Array.isArray(departments[departmentKeys[i]][dept][subDept])) {
              departments[departmentKeys[i]][dept][subDept].forEach((email) => sendEmail(email));
            }
        }
      }
    }
  }
}

iterativeGatherEmailAddresses(companyEmailAddresses);
