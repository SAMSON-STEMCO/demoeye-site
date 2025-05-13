function isHospitalOpen() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  const isOpenToday = day >= 1 && day <= 6; // Monday to Saturday
  const isWithinHours = hour >= 9 && hour < 18;

  return isOpenToday && isWithinHours;
}

function updateHospitalStatus() {
  const isOpen = isHospitalOpen();
  const statusText = isOpen ? "Open" : "Closed";

  document.querySelectorAll('.opcl').forEach(elem => {
    elem.textContent = statusText;
    elem.style.color = isOpen ? "" : "#ff7a1a"; // Reset to default if open, red if closed
  });
}

// Run on load
updateHospitalStatus();
