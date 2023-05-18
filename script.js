if (location.href != "https://lego.iwonder.repl.co/" ) {
  if (document.cookie != "accessGranted=true") {
    location.href = 'https://lego.iwonder.repl.co/';
  }
}
if (document.cookie == "")
  document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
      alert('Checking Code!');
      inp_code = document.getElementById('inputcode').value;
      if (inp_code == "687069") {
        document.cookie = "accessGranted= true; expires=Tue, 19 Jan 2038 04:14:07 GMT";
        alert('access granted (ps. bookmark the page after this.)');
        location.href = 'https://lego.iwonder.repl.co/games';
        
      }
    }
  });