import KEY from "../../SECRET_KEY";

export const getAddressAutoCompleteSuggestion = (inputAddress, origin) => {
    const {
        GOOGLE_API_KEY
    } = KEY;
    const queryInputAddress = encodeURIComponent(inputAddress);
    let results = [];
    return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${queryInputAddress}&type=address&key=${GOOGLE_API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            json.predictions.forEach(pred => {
                results = [...results, {
                    "description": pred.description,
                    "main": pred.structured_formatting.main_text,
                    "secondary": pred.structured_formatting.secondary_text,
                    "place_id": pred.place_id
                }];
            });
            return results;
        })
        .catch((error) => console.error(error))
}