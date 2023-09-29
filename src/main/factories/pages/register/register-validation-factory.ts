import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeRegisterValidation = (): ValidationComposite => {
  return ValidationComposite.build({
    name: ValidationBuilder.field('name').required().build(),
    email: ValidationBuilder.field('email').required().email().build(),
    password: ValidationBuilder.field('password').required().min(6).build(),
    passwordConfirmation: ValidationBuilder.field('passwordConfirmation')
      .required()
      .equals('password')
      .build()
  })
}
