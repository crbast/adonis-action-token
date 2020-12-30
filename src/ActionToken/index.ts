export default class ActionToken {
  public token: string
  public data: string
  public action: string
  public ttl: number

  private get tokenProviderId () {
    return `${this.action}_${this.token}`
  }

  private constructor (action: string, token: string, ttl: number, data: string) {
    this.action = action
    this.token = token
    this.ttl = ttl
    this.data = data
  }
}
