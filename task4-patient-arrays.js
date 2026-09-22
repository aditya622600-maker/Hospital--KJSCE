const patientAges = [22, 35, 67, 45, 29, 72, 56, 18, 64, 40];

function analyzeAges(ages) {
  const minimumAge = Math.min(...ages);
  const maximumAge = Math.max(...ages);
  const averageAge = ages.reduce(function (total, age) {
    return total + age;
  }, 0) / ages.length;
  const seniorCount = ages.filter(function (age) {
    return age >= 60;
  }).length;
  const below18Count = ages.filter(function (age) {
    return age < 18;
  }).length;
  const agesAbove60 = ages.filter(function (age) {
    return age > 60;
  });

  return `All Ages: ${ages.join(", ")}\nMinimum Age: ${minimumAge}\nMaximum Age: ${maximumAge}\nAverage Age: ${averageAge.toFixed(2)}\nSenior Citizens: ${seniorCount}\nPatients Below 18: ${below18Count}\nAges Above 60: ${agesAbove60.join(", ")}`;
}

document.getElementById("analyze").addEventListener("click", function () {
  const result = analyzeAges(patientAges);
  document.getElementById("result").textContent = result;
  console.log(result);
});
