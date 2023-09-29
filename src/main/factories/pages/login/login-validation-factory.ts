import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build({
    email: ValidationBuilder.field('email').required().email().build(),
    password: ValidationBuilder.field('password').required().min(6).build()
  })
}
