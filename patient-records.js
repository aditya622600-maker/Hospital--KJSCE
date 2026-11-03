$(function () {
  const storageKey = "kjsHealthcareRegistrations";

  function getRegistrations() {
    try {
      const registrations = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(registrations) ? registrations : [];
    } catch (error) {
      return [];
    }
  }

  function formatDate(dateValue) {
    if (!dateValue) return "—";
    return new Date(dateValue + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric"
    });
  }

  function renderRegistrations() {
    const registrations = getRegistrations();
    const $body = $("#registrationsBody").empty();
    $("#emptyRegistrations").toggle(registrations.length === 0);
    $("#clearRegistrations").prop("disabled", registrations.length === 0);

    $.each(registrations, function (_, registration) {
      const $row = $("<tr>");
      $("<td>").append($("<strong>").text(registration.patientName), $("<br>"), document.createTextNode(registration.patientId)).appendTo($row);
      $("<td>").append($("<a>", { href: "tel:" + registration.mobile, text: registration.mobile }), $("<br>"), document.createTextNode(registration.email)).appendTo($row);
      $("<td>").text(formatDate(registration.dateOfBirth)).appendTo($row);
      $("<td>").text(registration.gender).appendTo($row);
      $("<td>").text(registration.bloodGroup).appendTo($row);
      $("<td>").text(registration.address).appendTo($row);
      $("<td>").append($("<a>", { href: "tel:" + registration.emergencyContact, text: registration.emergencyContact })).appendTo($row);
      $("<td>").text(registration.department).appendTo($row);
      $("<td>").text(formatDate(registration.appointmentDate)).appendTo($row);
      $body.append($row);
    });
  }

  renderRegistrations();

  $("#clearRegistrations").on("click", function () {
    localStorage.removeItem(storageKey);
    renderRegistrations();
  });
});
