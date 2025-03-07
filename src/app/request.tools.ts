
  export function bearer(): string {
    return `Bearer ${process.env.APIKEY}`
  };
