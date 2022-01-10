import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";

const CONTACT_LIST_ID = 11378;

interface CheckAccessPayload {
    accessCode?: string;
}

const handler: Handler = (event, context, callback) => {
    try {
        const payload: CheckAccessPayload = JSON.parse(event.body);
        const { accessCode } = payload;
        if (payload?.accessCode === process.env.BM_ACCESSCODE) {
            return callback(undefined, createResponse("Subscription complete"));
        }
        return callback(undefined, createError("Wrong access code", 400));
    } catch (e) {
        console.log("catch", e)
        return callback(createError("Unknown error", 400), undefined);
    }

};

function createError(message: string, code?: number): Response {
    return {
        statusCode: code || 500,
        body: JSON.stringify({ error: message })
    }
}

function createResponse(message: string): Response {
    return {
        statusCode: 200,
        body: JSON.stringify({ error: message })
    }
}

export { handler };
