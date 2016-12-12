var APP_ID = "amzn1.ask.skill.787bea41-e4c7-4473-b621-6fab77c8bfc8";

var https = require('https');
//I don't think I need this

var AlexaSkill = require('./AlexaSkill');

var WhereToEat = function () {
  AlexaSkill.call(this, APP_ID);

};

WhereToEat.prototype = Object.create(AlexaSkill.prototype);
WhereToEat.prototype.constructor = WhereToEat;

WhereToEat.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("WhereToEat onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

WhereToEat.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("WhereToEat onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    WelcomeResponse(response);
};

WhereToEat.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

WhereToEat.prototype.intentHandlers = {

    "WhereToEatIntent": function (intent, session, response) {
        handleWhereToEatRequest(intent, session, response);
    },

    "NextPlaceIntent": function (intent, session, response) {
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


function WelcomeResponse(response) {

var  cardTitle = "What Do You Want For Lunch Today";
var repromptText = "Are you still hungry?";
var speechText = "With Where To Eat, you can find a place to eat.";
var cardOutput = "Where To Eat. What do you want for lunch?";

var speechOutput = {
  speech: "Where to Eat. What do you want for lunch?",
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
}
function handleNextPlaceRequest(intent, session, response) {
    var locSlot = intent.slots.loc;
    var repromptText = "Are you still hungry?";
}
exports.handler = function (event, context) {
  var  skill = new WhereToEat();
  skill.execute(event, context);
};
