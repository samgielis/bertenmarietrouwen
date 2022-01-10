export const Endpoints = {
    NewsletterSubscribtion: createEndpoint("subscribeToNewsletter"),
    AccessCheck: createEndpoint("checkAccess")
}

function createEndpoint(endpointName: string): string {
    return `/.netlify/functions/${endpointName}`;
}
