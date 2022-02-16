class Events {
  constructor({ timeout, onTimeout }) {
    this.timeout = timeout;
    this.onTimeout = onTimeout;
    this.tracker();
    this.startInterval();
  }

  startInterval() {
    this.updateExpiredTime();

    this.interval = setInterval(() => {
      const expiredTime = parseInt(
        localStorage.getItem("_trainingTime") || 0,
        10
      );
      if (expiredTime < Date.now()) {
        if (this.onTimeout) {
          this.onTimeout();
          this.cleanUp();
        }
      }
    }, 1000);
  }

  updateExpiredTime() {
    if (this.timeoutTracker) {
      clearTimeout(this.timeoutTracker);
    }
    this.timeoutTracker = setTimeout(() => {
      localStorage.setItem("_trainingTime", Date.now() + this.timeout * 1000);
    }, 300);
  }

  tracker() {
    window.addEventListener("click", () => console.log("clicked"));
  }

  cleanUp() {
    localStorage.removeItem("_trainingTime");
    clearInterval(this.interval);
    window.removeEventListener("click", () => {
      return;
    });
  }
}

export default Events;
