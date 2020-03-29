const searchButton = document.querySelector(".job-search__button");

const searchJobs = () => {
  const jobTitle = document.querySelector(".job-search__input--title").value;
  const jobLocation = document.querySelector(".job-search__input--location")
    .value;

  localStorage.setItem("jobTitle", jobTitle);
  localStorage.setItem("jobLocation", jobLocation);
};

searchButton.addEventListener("click", searchJobs);
