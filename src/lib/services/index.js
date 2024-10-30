export const GO_TO_APPOINTMENT = async () => {
  const section = document.getElementById("ScheduleMeetingForm");
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - 500,
      behavior: "smooth",
    });
  }
};
