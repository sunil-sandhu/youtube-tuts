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

function recursiveGatherEmailAddresses(departments) {
  let departmentKeys = Object.keys(departments);
  departmentKeys.forEach((dept) => {
    if (Array.isArray(departments[dept])) {
      return departments[dept].forEach((email) => sendEmail(email));
    }
    return recursiveGatherEmailAddresses(departments[dept]);
  });
}

recursiveGatherEmailAddresses(companyEmailAddresses);
