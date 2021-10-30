export class Recuperar {
  public nombreUsuario = '';
  public palabraSecreta = '';
  public pass = '';
  public confirmPass = '';

  public cNombreUsuario(): string{
    if (this.nombreUsuario.trim() ===''){
      return 'debe ingresar usuario';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
      return 'usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
    }
    public cPalabraSecreta(): string{
      if (this.palabraSecreta.trim() ===''){
        return 'debe ingresar palabra secreta';
      }
      if (this.palabraSecreta.length < 3 || this.palabraSecreta.length > 8) {
        return 'usuario debe tener entre 3 y 8 caracteres.';
      }
      return '';
      }
      public validarPassword(): string {
        if (this.pass.trim() === '') {
          return 'ingresar la contraseña.';
        }
        for(let i = 0; i < this.pass.length; i++) {
          if ('0123456789'.indexOf(this.pass.charAt(i)) === -1) {
            return 'La contraseña debe ser numérica.';
          }
        }
        if (this.pass.length > 6) {
          return 'La contraseña debe debe tener 6 digitos.';
        }
        return '';
      }
      public cvalidarPassword(): string {
        if (this.confirmPass.trim() === '') {
          return 'ingresar la contraseña.';
        }
        for(let i = 0; i < this.confirmPass.length; i++) {
          if ('0123456789'.indexOf(this.confirmPass.charAt(i)) === -1) {
            return 'La contraseña debe ser numérica.';
          }
        }
        if (this.confirmPass.length > 6) {
          return 'La contraseña debe debe tener 6 digitos.';
        }
        return '';
      }
      public validarUsuario(): string {
        return this.cNombreUsuario()
          || this.cPalabraSecreta()
          || this.validarPassword()
          || this.cvalidarPassword();
      }

}
