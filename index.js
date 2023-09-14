function sendMail() {
  var params = {
    name: document.getElementById("floatingInput").value,
    email: document.getElementById("floatingEmail").value,
    phone: document.getElementById("floatingPassword").value,
    message: document.getElementById("floatingMessage").value,
  };

const serviceID = "service_qca121k";
const templateID = "template_hawy0oj";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
    console.log('SUCCESS!', res.status, res.text);
    (document.getElementById("floatingInput").value = ""),
    (document.getElementById("floatingEmail").value = ""),
    (document.getElementById("floatingPassword").value = ""),
    (document.getElementById("floatingMessage").value = ""),
    
    console.log(res);
    alert("your message sent successfully!");
  })
  .catch((err) => console.log(err))

}


