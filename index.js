var APP_ID = "amzn1.ask.skill.787bea41-e4c7-4473-b621-6fab77c8bfc8";

var https = require('https');
//I don't think I need this

var AlexaSkill = require('./AlexaSkill');

WhereToEatSkill.prototype = Object.create(AlexaSkill.prototype);
WhereToEatSkill.prototype.constructor = WhereToEatSkill;

WhereToEatSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("WhereToEatSkill onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

WhereToEatSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("WhereToEatSkill onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    getWelcomeResponse(response);
};

WhereToEatSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

WhereToEatSkill.prototype.intentHandlers = {

    "GetWhereToEatIntent": function (intent, session, response) {
        handleWhereToEatRequest(intent, session, response);
    },

    "GetNextPlaceIntent": function (intent, session, response) {
        handleNextPlaceRequest(intent, session, response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "With Where To Eat, you can find a place to eat." +
            "For example, you could say where should I eat, or you can say exit.";
        var repromptText = "Are you still hungry?";
        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechOutput, repromptOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "Goodbye",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = {
                speech: "Goodbye",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.tell(speechOutput);
    }
};

function getWelcomeResponse(response) {

var  cardTitle = "What Do You Want For Lunch Today"
var repromptText = "Are you still hungry?";
var speechText = "With Where To Eat, you can find a place to eat."
var cardOutput = "Where To Eat. What do you want for lunch?";

var speechOutput = {
  speech: "Goodbye",
  type: AlexaSkill.speechOutputType.SSML
};

var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.askWithCard(speechOutput, repromptOutput, cardTitle, cardOutput);
}

function handleWhereToEatRequest(intent, session, response) {
    var locSlot = intent.slots.loc;
    var repromptText = "Are you still hungry?";

function handleNextPlaceRequest(intent, session, response) {
    var locSlot = intent.slots.loc;
    var repromptText = "Are you still hungry?";

exports.handler = function (event, context) {
  var  skill = new WhereToEatSkill();
  skill.execute(event, context);
};
