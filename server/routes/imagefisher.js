const express = require('express');
const router = express.Router();
const axios = require('axios');
const { reverseImageSearch } = require('./components/imagefisher');

router.post('/', async (req, res) => {
    try {
        const preRedirectImages = req.body;
        const imageSearchResults = [];

        for(imageURL of preRedirectImages) {
            const matchedImages = await reverseImageSearch(imageURL);
            imageSearchResults.push({ originalImageURL: imageURL, imageMatches: {total: matchedImages.length, sources: matchedImages} });
        }

        // Prevent False Positives (Returning "images" without a link)
        imageSearchResults.forEach(imageSearchResult => {
            imageSearchResult.imageMatches.sources = imageSearchResult.imageMatches.sources.filter(source => source.url);
            imageSearchResult.imageMatches.total = imageSearchResult.imageMatches.sources.length;
        });

        const totalMatchedImages = imageSearchResults.filter(item => item.imageMatches.total > 0).length;

        res.json({ totalMatchedImages, results: imageSearchResults })
    } catch(error) {
        console.error(error)
        res.status(500).json(error)
    }
});

module.exports = router;