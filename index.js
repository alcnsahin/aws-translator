const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'your-access-key',
    secretAccessKey: 'your-secret-key',
    region: 'us-east-1'
});

const translate = new AWS.Translate();

const ttext = await translate.translateText({
	SourceLanguageCode: 'en',
	TargetLanguageCode: 'tr',
	Text: "Hello world"
}).promise();

console.log(ttext.TranslatedText);