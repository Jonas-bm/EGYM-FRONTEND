import { Component } from '@angular/core';
import { ChatGPTService } from 'src/app/service/chat-gpt.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGPTComponent {
  userInput: string="";
  chatHistory: string[] = [];

  constructor(private chatService: ChatGPTService) { }

  sendMessage() {
    if (this.userInput) {
      this.chatHistory.push('User: ' + this.userInput);
      this.chatService.sendMessage(this.userInput).subscribe(response => {
        const reply = response['choices'][0]['text'];
        this.chatHistory.push('ChatGPT: ' + reply);
      });

      this.userInput = '';
    }
  }
}
