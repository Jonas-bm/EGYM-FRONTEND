import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatResponse } from '../model/chatResponse';
/*import { ChatGPT } from 'chatgpt-api';

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
   // Create a new instance of ChatGPT class with your API key
   private chatgpt = new ChatGPT('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');

   // Define a method to send a message and receive a response from ChatGPT
   public async chat(message: string): Promise<string> {
     try {
       // Use chatgpt.query method with optional parameters
       const response = await this.chatgpt.query(message, {temperature: 0.8, max_tokens: 32});
       // Return the response text
       return response.text;
     } catch (error) {
       // Handle any errors
       console.error(error);
       return 'Something went wrong.';
     }
   }

}
*/


