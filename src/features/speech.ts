'use strict';

import voiceCommands from '../data/voiceCommands.json';

const query: any = { name: 'microphone' };

navigator.permissions.query(query)
    .then((res: PermissionStatus): void => {
        res.onchange = (): void => {
            res.state === 'denied' && location.reload();
        };

        res.state !== 'denied' && speech();
    })
    .catch((err: Error): void => console.log(err));

function speech(): void {
    const commandsList: any = structuredClone(voiceCommands);
    const speech: SpeechSynthesis = speechSynthesis;
    // @ts-ignore
    const speechGrammar: webkitSpeechGrammarList = new webkitSpeechGrammarList();
    // @ts-ignore
    const speechRecognition: webkitSpeechRecognition = new webkitSpeechRecognition();
    const voice: SpeechSynthesisVoice = speech.getVoices()[51];
    let lastResponse: string;

    speechRecognition.continuous = false;
    speechRecognition.grammars = speechGrammar;
    speechRecognition.interimResults = false;
    speechRecognition.lang = 'en-US';
    speechRecognition.maxAlternatives = 1;

    speechRecognition.addEventListener('end', speechRecognition.start);
    speechRecognition.addEventListener('result', handleCommand);

    speechRecognition.start();

    function handleCommand(e: any): void {
        const command: string[] = Array.from(e.results)
            .map((result: any): string => result[0].transcript);

        e.results[0].isFinal
            && command[0].length
            && command[0] !== lastResponse
            && speak(command[0]);
    }

    function speak(command: string): void {
        const response: undefined | string = commandsList[command];
        const speechUtterance: SpeechSynthesisUtterance
            = new SpeechSynthesisUtterance((response && response[0]) ?? 'unknown command');

        lastResponse = command;
        speechUtterance.voice = voice;
        speech.speak(speechUtterance);

        if (response) {
            const link: null | HTMLElement
                = document.querySelector(`a[href="/${commandsList[command][1]}"]`);

            link && link.click();
        }
    }
}
