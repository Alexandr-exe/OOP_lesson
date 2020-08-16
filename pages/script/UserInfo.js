class UserInfo {
  constructor(name, job, nameText, jobText) {
    this.name = name;
    this.job = job;
    this.nameText = nameText;
    this.jobText = jobText;
  }

  setUserInfo() {
    this.name.value = this.nameText.textContent;
    this.job.value = this.jobText.textContent;
  }

  updateUserInfo() {
    this.nameText.textContent = this.name.value;
    this.jobText.textContent = this.job.value
  }
}
