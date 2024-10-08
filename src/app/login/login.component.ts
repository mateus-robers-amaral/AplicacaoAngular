import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  submith() {
    const email = (document.getElementById("email") as HTMLInputElement)
    const pass = (document.getElementById("pass") as HTMLInputElement)

    const body = {
      email: email.value,
      password: pass.value
    }

    fetch("http://localhost:8080/user", { method: "POST", body: JSON.stringify(body) })
      .then(resposta => { console.log("deu bom") })
      .catch(e => console.error("deu erro"))
  }

}
