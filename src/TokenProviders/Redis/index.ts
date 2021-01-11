import { ActionTokenProviderContract, ProviderActionTokenContract } from "adonis-action-token";

export class ActionTokenRedisProvider implements ActionTokenProviderContract {
    
    write (actionToken: ProviderActionTokenContract): Promise<string> {
        throw new Error("Method not implemented.");
    }

    read (token: string, type: string): Promise<ProviderActionTokenContract> {
        throw new Error("Method not implemented.");
    }

    destroy (token: string, type: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}