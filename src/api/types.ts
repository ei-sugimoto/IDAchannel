export type Token = {
    youtubeAPIKey?: string;
    CHANNEL_ID?: string;
}
export type Response = {
    kind: string;
    etag: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items:[
      {
        kind: string,
        etag: string,
        id: string,
        snippet: {
          title: string,
          description: string,
          customUrl: string,
          publishedAt: Date,
          thumbnails: {
            default: {
              url: string,
              width: number,
              height: number,
            },
            medium: {
              url: string,
              width: number,
              height: number,
            },
            high: {
              url: string,
              width: number,
              height: number,
            },
          },
        }
      }
    ]
}

export type Status = 200 | 400 | 403 | 404;

  