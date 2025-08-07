

function toggleDescription(card) {
    const desc = card.querySelector(".desc");
    desc.classList.toggle("d-none");
  }



 


  const empData = {
  "10001": { name: "Priya", email: "priya1@nalcoindia.com" },
  "10234": { name: "Amit Kumar", email: "amitk4@nalcoindia.com" },
  "10567": { name: "Smita Das", email: "smitad@nalcoindia.com" },
  "10999": { name: "Rakesh Nayak", email: "rakeshn@nalcoindia.com" }
};

document.getElementById("empId").addEventListener("change", function () {
  const empId = this.value;
  const empNameField = document.getElementById("empName");
  const empEmailField = document.getElementById("empEmail");

  if (empData[empId]) {
    empNameField.value = empData[empId].name;
    empEmailField.value = empData[empId].email;
  } else {
    empNameField.value = "";
    empEmailField.value = "";
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    senderName: document.getElementById("senderName").value,
    senderEmail: document.getElementById("senderEmail").value,
    empId: document.getElementById("empId").value,
    empName: document.getElementById("empName").value,
    empEmail: document.getElementById("empEmail").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyi6cn8EmbQS4lL5eTPZadDv5jqv5Mr6SwtShkD8rKSmcZHOIo_eCmZoqmJ9DgPDjU41g/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(() => {
      document.getElementById("status").innerText = "Message sent successfully!";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Failed to send. Try again!";
    });
});
