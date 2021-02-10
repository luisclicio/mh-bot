export interface QueryItem {
  pattern: RegExp;
  response: (message?: string) => string;
}

export default function Bot(queries: QueryItem[], fallbackMessage: string) {
  return (message: string) => {
    const responses: string[] = [];

    queries.forEach((query) => {
      if (query.pattern.test(message)) {
        responses.push(query.response(message));
      }
    });

    const responseFound = responses.length > 0;

    if (!responseFound) {
      responses.push(fallbackMessage);
    }

    return responses;
  };
}
