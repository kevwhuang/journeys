import commands from '../data/commands.json';

const commandsList: any = structuredClone(commands);
const speech: SpeechSynthesis = speechSynthesis;
// @ts-ignore
const speechGrammar: webkitSpeechGrammarList = new webkitSpeechGrammarList();
// @ts-ignore
const speechRecognition: webkitSpeechRecognition = new webkitSpeechRecognition();
const voice: SpeechSynthesisVoice = speech.getVoices()[51];

let lastResponse: string;

function handleSpeech(e: any): void {
    const command: string[] = Array.from(e.results)
        .map((result: any): string => result[0].transcript);

    e.results[0].isFinal
        && lastResponse !== command[0]
        && speak(command[0]);
}

function speak(command: string): void {
    const response: undefined | string = commandsList[command];
    const speechUtterance: SpeechSynthesisUtterance
        = new SpeechSynthesisUtterance((response && response[0]) ?? 'unknown command');

    speechUtterance.voice = voice;

    lastResponse = command;
    speech.speak(speechUtterance);

    if (response) {
        const link: null | HTMLElement = document.querySelector(`a[href="/${commandsList[command][1]}"]`);

        link && link.click();
    }
}

speechRecognition.continuous = false;
speechRecognition.grammars = speechGrammar;
speechRecognition.interimResults = false;
speechRecognition.lang = 'en-US';
speechRecognition.maxAlternatives = 1;

speechRecognition.addEventListener('end', speechRecognition.start);
speechRecognition.addEventListener('result', handleSpeech);

speechRecognition.start();
