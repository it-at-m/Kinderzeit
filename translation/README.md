# Translation feature: Engineering Report

## The problem
* A "translate event description" feature is proposed to accomodate the international parents in Munich
* We should debate wether we should let them google translate themselves this text
* Does this lead to a text to audio transcription feature?
* Text decriptions range between 500 and ~3500 characters. However, it should be accounted that event organisers might add extra text to our platform if parents like it so much that they no longer visit the event organiser's webiste. We can assume a worst case of up to 5k characters per event description.

## Cloud Translate API
* Reliable + instant
* First 500k characters per month are free
* After 500k characters, $20 per million of characters (pricing is proportional, so 500k characters will cost $10)

## Our own model
* We deploy our own language model in Docker container 
* Translating ~3000 characters can take 3-5 minutes for each language pair
* Running the container itself costs money, so 

## Reccomendations
* Recommend using Cloud Translate API
* Instead of translating text on-demand (cost scales with number of event reads), translate the German description to `N` languages when the event is added and serve them on demand (cost scales with number of events). This recommendation holds even if we go with the "Our own model" option
* Overall, feature feels like a bit of a money-drain. Recommend more user research to decide if this is a must
* Rough estimate for the smart solution that uses Cloud Translate API. ~150 events are organised on Ferien portal over one year. Each event has 5000 characters (worst case estimate). We translate to 10 languages. 5000 * 150 * 10 = 7.500.000 characters. We have 6.000.000 free characters, with 500k offered each month. This feature will cost $30-$150 per year.
* Regarding the estimate above: using our own model will probably cost a lot more, as we don't have Google's economy of scale. The question is if we use Cloud Translate API or we decide this feature does not bring value.
