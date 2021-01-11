declare module 'adonis-action-token' {
  export interface ActionTokenProviderContract {
  /**
   * Save the action token entity to storage and return 
   * storage identifier.
   * 
   * @param actionToken Action token entity to save on storage provider
   * 
   * @returns Return unique storage identifier
   */
  write (actionToken: ProviderActionTokenContract): Promise<string>
  
  /**
   * Get token entity from storage by token & type.
   * 
   * @param token Action token shared with final user. Token is not the storage provider identifier
   * @param type Action token type
   * 
   * @returns Return action token entity if exist (or null if not)
   */
  read (token: string, type: string): Promise<ProviderActionTokenContract | null>

  /**
   * Delete token from storage by token & type
   * 
   * @param token Action token shared with final user. Token is not the storage provider identifier
   * @param type Action token type
   */
  destroy (token: string, type: string): Promise<void>
}

export abstract class ProviderActionTokenContract {
  public token: string
  public data: string
  public action: string
  public ttl: number

  private get tokenProviderId (): string {
    return `${this.action}_${this.token}`
  }
}
}