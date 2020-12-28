import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class ActionTokenProvider {
  constructor (protected app: ApplicationContract) {}
  public static needsApplication = true
}
