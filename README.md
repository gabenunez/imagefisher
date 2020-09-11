# ImageFisher 🎣

ImageFisher is a Zendesk app that runs a reverse image search on all attached images from the requester of a ticket using Puppeteer to scrape Google image search results. Hopefully this can be used to prevent fraudulent claims that require images as proof. 

Oh! and before I forget, this also utilizes Preact (with HTM) for the frontend and NodeJS in the back.

## Requirements

- [Zendesk apps tools](https://develop.zendesk.com/hc/en-us/articles/360001075048)
- Node *(tested on 12.3)*

## Usage

You can upload this repo as is and use the included Heroku link; however, I highly recommend setting up your own instance. I may make breaking changes one day or worse... :) 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments
- Thanks jildertvenema for the [reverse-image-search](https://github.com/jildertvenema/reverse-image-search) package, which the scraping pretty much mirrors (with the addition of making it use promises).

- Icons made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
