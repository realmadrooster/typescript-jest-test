import { MessagingProtocol } from "../classes/interfaces/messagin-protocol";

export class Messaging implements MessagingProtocol{
 sendMessage(msg: string): void {
    console.log(`mensagem enviada:`, msg);
  }
}
