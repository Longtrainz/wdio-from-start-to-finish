class Register {
  get email () { return $('input[name="email"]'); }
  get password () { return $('input[name="password"]'); }
  get confirmPassword () { return $('input[name="confirmPassword"]'); }
  get submit () { return $('button*=Register'); }
  get accountLoginLink () { return $('*=Already have an account?'); }

  register (email, password, confirmPassword) {
    confirmPassword = typeof confirmPassword === 'string' ? confirmPassword : password;

    this.email.setValue(email);
    this.password.setValue(password);
    this.confirmPassword.setValue(confirmPassword);

    this.submit.click();
  }

  isRegistered () {
    return browser.getUrl().includes('thank-you.html');
  }
}

module.exports = Register;
