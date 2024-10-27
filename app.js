console.log("Hello World");
const name = "Elizabeth Booth";
let hasDownloadedResume = false;

function resumeAlert() {
  if (hasDownloadedResume == false) {
    setTimeout(() => {
      alert("Your resume downloaded successfully!");
    }, 2000);
  }
  hasDownloadedResume = true;
}

function showGreeting(name) {
  let todaysDate = new Date();
  let theHour = todaysDate.getHours();
  if (theHour < 12) {
    return "Good morning my name is " + name + " welcome to my portfolio";
  } else if (theHour === 12) {
    return "Good afternoon, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 12 && theHour < 18) {
    return "Good afternoon my name is " + name + " welcome to my portfolio";
  } else if (theHour === 18) {
    return "Good evening, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 18) {
    return "Good evening my name is " + name + " welcome to my portfolio";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("greetingSec").innerHTML = showGreeting(name);
});

function daysUntilDeadline(projectdate) {
  let projectCast = new Date(projectdate);
  let currentDay = new Date();
  let difference = projectCast - currentDay;
  let numDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return "Days until complete: " + numDays;
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("daysTil").innerHTML = daysUntilDeadline("11/1/2024");
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      const enteredSkill = document.getElementById("usrInput").value;

      if (enteredSkill.trim() != "") {
        const li = document.createElement("li");
        li.className = "col-2";
        li.textContent = enteredSkill;

        document.querySelector("#skillsList .row").appendChild(li);

        document.getElementById("usrInput").value = "";
      }
    });
});

const projects = [
  {
    title: "MIPS Assembly Random Number Generator",
    description:
      "This project introduced me to lower level languages and their application to physical electronics. MIPS uses registers which correlate to memory directly on the chip. I used an algorithm which simulated a random generator.",
    deadline: new Date("2024-11-23"),
    imageURL: "reportCover.png",
  },
  {
    title: "DNA project",
    description:
      "A full-stack web application built with HTML, CSS, and JavaScript, demonstrating the principles of responsive design.",
    deadline: new Date("2024-10-31"),
    imageURL: "DNAproject1.png",
  },
  {
    title: "Placeholder project",
    description:
      "Analyzed large datasets using Python and Pandas, creating visualizations and reports to summarize findings.",
    deadline: new Date("2024-09-30"),
    imageURL: "stockprojectimg.jpg",
  },
];

function displayProjects(projects) {
  const $projectsContainer = $("#projectsDynam");
  $projectsContainer.empty(); // Clear existing content

  projects.forEach((project, index) => {
    const currentDay = new Date();
    const status = project.deadline > currentDay ? "Ongoing" : "Completed";

    const projectCard = `
      <div class="col-lg mb-4">
        <div class="card cardOne">
          <img class="card-img-top" src="${
            project.imageURL
          }" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="list-group-item deadlineProj">Deadline: ${project.deadline.toDateString()}</div>
            <div class="list-group-item statusProj">Status: ${status}</div>
          </div>
        </div>
      </div>
    `;
    $projectsContainer.append(projectCard);
  });
}

displayProjects(projects);

function sortProjectsByDeadline(ascending = true) {
  projects.sort((a, b) =>
    ascending ? a.deadline - b.deadline : b.deadline - a.deadline
  );
  displayProjects(projects);
}

$("#sortButton").click(function () {
  sortProjectsByDeadline(true);
});

document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  document
    .getElementById("downloadResumeBtn")
    .addEventListener("click", function () {
      count++;
      document.getElementById("downloadResumeBtn").innerHTML = `
    <p>How many times you downloaded my resume: ${count}</p>
    `;
    });
});

const educationData = [
  { title: "NAU", date: "2023-Present", location: "Flagstaff, AZ" },
  {
    title: "Robothon",
    date: "Fall 2023",
    description:
      "Arduino microcontrollers were used to control a robot through an obstacle course.",
  },
  {
    title: "Unreal Engine 5",
    date: "Spring 2023",
    description: "Intro to basic game development.",
  },
];

