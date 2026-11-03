$(function () {
  const $form = $("#registrationForm");
  const storageKey = "kjsHealthcareRegistrations";
  const today = new Date();
  const todayValue = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");

  // Keep date choices meaningful and prevent selecting a future birth date or past appointment.
  $("#dateOfBirth").attr("max", todayValue);
  $("#appointmentDate").attr("min", todayValue);

  function setError(fieldId, message) {
    $("#" + fieldId).addClass("invalid").attr("aria-invalid", "true");
    $("#" + fieldId + "Error").text(message);
  }

  function clearErrors() {
    $(".error").text("");
    $("#registrationForm .invalid").removeClass("invalid").removeAttr("aria-invalid");
    $("#successMessage").text("").removeClass("visible");
  }

  $form.on("input change", "input, select, textarea", function () {
    $(this).removeClass("invalid").removeAttr("aria-invalid");
    $("#" + this.id + "Error").text("");
    $("#successMessage").text("").removeClass("visible");
  });

  $form.on("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const value = id => $.trim($("#" + id).val() || "");
    const checks = [
      ["patientName", value("patientName") !== "" && /^[A-Za-z ]+$/.test(value("patientName")), "Enter a name using letters and spaces only."],
      ["patientId", /^PID-\d{3}$/.test(value("patientId")), "Use the format PID-001."],
      ["mobile", /^[6-9]\d{9}$/.test(value("mobile")), "Enter a valid 10-digit Indian mobile number."],
      ["email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")), "Enter a valid email address."],
      ["dateOfBirth", value("dateOfBirth") !== "" && value("dateOfBirth") <= todayValue, "Enter a valid date of birth that is not in the future."],
      ["gender", value("gender") !== "", "Select a gender."],
      ["bloodGroup", value("bloodGroup") !== "", "Select a blood group."],
      ["address", value("address") !== "", "Address is required."],
      ["emergencyContact", /^[6-9]\d{9}$/.test(value("emergencyContact")), "Enter a valid 10-digit Indian emergency contact."],
      ["department", value("department") !== "", "Select a department."],
      ["appointmentDate", value("appointmentDate") !== "" && value("appointmentDate") >= todayValue, "Choose today or a future appointment date."]
    ];

    let isValid = true;
    $.each(checks, function (_, check) {
      if (!check[1]) {
        setError(check[0], check[2]);
        isValid = false;
      }
    });

    if (isValid) {
      const registration = {};
      $.each($form.serializeArray(), function (_, field) {
        registration[field.name] = $.trim(field.value);
      });

      let registrations = [];
      try {
        const savedRegistrations = JSON.parse(localStorage.getItem(storageKey) || "[]");
        registrations = Array.isArray(savedRegistrations) ? savedRegistrations : [];
      } catch (error) {
        registrations = [];
      }
      registrations.push(registration);
      localStorage.setItem(storageKey, JSON.stringify(registrations));
      this.reset();
      window.setTimeout(function () {
        $("#successMessage").html('Registration submitted successfully. <a href="patient-records.html">View registered patient records</a>.').addClass("visible");
      }, 0);
    } else {
      $(".invalid").first().trigger("focus");
    }
  });

  $form.on("reset", function () {
    window.setTimeout(clearErrors, 0);
  });
});
