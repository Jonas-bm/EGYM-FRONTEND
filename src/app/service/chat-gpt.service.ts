
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';


@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
    this.chatGpt();
  }

  generateText(prompt: string):Promise<string | undefined>{
   return this.openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: prompt,
        max_tokens: 256
      }).then(response => {
        return response.data.choices[0].text;
      }).catch(error=>{
        return '';
      });
  }

  async chatGpt(){

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chatCompletion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
});
console.log(chatCompletion.data.choices[0].message);
  }
}