const experienceData = [
  {
    role: "Lorem ipsum dolor",
    company: "Dolor Sit Amet",
    startDate: "Consectetur 2022",
    endDate: "Adipiscing 2022",
    description:
      "Worked on lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    role: "Tempor Incididunt",
    company: "Labore Et Dolore",
    startDate: "Magna 2021",
    endDate: "Aliqua 2021",
    description:
      "Taught lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function tableCreation(headers, data, experience) {
  const table = document.createElement("table");
  table.classList.add("table", "table-bordered");

  const thead = document.createElement("thead");
  thead.classList.add("thead-dark");

  const headerRows = document.createElement("tr");

  headers.forEach((header) => {
    const thCreation = document.createElement("th");
    thCreation.textContent = header;
    headerRows.appendChild(thCreation);
  });

  thead.appendChild(headerRows);
  table.appendChild(thead);

  const tableBody = document.createElement("tbody");
  data.forEach((row) => {
    const tableRow = document.createElement("tr");
    for (const i in row) {
      const tableD = document.createElement("td");
      tableD.innerHTML = row[i];
      tableRow.appendChild(tableD);
    }
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody);
  return table;
}

function insertTables() {
  const tableContainer = document.getElementById("tables-container");
  const educationTbHeader = ["Title", "Date", "Details"];

  const educationTable = tableCreation(educationTbHeader, educationData, false);
  tableContainer.appendChild(educationTable);

  const experienceHeaders = [
    "Role",
    "Company",
    "Start Date",
    "End Date",
    "Description",
  ];
  const experienceTable = tableCreation(
    experienceHeaders,
    experienceData,
    true
  );
  tableContainer.appendChild(experienceTable);
}

window.onload = insertTables;

$(document).ready(function () {
  let skillsArray = [];

  function addSkill(skill) {
    if (skillsArray.includes(skill)) {
      alert("This skill already exists.");
      return;
    }

    skillsArray.push(skill);
    displaySkills();
  }
  function displaySkills() {
    let $skillsList = $("#skillsList");
    $skillsList.empty();

    skillsArray.forEach((skill, index) => {
      let $skillItem = $(`
                        <li>
                            ${skill}
                            <button class="editSkill btn btn-outline-dark" data-index="${index}">Edit</button>
                            <button class="deleteSkill btn btn-outline-dark" data-index="${index}">Delete</button>
                        </li>
                    `);

      $skillItem.hide().appendTo($skillsList).slideDown();
    });
  }

  $("#submitButton").click(function () {
    let skill = $("#usrInput").val().trim();
    console.log(skill);

    if (skill) {
      addSkill(skill);
      $("#usrInput").val("");
    } else {
      alert("Please enter a skill.");
    }
  });

  $("#skillsList").on("click", ".editSkill", function () {
    let index = $(this).data("index");
    let currentSkill = skillsArray[index];

    let newSkill = prompt("Edit Skill:", currentSkill);
    if (newSkill && newSkill.trim() !== "" && !skillsArray.includes(newSkill)) {
      skillsArray[index] = newSkill;
      displaySkills();
    } else if (newSkill === null) {
      return;
    } else {
      alert("Invalid input or skill already exists.");
    }
  });

  $("#skillsList").on("click", ".deleteSkill", function () {
    let index = $(this).data("index");
    let $skillItem = $(this).closest("li");

    $skillItem.slideUp(400, function () {
      skillsArray.splice(index, 1);
      displaySkills();
    });
  });
});

$(document).ready(function () {
  const dropdownItems = [
    { name: "Summary", target: "#summary" },
    { name: "Education", target: "#education" },
    { name: "Skills", target: "#skills" },
    { name: "Projects", target: "#projects" },
    { name: "Contacts", target: "#contacts" },
  ];

  const $dropdownMenu = $("#dropdownMenu");
  dropdownItems.forEach((item) => {
    const $menuItem = $(
      `<li><a class="dropdown-item" href="${item.target}">${item.name}</a></li>`
    );
    $dropdownMenu.append($menuItem);
  });
  $dropdownMenu.on("click", "a", function (event) {
    event.preventDefault();
    const target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - $(".navbar").outerHeight(),
      },
      100
    );
  });
});
$(document).ready(function () {
  let skillsArray = [];

  function displaySkills() {
    const $skillsList = $("#skillsList");
    $skillsList.empty();

    skillsArray.forEach((skill, index) => {
      const $skillItem = $(`
        <li>
          ${skill}
          <button class="editSkill btn btn-outline-dark" data-index="${index}">Edit</button>
          <button class="deleteSkill btn btn-outline-dark" data-index="${index}">Delete</button>
        </li>
      `);
      $skillItem.hide().appendTo($skillsList).fadeIn();
    });
  }

  function addSkill(skill) {
    if (skillsArray.includes(skill)) {
      alert("This skill already exists.");
      return;
    }
    skillsArray.push(skill);
    displaySkills();
  }

  $("#usrInput").keydown(function (event) {
    const skill = $(this).val().trim();

    if (event.key === "Enter") {
      event.preventDefault();
      if (skill) {
        addSkill(skill);
        $(this).val("");
      } else {
        alert("Please enter a skill.");
      }
    } else if (event.key === "Escape") {
      $(this).val("");
    }
  });

  $("#submitButton").click(function () {
    const skill = $("#usrInput").val().trim();
    if (skill) {
      addSkill(skill);
      $("#usrInput").val("");
    }
  });

  $("#skillsList").on("click", ".deleteSkill", function () {
    const index = $(this).data("index");
    skillsArray.splice(index, 1);
    displaySkills();
  });

  $("#skillsList").on("click", ".editSkill", function () {
    const index = $(this).data("index");
    const newSkill = prompt("Edit skill:", skillsArray[index]);
    if (newSkill && newSkill.trim() !== "") {
      skillsArray[index] = newSkill;
      displaySkills();
    } else {
      alert("Please enter a valid skill name.");
    }
  });
});
