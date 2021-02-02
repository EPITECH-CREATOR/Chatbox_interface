
class User
{
  constructor(nom, prenom, age, email, password) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.email = email;
    this.password = password;
    this.date_creation = Date();
  }

  dataToObject() {
    return (
      {
        nom: this.nom,
        prenom: this.prenom,
        age: this.age,
        email: this.email,
        password: this.password,
        created_at: this.date_creation,
      }
    );
  }
}

module.exports = User
